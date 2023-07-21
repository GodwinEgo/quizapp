// src/containers/Quiz.js
import React, { useEffect, useState } from "react";
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

const Quiz = () => {
  const dispatch = useDispatch();
  const { quizzes, currentQuestion, score } = useSelector(
    (state) => state.quiz
  );
  const currentQuestionData = quizzes[currentQuestion];

  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

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
    setIsQuizCompleted(true);
    dispatch(submitQuiz());
  };

  if (isQuizCompleted) {
    return <QuizResults score={score} />;
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
