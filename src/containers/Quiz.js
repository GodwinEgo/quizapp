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
    const currentQuiz = quizzes[currentQuestion];

    if (
      currentQuiz &&
      currentQuiz.questions &&
      currentQuiz.questions.length > 0 &&
      currentQuiz.questions[0].answer === selectedOption
    ) {
      // Increase score if the selected option is correct
      dispatch(nextQuestion());
    }
  };

  const handleResetQuiz = () => {
    dispatch(resetQuiz());
  };

  const isQuizCompleted = currentQuestion >= 20;
  const currentQuiz = quizzes[currentQuestion];

  if (isQuizCompleted) {
    return <QuizResults />;
  }

  if (
    !currentQuiz ||
    !currentQuiz.questions ||
    currentQuiz.questions.length === 0
  ) {
    // Invalid or missing data, show an error message
    return <div>Error: No questions found for the current quiz.</div>;
  }

  const currentQuestionData = currentQuiz.questions[0];

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
        Next Question
      </button>
      <button onClick={handleResetQuiz}>Reset Quiz</button>
    </div>
  );
};

export default Quiz;
