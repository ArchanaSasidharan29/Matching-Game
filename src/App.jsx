import React from "react";
import { Routes, Route } from "react-router-dom";
import IntroScreen from "./pages/IntroScreen/IntroScreen";
import IntroScreen2 from "./pages/IntroScreen2/IntroScreen2";
import IntroScreen3 from "./pages/IntroScreen3/IntroScreen3";
import InstructionScreen from "./pages/InstructionScreen/InstructionScreen";
import ActivityScreen from "./pages/ActivityScreen/ActivityScreen";
import RewardScreen from "./pages/RewardScreen/RewardScreen";
import "./App.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<IntroScreen />} />
        <Route path="/intro" element={<IntroScreen2 />} />
        <Route path="/intro-screen" element={<IntroScreen3 />} />
        <Route path="/instruction" element={<InstructionScreen />} />
        <Route path="/activity" element={<ActivityScreen />} />
        <Route path="/reward" element={<RewardScreen />} />
      </Routes>
    </div>
  );
};

export default App;
