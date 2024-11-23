import React, { useState } from "react";
import { Container, Typography, Box, FormControl, Select, MenuItem, Button } from "@mui/material";

const QuestionnaireForm = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const optionRange5 = ["Very Often", "Often", "Sometimes", "Rarely", "Never"];
  const optionRange4 = ["Always", "Often", "Sometimes", "Never"];

  const questions = {
    page1: [
      { text: "What is your age?", options: ["Below 18", "18-22", "23-26", "27-30", "Above 30"] },
      { text: "Gender?", options: ["Male", "Female", "Prefer not to say"] },
      { text: "University?", options: [
          "Independent University, Bangladesh (IUB)",
          "Daffodil University",
          "Bangladesh University of Engineering and Technology (BUET)",
          "BRAC University",
          "Dhaka University (DU)",
          "North South University (NSU)",
          "American International University Bangladesh (AIUB)",
          "Dhaka University of Engineering and Technology (DUET)",
          "Rajshahi University (RU)",
          "Islamic University of Technology (IUT)",
          "United International University (UIU)",
          "Patuakhali Science and Technology University",
          "Rajshahi University of Engineering and Technology (RUET)",
          "East West University (EWU)",
          "Bangladesh Agricultural University (BAU)"
        ] },
      { text: "Department?", options: [
          "Engineering - CS / CSE / CSC / Similar to CS",
          "Other",
          "Engineering - EEE/ ECE / Similar to EEE",
          "Environmental and Life Sciences",
          "Business and Entrepreneurship Studies",
          "Pharmacy and Public Health",
          "Biological Sciences",
          "Engineering - Civil Engineering / Similar to CE",
          "Engineering - Mechanical Engineering / Similar to ME",
          "Engineering - Other",
          "Law and Human Rights",
          "Liberal Arts and Social Sciences"
        ] },
      { text: "Academic Year?", options: [
        "Fourth Year or Equivalent",
        "First Year or Equivalent",
        "Third Year or Equivalent",
        "Second Year or Equivalent",
        "Other"
      ] },
      { text: "Current CGPA?", options: [
            "2.50 - 2.99",
            "3.80 - 4.00",
            "3.00 - 3.39",
            "3.40 - 3.79",
            "Below 2.50",
            "Other"
        ] },
      { text: "Scholarship?", options: ["yes", "no"] },
    ],
    page2: [
      { text: "In a semester, how often you felt nervous, anxious or on edge due to academic pressure?", options: optionRange4 },
      { text: "In a semester, how often have you been unable to stop worrying about your academic affairs?", options: optionRange4 },
      { text: "In a semester, how often have you had trouble relaxing due to academic pressure?", options: optionRange4 },
      { text: "In a semester, how often have you been easily annoyed or irritated because of academic pressure?", options: optionRange4 },
      { text: "In a semester, how often have you worried too much about academic affairs?", options: optionRange4 },
      { text: "In a semester, how often have you been so restless due to academic pressure that it is hard to sit still?", options: optionRange4 },
      { text: "In a semester, how often have you felt afraid, as if something awful might happen?", options: optionRange4 },
    ],
    page3: [
      { text: "In a semester, how often have you felt upset due to something that happened in your academic affairs? ", options: optionRange5 },
      { text: "In a semester, how often you felt as if you were unable to control important things in your academic affairs", options: optionRange5 },
      { text: "In a semester, how often you felt nervous and stressed because of academic pressure? ", options: optionRange5 },
      { text: "In a semester, how often you felt as if you could not cope with all the mandatory academic activities? (e.g, assignments, quiz, exams) ", options: optionRange5 },
      { text: "In a semester, how often you felt confident about your ability to handle your academic / university problems?", options: optionRange5 },
      { text: "In a semester, how often you felt as if things in your academic life is going on your way? ", options: optionRange5 },
      { text: "In a semester, how often are you able to control irritations in your academic / university affairs? ", options: optionRange5 },
      { text: "In a semester, how often you felt as if your academic performance was on top? ", options: optionRange5 },
      { text: "In a semester, how often you got angered due to bad performance or low grades that is beyond your control?  ", options: optionRange5 },
      { text: "In a semester, how often you felt as if academic difficulties are piling up so high that you could not overcome them?  ", options: optionRange5 },
    ],
    page4: [
      { text: "In a semester, how often have you had little interest or pleasure in doing things?", options: optionRange4 },
      { text: "In a semester, how often have you been feeling down, depressed or hopeless?", options: optionRange4 },
      { text: "In a semester, how often have you had trouble falling or staying asleep, or sleeping too much? ", options: optionRange4 },
      { text: "In a semester, how often have you been feeling tired or having little energy? ", options: optionRange4 },
      { text: "In a semester, how often have you had poor appetite or overeating? ", options: optionRange4 },
      { text: "In a semester, how often have you been feeling bad about yourself - or that you are a failure or have let yourself or your family down? ", options: optionRange4 },
      { text: "In a semester, how often have you been having trouble concentrating on things, such as reading the books or watching television? ", options: optionRange4 },
      { text: "In a semester, how often have you moved or spoke too slowly for other people to notice? Or you've been moving a lot more than usual because you've been restless? ", options: optionRange4 },
      { text: "In a semester, how often have you had thoughts that you would be better off dead, or of hurting yourself? ", options: optionRange4 },
    ],
  };

  const [answers, setAnswers] = useState(() => {
    const initialAnswers = {};
    Object.keys(questions).forEach((page) => {
      initialAnswers[page] = {};
      questions[page].forEach((q) => {
        initialAnswers[page][q.text] = "";
      });
    });
    return initialAnswers;
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({
      ...prev,
      [`page${currentPage}`]: {
        ...prev[`page${currentPage}`],
        [name]: value,
      },
    }));
  };

  const nextPage = () => {
    const unansweredQuestions = questions[`page${currentPage}`].some(
      (q) => !answers[`page${currentPage}`][q.text]
    );
    if (!unansweredQuestions) {
      if (currentPage < Object.keys(questions).length) {
        setCurrentPage(currentPage + 1);
      }
    } else {
      alert("Please answer all questions on this page.");
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Submitted Answers:", answers);
    alert("Thank you for completing the questionnaire!");
  };

  const renderQuestions = () => {
    return questions[`page${currentPage}`].map((question, index) => (
      <Box key={`q${index}`} marginBottom={2}>
        <Typography variant="body1" gutterBottom>
          {question.text} (required)
        </Typography>
        <FormControl fullWidth>
          <Select
            name={question.text}
            value={answers[`page${currentPage}`][question.text] || ""}
            onChange={handleChange}
            displayEmpty
            required
            aria-label={question.text}
            sx={{
              "& .MuiSelect-icon": {
                color: "#1976d2", // Icon color
              },
              "& .MuiInputBase-root": {
                borderRadius: "4px",
                padding: "10px",
                backgroundColor: "#f5f5f5", // Background color for select
              },
              "&:focus": {
                borderColor: "#1976d2", // Blue focus color for inputs
                boxShadow: "0 0 5px rgba(25, 118, 210, 0.5)", // Subtle shadow for focus
              },
            }}
          >
            <MenuItem value="" disabled>Select an option</MenuItem>
            {question.options.map((option, idx) => (
              <MenuItem key={idx} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    ));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Questionnaire
      </Typography>
      <Box marginBottom={4}>
        {renderQuestions()}
      </Box>
      
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button
          variant="outlined"
          color="primary"
          onClick={prevPage}
          disabled={currentPage === 1}
          sx={{
            padding: "10px 20px",
            borderRadius: "5px",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#1976d2",
              color: "#fff",
            },
          }}
        >
          Previous
        </Button>

        {currentPage === Object.keys(questions).length ? (
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{
              padding: "10px 20px",
              borderRadius: "5px",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#1565c0",
                color: "#fff",
              },
            }}
          >
            Submit
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={nextPage}
            sx={{
              padding: "10px 20px",
              borderRadius: "5px",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#1565c0",
                color: "#fff",
              },
            }}
          >
            Next
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default QuestionnaireForm;

