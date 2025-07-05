import Home from './pages/Home'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <Router>
        <Header />
        <div className="flex h-screen">
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
    </Router>
  )
}

export default App
