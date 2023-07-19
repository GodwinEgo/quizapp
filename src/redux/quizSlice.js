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
  quizzes: quizzesWithQuestions.map((quiz) => ({
    ...quiz,
    questions: shuffleArray([...quiz.questions]).slice(0, 20), // Shuffle and select the first 20 questions
  })),
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    // Rest of the code remains the same
  },
});

export const { selectOption, nextQuestion, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
