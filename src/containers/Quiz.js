// src/containers/Quiz.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectOption, nextQuestion, resetQuiz } from "../redux/quizSlice";
import Question from "../components/Question";

const Quiz = () => {
  const dispatch = useDispatch();
  const { quizzes, currentQuestion, selectedOption, score } = useSelector(
    (state) => state.quiz
  );

  console.log(quizzes); // Check if quizzes data is available
  console.log(currentQuestion); // Check the value of currentQuestion
  console.log(quizzes[currentQuestion]); // Check if currentQuiz data is available

  useEffect(() => {
    dispatch(resetQuiz());
  }, [dispatch]);

  const handleSelectOption = (option) => {
    dispatch(selectOption(option));
  };

  const handleNextQuestion = () => {
    dispatch(nextQuestion());
  };

  if (currentQuestion >= 20) {
    // Check if 20 questions have been answered
    return (
      <div>
        <h2>Quiz Completed!</h2>
        <p>Your Score: {score}</p>
        <button onClick={() => dispatch(resetQuiz())}>Restart Quiz</button>
      </div>
    );
  }

  const currentQuiz = quizzes[currentQuestion];
  const currentQuestionData = currentQuiz.questions[currentQuestion];

  return (
    <div>
      <h2>{currentQuiz.title}</h2>
      <Question
        question={currentQuestionData.question}
        options={currentQuestionData.options}
        selectedOption={selectedOption}
        onSelectOption={handleSelectOption}
      />
      <button onClick={handleNextQuestion} disabled={!selectedOption}>
        {currentQuestion === 19 ? "Finish Quiz" : "Next Question"}
      </button>
    </div>
  );
};

export default Quiz;
