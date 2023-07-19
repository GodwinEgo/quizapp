import React, { useState } from "react";
import Question from "../components/Question";
import { useSelector } from "react-redux";

const Quiz = () => {
  const [currenQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const quizzes = useSelector((state) => state.quiz.quizzes);

  const handleNextQuestion = () => {
    //logic for next question
  };

  const handleSelectedOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      {quizzes.length > 0 && currenQuestion < quizzes.length && (
        <Question
          question={quizzes[currenQuestion].questions[currenQuestion].question}
          options={quizzes[currentQuestion].questions[currentQuestion].options}
          selectedOption={selectedOption}
          onSelectOption={handleSelectOption}
        />
      )}
      {/* BUTTON FOR HANDLING NEXT QUESTION */}
    </div>
  );
};

export default Quiz;
