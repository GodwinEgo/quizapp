import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quiz from "./containers/Quiz";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
