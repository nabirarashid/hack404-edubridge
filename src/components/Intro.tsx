import { 
  Home, 
  CreditCard, 
  BarChart3, 
  Settings, 
  Globe 
} from 'lucide-react';

const EduBridgeDashboard = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-gray-200 px-10 py-3">
          <div className="flex items-center gap-4 text-gray-900">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg font-bold leading-tight tracking-tight">EduBridge</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <button className="flex max-w-96 cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-gray-200 text-gray-900 gap-2 text-sm font-bold leading-normal tracking-wide min-w-0 px-2.5">
              <Globe size={20} />
            </button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC1q77SVJOpDAI6yAlB2U5bFMVeFBLp8KCAaHfS2CRevfHR_lnfu7HGyWXzfoJ9kP-ej0bogO9lYm5d7h9JdqwbX4K3UjbpzhXo_3hb1Oy9YTGqw3i6AO_5dgHxwXpsm1cI3KNT-4xlhNJUCXXTKcgtZ3GLQFZRoRMV2t-Gh9SDs6Lt-kSF141GDuLa8ftYVx5Bygw2kNQV9GmtOs_XTjkKIghbTlGxkDVXqjcbrGQd4IM_Pvg_8wc3fVNNMv5CjsxZX6LZGE_vMFEw")'
              }}
            />
          </div>
        </header>

        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          {/* Sidebar */}
          <div className="layout-content-container flex flex-col w-80">
            <div className="flex h-full min-h-[700px] flex-col justify-between bg-gray-50 p-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 px-3 py-2 rounded-full bg-gray-200">
                    <Home size={24} fill="currentColor" />
                    <p className="text-gray-900 text-sm font-medium leading-normal">Dashboard</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <CreditCard size={24} />
                    <p className="text-gray-900 text-sm font-medium leading-normal">Flashcards</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <BarChart3 size={24} />
                    <p className="text-gray-900 text-sm font-medium leading-normal">Reports</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <Settings size={24} />
                    <p className="text-gray-900 text-sm font-medium leading-normal">Settings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="layout-content-container flex flex-col max-w-4xl flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-gray-900 tracking-tight text-3xl font-bold leading-tight min-w-72">Welcome back, Anya!</p>
            </div>

            {/* Quick Access */}
            <h2 className="text-gray-900 text-xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">Quick Access</h2>
            <div className="flex justify-stretch">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-between">
                <button className="flex min-w-21 max-w-96 cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-blue-200 text-gray-900 text-sm font-bold leading-normal tracking-wide">
                  <span className="truncate">Join a Tutoring Session</span>
                </button>
                <button className="flex min-w-21 max-w-96 cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-blue-200 text-gray-900 text-sm font-bold leading-normal tracking-wide">
                  <span className="truncate">Ask a Question</span>
                </button>
              </div>
            </div>
            <div className="flex px-4 py-3 justify-start">
              <button className="flex min-w-21 max-w-96 cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-blue-200 text-gray-900 text-sm font-bold leading-normal tracking-wide">
                <span className="truncate">View My Schedule</span>
              </button>
            </div>

            {/* Announcements/Tips */}
            <h2 className="text-gray-900 text-xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">Announcements/Tips</h2>
            <div className="flex overflow-y-auto">
              <div className="flex items-stretch p-4 gap-3">
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                    style={{
                      backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCOFK5Qf0eNKZH7jAn7nXLVArRt8BfZ7vrJslSB7JiI-uvsGvPptH8hMLMrnAwhylnLCe3d8PB2VibVLag24Kh6vvxkcRZTNl2BSffV2VTDqvv_lZtwuv_dvDu3bY7CbD3d3_qJLeFvU48xMZB1I6vTSTgGpDC4va6lLe725eo1Y2VqIK3kXLDoDJq5RxKu4rIOkDabCN1KFtSChov_tZzYQYstoPz9Tt-ZUBjMu9UWo3eAZIHmKCfjbFtQiegWGggCd92xcSK55bZ7")'
                    }}
                  />
                  <div>
                    <p className="text-gray-900 text-base font-medium leading-normal">Study Smarter, Not Harder</p>
                    <p className="text-gray-600 text-sm font-normal leading-normal">Learn effective study techniques to maximize your learning and achieve your academic goals.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Chart */}
            <h2 className="text-gray-900 text-xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">Your Progress</h2>
            <div className="flex flex-wrap gap-4 px-4 py-6">
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-gray-300 p-6">
                <p className="text-gray-900 text-base font-medium leading-normal">Understanding Level</p>
                <p className="text-gray-900 tracking-tight text-3xl font-bold leading-tight truncate">85%</p>
                <div className="flex gap-1">
                  <p className="text-gray-600 text-base font-normal leading-normal">Last 30 Days</p>
                  <p className="text-green-600 text-base font-medium leading-normal">+5%</p>
                </div>
                <div className="flex min-h-45 flex-1 flex-col gap-8 py-4">
                  <svg width="100%" height="148" viewBox="-3 0 478 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
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
                      <linearGradient id="paint0_linear_1131_5935" x1="236" y1="1" x2="236" y2="149" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#e5e7eb" />
                        <stop offset="1" stopColor="#e5e7eb" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex justify-around">
                    <p className="text-gray-600 text-xs font-bold leading-normal tracking-wide">Week 1</p>
                    <p className="text-gray-600 text-xs font-bold leading-normal tracking-wide">Week 2</p>
                    <p className="text-gray-600 text-xs font-bold leading-normal tracking-wide">Week 3</p>
                    <p className="text-gray-600 text-xs font-bold leading-normal tracking-wide">Week 4</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm font-normal leading-normal pb-3 pt-1 px-4">You're improving in Science!</p>

            {/* Need Help Section */}
            <h2 className="text-gray-900 text-xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">Need Help?</h2>
            <div className="p-4">
              <div className="flex flex-col items-stretch justify-start rounded-xl xl:flex-row xl:items-start">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDa61xjq8r9QdHwGZOdDBZIr-ZyAPRbmAgG7clh5u_FH6I4l3E_oeV9eMEKYU5Wx_d1zAzWySzARjmu4sWfUVqjw-_KYSWtFH2JYQRXGN7OJPAgBMb8CbnWe3dRSUHFjzV5kbn62iog-Gd5UsZTi6__z84WlJC-d9EAqx42eJA-uYhO54vZ4OQ2Tr_14Adh54iWalI76Bjd9BfzbzDPgVh8QoLR2a9pe84u6lMkuxmB8amxK3ohgE1_4WGVJAsAF3Rhqz8dzEBLFrNm")'
                  }}
                />
                <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 xl:px-4">
                  <p className="text-gray-900 text-lg font-bold leading-tight tracking-tight">Upload Homework</p>
                  <div className="flex items-end gap-3 justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-gray-600 text-base font-normal leading-normal">Recent Uploads: 2</p>
                      <p className="text-gray-600 text-base font-normal leading-normal">Upload a photo of your homework to get hints in your language</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Topics Section */}
            <h2 className="text-gray-900 text-xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">Topics You Needed Help With</h2>
            <div className="flex items-center gap-4 bg-gray-50 px-4 min-h-18 py-2 justify-between">
              <div className="flex flex-col justify-center">
                <p className="text-gray-900 text-base font-medium leading-normal line-clamp-1">Math</p>
                <p className="text-gray-600 text-sm font-normal leading-normal line-clamp-2">Algebra - Solving Equations</p>
              </div>
              <div className="shrink-0">
                <p className="text-gray-600 text-sm font-normal leading-normal">2024-09-10</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-50 px-4 min-h-18 py-2 justify-between">
              <div className="flex flex-col justify-center">
                <p className="text-gray-900 text-base font-medium leading-normal line-clamp-1">English</p>
                <p className="text-gray-600 text-sm font-normal leading-normal line-clamp-2">Grammar - Sentence Structure</p>
              </div>
              <div className="shrink-0">
                <p className="text-gray-600 text-sm font-normal leading-normal">2024-09-05</p>
              </div>
            </div>

            {/* Report Section */}
            <h2 className="text-gray-900 text-xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">Send Report to Parent</h2>
            <div className="flex px-4 py-3 justify-start">
              <button className="flex min-w-21 max-w-96 cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-blue-200 text-gray-900 text-sm font-bold leading-normal tracking-wide">
                <span className="truncate">Generate Report</span>
              </button>
            </div>
            <p className="text-gray-600 text-sm font-normal leading-normal pb-3 pt-1 px-4">Last sent: 2 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EduBridgeDashboard;