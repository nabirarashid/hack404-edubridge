const mongoose = require("mongoose");

const HelpRequestSchema = new mongoose.Schema({
    topic: String,
    details: String,
    date: { type: Date, default: Date.now }
})

const ProgressSummarySchema = new mongoose.Schema({
    summary: String,
    date: { type: Date, default: Date.now }
})

const StudentSchema = new mongoose.Schema({
    studentId: String,
    helpRequests: [HelpRequestSchema],
    progressSummaries: [ProgressSummarySchema]
})

module.exports = mongoose.model("Student", StudentSchema)