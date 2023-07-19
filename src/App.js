import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Quiz from "./containers/Quiz";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" element={<Quiz />} />
      </BrowserRouter>
    </div>
  );
};

export default App;
