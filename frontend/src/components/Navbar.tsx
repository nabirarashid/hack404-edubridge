import { 
  Home, 
  CreditCard, 
  BarChart3, 
} from 'lucide-react';

import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  
  const navigate = useNavigate()

  return (
    <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          {/* Sidebar */}
          <div className="layout-content-container flex flex-col w-80">
            <div className="flex h-full min-h-[700px] flex-col justify-between bg-gray-50 p-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 px-3 py-2 rounded-full bg-gray-200">
                    <Home size={24} fill="currentColor" />
                    <p className="text-gray-900 text-sm font-medium leading-normal" onClick={() => navigate("/")}>Home</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <CreditCard size={24} />
                    <p className="text-gray-900 text-sm font-medium leading-normal" onClick={() => navigate("/report")}>Reports</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <BarChart3 size={24} />
                    <p className="text-gray-900 text-sm font-medium leading-normal" onClick={() => navigate("/quizes")}>Quizzes</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Navbar