import './App.css'
import Home from "./pages/home"
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* paginas nao criadas */}
      <Route path="/projects/mobi" element={<Home />} />
      <Route path="/projects/mobi-dashboard" element={<Home />} />
      <Route path="/projects/fast-invest" element={<Home />} />
      <Route path="/projects/locadora-php" element={<Home />} />

    </Routes>
  )
}

export default App
