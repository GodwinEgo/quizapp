// src/redux/quizSlice.js
import { createSlice } from "@reduxjs/toolkit";
import quizzes from "../data/quizzes";

// Function to shuffle an array using the Fisher-Yates algorithm
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Filter out quizzes with no questions and ensure each quiz has at least one question
const quizzesWithQuestions = quizzes.map((quiz) => ({
  ...quiz,
  questions: quiz.questions && quiz.questions.length ? quiz.questions : [{}], // Insert an empty question if no questions are available
}));

const initialState = {
  quizzes: shuffleArray(quizzesWithQuestions).slice(0, 20), // Shuffle and select the first 20 quizzes
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    selectOption(state, action) {
      state.selectedOption = action.payload;
    },
    nextQuestion(state) {
      const currentQuiz = state.quizzes[state.currentQuestion];
      const currentQuestionData = currentQuiz.questions[state.currentQuestion];
      if (
        currentQuestionData &&
        currentQuestionData.answer === state.selectedOption
      ) {
        state.score += 1;
      }
      state.currentQuestion += 1;
      state.selectedOption = "";
    },
    resetQuiz(state) {
      state.currentQuestion = 0;
      state.selectedOption = "";
      state.score = 0;
      state.quizzes = shuffleArray(quizzesWithQuestions).slice(0, 20);
    },
  },
});

export const { selectOption, nextQuestion, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
