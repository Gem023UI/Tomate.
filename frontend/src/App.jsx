import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FrontPage from "./components/FrontPage.jsx"
import Forums from "./components/Forums.jsx"
import Analytics from "./components/Analytics.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="page-content">
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
