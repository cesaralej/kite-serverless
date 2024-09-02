import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Snackbar,
  Alert,
} from "@mui/material";

interface PulseCheckProps {
  onSubmit: (data: PulseCheckData) => void;
}

interface PulseCheckData {
  mood: string;
  stress: string;
  energy: string;
}

interface Question {
  label: string;
  options: string[];
}

const PulseCheck: React.FC<PulseCheckProps> = ({ onSubmit }) => {
  const [mood, setMood] = useState<string>("");
  const [stress, setStress] = useState<string>("");
  const [energy, setEnergy] = useState<string>("");
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);

  const questions: Question[] = [
    {
      label: "How is your mood today?",
      options: ["Happy", "Neutral", "Sad"],
    },
    {
      label: "How stressed do you feel?",
      options: ["Low", "Moderate", "High"],
    },
    {
      label: "How is your energy level?",
      options: ["High", "Normal", "Low"],
    },
  ];

  const handleSubmit = () => {
    if (mood && stress && energy) {
      const data: PulseCheckData = { mood, stress, energy };
      onSubmit(data);
      setShowSnackbar(true);
      setMood("");
      setStress("");
      setEnergy("");
    }
  };

  const QuestionComponent = ({
    question,
    value,
    onChange,
  }: {
    question: Question;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }) => {
    return (
      <FormControl component="fieldset" sx={{ marginBottom: 2 }}>
        <FormLabel component="legend">{question.label}</FormLabel>
        <RadioGroup value={value} onChange={onChange}>
          {question.options.map((option) => (
            <FormControlLabel
              key={option}
              value={option}
              control={<Radio />}
              label={option}
              sx={{ mb: 1 }}
            />
          ))}
        </RadioGroup>
      </FormControl>
    );
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "auto",
        padding: 4,
        boxShadow: 3,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        marginBottom: 4,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Daily Pulse Check
      </Typography>
      {questions.map((question, index) => (
        <QuestionComponent
          key={index}
          question={question}
          value={index === 0 ? mood : index === 1 ? stress : energy}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (index === 0) {
              setMood(e.target.value);
            } else if (index === 1) {
              setStress(e.target.value);
            } else {
              setEnergy(e.target.value);
            }
          }}
        />
      ))}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={!mood || !stress || !energy}
      >
        Submit
      </Button>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={() => setShowSnackbar(false)}
      >
        <Alert
          onClose={() => setShowSnackbar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Thank you for your feedback!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default PulseCheck;
