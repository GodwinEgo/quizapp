// src/components/LandingPage.js
import React from "react";
import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Container maxWidth="sm" sx={{ marginTop: "30vh", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Quiz App!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Test your knowledge with various quizzes.
      </Typography>
      <Button
        component={Link}
        to="/quiz"
        variant="contained"
        color="primary"
        sx={{ marginTop: 2 }}
      >
        Start Quiz
      </Button>
    </Container>
  );
};

export default LandingPage;
