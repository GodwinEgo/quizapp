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

// Make sure each quiz object has a questions property (empty array if no questions)
const quizzesWithQuestions = quizzes.map((quiz) => ({
  ...quiz,
  questions: quiz.questions || [],
}));

const initialState = {
  quizzes: [],
  currentQuestion: 0,
  score: 0,
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
        })); // Shuffle and select the first 20 questions with initial state
      state.currentQuestion = 0;
      state.score = 0;
    },
    selectOption(state, action) {
      const { questionIndex, option } = action.payload;
      state.quizzes[questionIndex].selectedOption = option;
    },
    nextQuestion(state) {
      const currentQuestionData = state.quizzes[state.currentQuestion];

      if (currentQuestionData.answer === currentQuestionData.selectedOption) {
        // Increase score if the selected option is correct
        state.score += 1;
      }

      // Move to the next question
      if (state.currentQuestion < state.quizzes.length - 1) {
        state.currentQuestion += 1;
      }
    },
    prevQuestion(state) {
      // Move to the previous question
      if (state.currentQuestion > 0) {
        state.currentQuestion -= 1;
      }
    },
    submitQuiz(state) {
      // You can perform any actions or logic here when the quiz is submitted.
      // For this example, we can simply reset the quiz state.
      state.quizzes.forEach((question) => {
        question.selectedOption = "";
        question.isAnswered = false;
      });
      state.currentQuestion = 0;
      state.score = 0;
    },
  },
});

export const {
  startQuiz,
  selectOption,
  nextQuestion,
  prevQuestion,
  submitQuiz,
} = quizSlice.actions;
export default quizSlice.reducer;
