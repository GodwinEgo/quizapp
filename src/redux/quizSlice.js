// src/redux/quizSlice.js
import { createSlice } from "@reduxjs/toolkit";
import quizzes from "../data/quizzes";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const quizzesWithQuestions = quizzes.map((quiz) => ({
  ...quiz,
  questions: quiz.questions || [],
}));

const initialState = {
  quizzes: [],
  currentQuestion: 0,
  score: 0,
  isQuizCompleted: false,
  showAnswers: false,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    startQuiz(state) {
      state.quizzes = shuffleArray(
        quizzesWithQuestions.flatMap((quiz) => quiz.questions)
      )
        .slice(0, 20)
        .map((question) => ({
          ...question,
          selectedOption: "",
          isAnswered: false,
        }));
      state.currentQuestion = 0;
      state.score = 0;
      state.isQuizCompleted = false;
    },
    selectOption(state, action) {
      const { questionIndex, option } = action.payload;
      state.quizzes[questionIndex].selectedOption = option;
    },
    nextQuestion(state) {
      const currentQuestionData = state.quizzes[state.currentQuestion];
      currentQuestionData.isAnswered = true;
      if (currentQuestionData.answer === currentQuestionData.selectedOption) {
        state.score += 1;
      }
      if (state.currentQuestion < state.quizzes.length - 1) {
        state.currentQuestion += 1;
      }
    },
    prevQuestion(state) {
      if (state.currentQuestion > 0) {
        state.currentQuestion -= 1;
      }
    },
    submitQuiz(state) {
      state.score = state.quizzes.reduce((acc, question) => {
        if (question.answer === question.selectedOption) {
          return acc + 1;
        }
        return acc;
      }, 0);
      state.quizzes.forEach((question) => {
        question.isAnswered = true;
      });
      state.currentQuestion = 0;
      state.isQuizCompleted = true;
    },
    endQuiz(state) {
      state.quizzes = [];
      state.currentQuestion = 0;
      state.score = 0;
      state.isQuizCompleted = false;
      state.showAnswers = false;
    },
    toggleShowAnswers(state) {
      state.showAnswers = !state.showAnswers;
    },
  },
});

export const {
  startQuiz,
  selectOption,
  nextQuestion,
  prevQuestion,
  submitQuiz,
  endQuiz,
  toggleShowAnswers,
} = quizSlice.actions;
export default quizSlice.reducer;
