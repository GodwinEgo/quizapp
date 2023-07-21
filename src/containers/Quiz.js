// src/containers/Quiz.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startQuiz,
  selectOption,
  nextQuestion,
  resetQuiz,
} from "../redux/quizSlice";
import Question from "../components/Question";
import QuizResults from "../components/QuizResults";

const Quiz = () => {
  const dispatch = useDispatch();
  const { quizzes, currentQuestion, selectedOption } = useSelector(
    (state) => state.quiz
  );

  useEffect(() => {
    dispatch(startQuiz());
  }, [dispatch]);

  const handleSelectOption = (option) => {
    dispatch(selectOption(option));
  };

  const handleNextQuestion = () => {
    dispatch(nextQuestion());
  };

  const handleResetQuiz = () => {
    dispatch(resetQuiz());
  };

  const isQuizCompleted = currentQuestion >= quizzes.length;
  const currentQuestionData = quizzes[currentQuestion];

  if (isQuizCompleted) {
    return <QuizResults />;
  }

  if (!currentQuestionData) {
    // Invalid or missing data, show an error message
    return <div>Error: No questions found for the current quiz.</div>;
  }

  return (
    <div>
      <h2>{currentQuestionData.question}</h2>
      <Question
        question={currentQuestionData.question}
        options={currentQuestionData.options}
        selectedOption={selectedOption}
        onSelectOption={handleSelectOption}
      />
      <button onClick={handleNextQuestion}>Next Question</button>
      <button onClick={handleResetQuiz}>Reset Quiz</button>
    </div>
  );
};

export default Quiz;
