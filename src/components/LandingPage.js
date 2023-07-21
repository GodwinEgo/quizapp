// src/components/LandingPage.js
import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to the Quiz App</h1>
      <Link to="/quiz" className="start-quiz-button">
        Start Quiz
      </Link>
    </div>
  );
};

export default LandingPage;
