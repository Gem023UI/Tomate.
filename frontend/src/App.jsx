import { useState } from 'react'
import FrontPage from "./components/FrontPage.jsx"
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="page-content">
        <Routes>
          <Route path="/" element={<FrontPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
