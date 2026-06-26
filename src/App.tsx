import './App.css'
import Home from "./pages/home";
import Mobi from "./pages/projects/mobi";
import MobiDashboard from "./pages/projects/mobidashboard";
import FastInvest from "./pages/projects/fastinvest";
import LocadoraCefet from "./pages/projects/locadora";
import Echobound from "./pages/projects/echobound";

import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* paginas nao criadas */}
      <Route path="/projects/mobi" element={<Mobi />} />
      <Route path="/projects/mobi-dashboard" element={<MobiDashboard />} />
      <Route path="/projects/fast-invest" element={<FastInvest />} />
      <Route path="/projects/locadora-php" element={<LocadoraCefet />} />
      <Route path="/projects/echobound" element={<Echobound />} />

    </Routes>
  )
}

export default App
