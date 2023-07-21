// src/containers/Quiz.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startQuiz,
  selectOption,
  nextQuestion,
  prevQuestion,
  submitQuiz,
} from "../redux/quizSlice";
import Question from "../components/Question";
import QuizResults from "../components/QuizResults";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { quizzes, currentQuestion, score, isQuizCompleted } = useSelector(
    (state) => state.quiz
  );
  const currentQuestionData = quizzes[currentQuestion];

  useEffect(() => {
    dispatch(startQuiz());
  }, [dispatch]);

  const handleSelectOption = (option) => {
    dispatch(selectOption({ questionIndex: currentQuestion, option }));
  };

  const handleNextQuestion = () => {
    dispatch(nextQuestion());
  };

  const handlePrevQuestion = () => {
    dispatch(prevQuestion());
  };

  const handleSubmitQuiz = () => {
    dispatch(submitQuiz());
  };

  const handleEndQuiz = () => {
    navigate("/");
  };

  if (isQuizCompleted) {
    return (
      <div>
        <QuizResults score={score} totalQuestions={quizzes.length} />
        <button onClick={handleEndQuiz}>End Quiz</button>
      </div>
    );
  }

  if (!currentQuestionData) {
    // Invalid or missing data, show an error message
    return <div>Error: No questions found for the current quiz.</div>;
  }

  const isFirstQuestion = currentQuestion === 0;
  const isLastQuestion = currentQuestion === quizzes.length - 1;

  return (
    <div>
      <h2>
        Question {currentQuestion + 1}: {currentQuestionData.question}
      </h2>
      <Question
        question={currentQuestionData.question}
        options={currentQuestionData.options}
        selectedOption={currentQuestionData.selectedOption}
        onSelectOption={handleSelectOption}
      />
      <div className="button-container">
        {!isFirstQuestion && (
          <button onClick={handlePrevQuestion}>Prev Question</button>
        )}
        {isLastQuestion ? (
          <button onClick={handleSubmitQuiz}>Submit</button>
        ) : (
          <button onClick={handleNextQuestion}>Next Question</button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
