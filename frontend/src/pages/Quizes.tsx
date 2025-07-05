import { useState } from 'react';
import Button from '../components/Button';

// Quizzes Page Component
const Quizzes = () => {
  const [quizzes] = useState([
    { subject: 'Math', icon: '📐', questions: 15, color: 'from-blue-400 to-blue-600' },
    { subject: 'English', icon: '📚', questions: 20, color: 'from-green-400 to-green-600' },
    { subject: 'Science', icon: '🧪', questions: 12, color: 'from-purple-400 to-purple-600' }
  ]);

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="layout-content-container flex flex-col max-w-4xl flex-1">
          
          {/* Header */}
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-gray-900 tracking-tight text-3xl font-bold leading-tight min-w-72">Practice Quizzes</p>
          </div>

          {/* Quick Actions */}
          <h2 className="text-gray-900 text-xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">Quick Start</h2>
          <div className="flex justify-stretch">
            <div className="flex flex-1 gap-3 flex-wrap px-4 py-3">
              <Button text="Random Quiz" onClick={() => {}} />
              <Button text="Review Mistakes" onClick={() => {}} />
            </div>
          </div>

          {/* Available Quizzes */}
          <h2 className="text-gray-900 text-xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">Available Quizzes</h2>
          <div className="flex overflow-x-auto">
            <div className="flex items-stretch p-4 gap-3">
              {quizzes.map((quiz, index) => (
                <div key={index} className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div className={`w-full bg-gradient-to-br ${quiz.color} rounded-xl flex flex-col justify-center items-center aspect-square p-6`}>
                    <div className="text-white text-4xl font-bold mb-2">{quiz.icon}</div>
                    <div className="text-white text-center">
                      <p className="text-lg font-bold">{quiz.subject}</p>
                      <p className="text-sm opacity-90">{quiz.questions} Questions</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-900 text-base font-medium leading-normal">{quiz.subject} Quiz</p>
                    <p className="text-gray-600 text-sm font-normal leading-normal mb-2">Test your knowledge</p>
                    <Button text="Start Quiz" onClick={() => {}} className="w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Quiz */}
          <h2 className="text-gray-900 text-xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">Recent Quiz</h2>
          <div className="flex flex-wrap gap-4 px-4 py-6">
            <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-gray-300 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-900 text-base font-medium leading-normal">Math Quiz</p>
                  <p className="text-gray-600 text-sm font-normal leading-normal">Yesterday</p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Passed</span>
              </div>
              <div className="flex gap-4 mt-4">
                <div className="flex-1">
                  <p className="text-gray-600 text-xs font-normal leading-normal">Score</p>
                  <p className="text-gray-900 text-2xl font-bold leading-tight">18/20</p>
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 text-xs font-normal leading-normal">Time</p>
                  <p className="text-gray-900 text-2xl font-bold leading-tight">12m</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quiz Stats */}
          <h2 className="text-gray-900 text-xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">Your Stats</h2>
          <div className="px-4 py-3">
            <div className="flex items-center gap-4 bg-white rounded-lg border border-gray-300 px-4 min-h-18 py-4 justify-between mb-3">
              <div className="flex flex-col justify-center">
                <p className="text-gray-900 text-base font-medium leading-normal">Average Score</p>
                <p className="text-gray-600 text-sm font-normal leading-normal">All subjects</p>
              </div>
              <div className="text-right">
                <p className="text-gray-900 text-2xl font-bold leading-tight">85%</p>
                <p className="text-green-600 text-sm font-medium leading-normal">+3%</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white rounded-lg border border-gray-300 px-4 min-h-18 py-4 justify-between">
              <div className="flex flex-col justify-center">
                <p className="text-gray-900 text-base font-medium leading-normal">Streak</p>
                <p className="text-gray-600 text-sm font-normal leading-normal">Daily practice</p>
              </div>
              <div className="text-right">
                <p className="text-gray-900 text-2xl font-bold leading-tight">7 days</p>
                <p className="text-orange-600 text-sm font-medium leading-normal">🔥</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quizzes;