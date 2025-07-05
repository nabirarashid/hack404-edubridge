import { useState } from 'react';
import Button from '../components/Button';

const Report = () => {
  const [reportData] = useState([
    { subject: 'Math', score: '92%', change: '+8%', sessions: 15 },
    { subject: 'English', score: '85%', change: '+3%', sessions: 12 },
    { subject: 'Science', score: '78%', change: '-2%', sessions: 8 }
  ]);

  const [parentEmail, setParentEmail] = useState("");

  const handleSendReport = () => {
    // Get parent's email if not already stored
    let email = parentEmail;
    if (!email) {
      email = prompt("Please enter your parent's email address:") || "";
      if (!email) {
        alert("Email address is required to send the report.");
        return;
      }
      setParentEmail(email); // Store for future use
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      setParentEmail(""); // Clear invalid email
      return;
    }

    // Create mailto link with subject and body
    const subject = encodeURIComponent(
      "EduBridge Progress Report - " + new Date().toLocaleDateString()
    );
    const body = encodeURIComponent(`Dear Parent,

Here is the latest progress report from EduBridge:

[generated report by the LLM]

Best regards,
EduBridge Team`);

    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };    

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="layout-content-container flex flex-col max-w-4xl flex-1">
          
          {/* Header */}
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-gray-900 tracking-tight text-3xl font-bold leading-tight min-w-72">Progress Reports</p>
          </div>

          {/* Send Report to Parent Section */}
          <h2 className="text-gray-900 text-xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">
            Send Report to Parent
          </h2>
          {parentEmail && (
            <p className="text-gray-600 text-sm font-normal leading-normal px-4 pb-2">
              Parent Email: {parentEmail}
              <button
                onClick={() => setParentEmail("")}
                className="ml-2 text-blue-600 hover:text-blue-800 underline text-xs"
              >
                Change
              </button>
            </p>
          )}
          <div className="flex px-4 py-3 justify-start">
            <button
              onClick={handleSendReport}
              className="flex min-w-21 max-w-96 cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-blue-200 text-gray-900 text-sm font-bold leading-normal tracking-wide hover:bg-blue-300 transition-colors"
            >
              <span className="truncate">Send Report</span>
            </button>
          </div>
          <p className="text-gray-600 text-sm font-normal leading-normal pb-3 pt-1 px-4">
            Last sent: 2 days ago
          </p>

          {/* Recent Report */}
          <h2 className="text-gray-900 text-xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">Latest Report</h2>
          <div className="flex flex-wrap gap-4 px-4 py-6">
            <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-gray-300 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-900 text-base font-medium leading-normal">Weekly Progress</p>
                  <p className="text-gray-600 text-sm font-normal leading-normal">Last 7 days</p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Sent</span>
              </div>
              <div className="flex gap-4 mt-4">
                <div className="flex-1">
                  <p className="text-gray-600 text-xs font-normal leading-normal">Overall Score</p>
                  <p className="text-gray-900 text-2xl font-bold leading-tight">85%</p>
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 text-xs font-normal leading-normal">Subjects</p>
                  <p className="text-gray-900 text-2xl font-bold leading-tight">3</p>
                </div>
              </div>
            </div>
          </div>

          {/* Subject Performance */}
          <h2 className="text-gray-900 text-xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">Subject Performance</h2>
          <div className="px-4 py-3">
            {reportData.map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-white rounded-lg border border-gray-300 px-4 min-h-18 py-4 justify-between mb-3">
                <div className="flex flex-col justify-center">
                  <p className="text-gray-900 text-base font-medium leading-normal">{item.subject}</p>
                  <p className="text-gray-600 text-sm font-normal leading-normal">{item.sessions} sessions</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-900 text-lg font-bold leading-tight">{item.score}</p>
                  <p className={`text-sm font-medium leading-normal ${item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {item.change}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;