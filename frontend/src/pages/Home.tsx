import Image from "../components/Image";
import Button from "../components/Button";
import { useState } from "react";

const Home = () => {
  const [parentEmail, setParentEmail] = useState<string>("");

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
    <div
      className="relative flex size-full min-h-screen flex-col bg-gray-50"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <Image />
      <div className="layout-container flex h-full grow flex-col">
        {/* Main Content */}
        <div className="layout-content-container flex flex-col max-w-4xl flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-gray-900 tracking-tight text-3xl font-bold leading-tight min-w-72">
              Welcome back, Anya!
            </p>
          </div>

          {/* Progress Chart */}
          <h2 className="text-gray-900 text-xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">
            Your Progress
          </h2>
          <div className="flex flex-wrap gap-4 px-4 py-6">
            <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-gray-300 p-6">
              <p className="text-gray-900 text-base font-medium leading-normal">
                Understanding Level
              </p>
              <p className="text-gray-900 tracking-tight text-3xl font-bold leading-tight truncate">
                85%
              </p>
              <div className="flex gap-1">
                <p className="text-gray-600 text-base font-normal leading-normal">
                  Last 30 Days
                </p>
                <p className="text-green-600 text-base font-medium leading-normal">
                  +5%
                </p>
              </div>
              <div className="flex min-h-45 flex-1 flex-col gap-8 py-4">
                <svg
                  width="100%"
                  height="148"
                  viewBox="-3 0 478 150"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                    fill="url(#paint0_linear_1131_5935)"
                  />
                  <path
                    d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                    stroke="#6b7280"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1131_5935"
                      x1="236"
                      y1="1"
                      x2="236"
                      y2="149"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#e5e7eb" />
                      <stop offset="1" stopColor="#e5e7eb" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="flex justify-around">
                  <p className="text-gray-600 text-xs font-bold leading-normal tracking-wide">
                    Week 1
                  </p>
                  <p className="text-gray-600 text-xs font-bold leading-normal tracking-wide">
                    Week 2
                  </p>
                  <p className="text-gray-600 text-xs font-bold leading-normal tracking-wide">
                    Week 3
                  </p>
                  <p className="text-gray-600 text-xs font-bold leading-normal tracking-wide">
                    Week 4
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-sm font-normal leading-normal pb-3 pt-1 px-4">
            You're improving in Science!
          </p>

          {/* Need Help Section */}
          <h2 className="text-gray-900 text-xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">
            Need Help?
          </h2>
          <div className="p-4">
            <div className="flex flex-col items-stretch justify-start rounded-xl xl:flex-row xl:items-start">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDa61xjq8r9QdHwGZOdDBZIr-ZyAPRbmAgG7clh5u_FH6I4l3E_oeV9eMEKYU5Wx_d1zAzWySzARjmu4sWfUVqjw-_KYSWtFH2JYQRXGN7OJPAgBMb8CbnWe3dRSUHFjzV5kbn62iog-Gd5UsZTi6__z84WlJC-d9EAqx42eJA-uYhO54vZ4OQ2Tr_14Adh54iWalI76Bjd9BfzbzDPgVh8QoLR2a9pe84u6lMkuxmB8amxK3ohgE1_4WGVJAsAF3Rhqz8dzEBLFrNm")',
                }}
              />
              <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 xl:px-4">
                <p className="text-gray-900 text-lg font-bold leading-tight tracking-tight">
                  Upload Homework
                </p>
                <div className="flex items-end gap-3 justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="text-gray-600 text-base font-normal leading-normal">
                      Recent Uploads: 2
                    </p>
                    <p className="text-gray-600 text-base font-normal leading-normal">
                      Upload a photo of your homework to get hints in your
                      language
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Topics Section */}
          <h2 className="text-gray-900 text-xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">
            Topics You Needed Help With
          </h2>
          <div className="flex items-center gap-4 bg-gray-50 px-4 min-h-18 py-2 justify-between">
            <div className="flex flex-col justify-center">
              <p className="text-gray-900 text-base font-medium leading-normal line-clamp-1">
                Math
              </p>
              <p className="text-gray-600 text-sm font-normal leading-normal line-clamp-2">
                Algebra - Solving Equations
              </p>
            </div>
            <div className="shrink-0">
              <p className="text-gray-600 text-sm font-normal leading-normal">
                2024-09-10
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-gray-50 px-4 min-h-18 py-2 justify-between">
            <div className="flex flex-col justify-center">
              <p className="text-gray-900 text-base font-medium leading-normal line-clamp-1">
                English
              </p>
              <p className="text-gray-600 text-sm font-normal leading-normal line-clamp-2">
                Grammar - Sentence Structure
              </p>
            </div>
            <div className="shrink-0">
              <p className="text-gray-600 text-sm font-normal leading-normal">
                2024-09-05
              </p>
            </div>
          </div>

          {/* Report Section */}
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
              <span className="truncate">Generate Report</span>
            </button>
          </div>
          <p className="text-gray-600 text-sm font-normal leading-normal pb-3 pt-1 px-4">
            Last sent: 2 days ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
