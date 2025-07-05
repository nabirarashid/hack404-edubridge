import Home from './pages/Home'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Quizes from './pages/Quizes'
import Report from './pages/Report'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

fetch('/api/help-request', {
  method: 'POST'})

function App() {

  return (
    <Router>
        <Header />
        <div className="flex h-screen">
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/quizes" element={<Quizes />} />
      </Routes>
      </div>
    </Router>
  )
}

export default App
