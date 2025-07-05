require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Student = require("./models/Student");


mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

// saving help request
app.post("/help-request", async (req, res) => {
  const { studentId, topic, details } = req.body;
  

  try {
    const student = await Student.findOneAndUpdate(
      { studentId },
      { $push: { helpRequests: { topic, details, date: new Date() } } },
      { new: true, upsert: true }
    );

    res.json({ status: "success", student });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Failed to save help request" });
  }
});

// getting help requests
app.get("/help-request/:studentId", async (req, res) => {
  const studentId = req.params.studentId;

  try {
    const student = await Student.findOne({ studentId });
    if (!student) {
      return res.json([]);
    }
    res.json(student.helpRequests);
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Failed to fetch help requests" });
  }
});

// calling gemini api to summarize help requests
app.post("/summarize", async (req, res) => {
  const { studentId } = req.body;

  try {
    const student = await Student.findOne({ studentId });

    if (!student || !student.helpRequests.length) {
      return res.json({ summary: "No data available" });
    }

    const prompt = `Summarize this student's struggles and generate a progress update:\n${JSON.stringify(
      student.helpRequests,
      null,
      2
    )}`;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    student.progressSummaries.push({ summary: text, date: new Date() });
    await student.save();

    res.json({ summary: text });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to generate summary" });
  }
});


// calling gemini api to summarize help requests
app.post("/getQuestions", async (req, res) => {
  const { studentId } = req.body;

  try {
    const student = await Student.findOne({ studentId });
    const topics = await student.helpRequests.map((h) => h.topic);


    if (!student || !student.helpRequests.length) {
      return res.json({ result: "No data available" });
    }

    // Prompt with different help topics
    const prompt = `Create 10 practice problems based on previous topics this student has asked about. Give priority to more recent topics, and also the frequency of similar topics. Here are some previous topics to base questions off of: ${topics.join(", ")}\n${JSON.stringify(
        student.helpRequests,
        null,
        2
      )}`;
  
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return res.json({questions: text})

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to generate summary" });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});