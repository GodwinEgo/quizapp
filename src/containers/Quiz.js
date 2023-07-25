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
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import styled from "@emotion/styled";
const useStyles = styled((theme) => ({
  quizContainer: {
    maxWidth: 500,
    margin: "0 auto",
    padding: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[3],
  },
  questionText: {
    color: theme.palette.common.white,
    marginBottom: theme.spacing(2),
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(2),
  },
  button: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1, 3),
    border: "none",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  submitButton: {
    backgroundColor: theme.palette.success.main,
    "&:hover": {
      backgroundColor: theme.palette.success.dark,
    },
  },
}));

const Quiz = () => {
  const classes = useStyles();
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

  const handleEndQuiz = () => {
    navigate("/");
  };

  const handleSubmitQuiz = () => {
    dispatch(submitQuiz());
  };

  if (isQuizCompleted) {
    return (
      <div className={classes.quizContainer}>
        <QuizResults score={score} totalQuestions={quizzes.length} />
        <button className={classes.button} onClick={handleEndQuiz}>
          End Quiz
        </button>
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
    <div className={classes.quizContainer}>
      <h2 className={classes.questionText}>
        Question {currentQuestion + 1}: {currentQuestionData.question}
      </h2>
      <Question
        question={currentQuestionData.question}
        options={currentQuestionData.options}
        selectedOption={currentQuestionData.selectedOption}
        onSelectOption={handleSelectOption}
      />
      <div className={classes.buttonContainer}>
        {!isFirstQuestion && (
          <button className={classes.button} onClick={handlePrevQuestion}>
            <ArrowBack />
          </button>
        )}
        {isLastQuestion ? (
          <button
            className={`${classes.button} ${classes.submitButton}`}
            onClick={handleSubmitQuiz}
          >
            Submit
          </button>
        ) : (
          <button className={classes.button} onClick={handleNextQuestion}>
            <ArrowForward />
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
