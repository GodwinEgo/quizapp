import { createSlice } from "@reduxjs/toolkit";
import quizzes from "../data/quizzes";

const initialState = {
  quizzes,
  score: 0,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    //define rducers for the quiz
  },
});

export const {
  /* Export your reducers here */
} = quizSlice.actions;
export default quizSlice.reducer;
