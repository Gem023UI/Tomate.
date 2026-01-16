import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FrontPage from "./components/FrontPage.jsx"
import Forums from "./components/Forums.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="page-content">
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/forums" element={<Forums />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
