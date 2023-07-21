import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quiz from "./containers/Quiz";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
