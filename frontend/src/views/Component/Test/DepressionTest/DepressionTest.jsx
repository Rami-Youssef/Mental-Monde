import React, { useState } from 'react';
import { Box, Text, Button, HStack } from '@chakra-ui/react';
import {
  RadioCardItem,
  RadioCardLabel,
  RadioCardRoot,
} from '../../../../components/ui/radio-card'; 
import './DepressionTest.scss';  

const DepressionTest = () => {
  const [answers, setAnswers] = useState(Array(6).fill(0));
  const [score, setScore] = useState(null);

  const handleChange = (event, index) => {
    const value = event.target.value;  
    const parsedValue = parseInt(value, 10);  
    if (!isNaN(parsedValue)) {
      const newAnswers = [...answers];
      newAnswers[index] = parsedValue; 
      setAnswers(newAnswers);  
    } else {
      console.error('Invalid value:', value);
    }
  };

  const handleSubmit = () => {
    const totalScore = answers.reduce((sum, current) => sum + current, 0); 
    setScore(totalScore); 
  };

  const resultMessage = () => {
    if (score === null) return null;
    if (score <= 12) return "Vous n'avez probablement pas de dépression.";
    if (score <= 18) return "Vous pourriez éprouver une dépression légère.";
    return "Vous pourriez éprouver une dépression modérée à sévère. Envisagez de demander de l'aide.";
  };

  const items = [
    { value: "1", title: "Pas du tout" },
    { value: "2", title: "Quelques jours" },
    { value: "3", title: "Plus de la moitié des jours" },
    { value: "4", title: "Presque tous les jours" },
    { value: "5", title: "Toujours" },
  ];

  return (
    <Box className="depression-test-container">
      <Box className="depression-test-card">
        <Text className="depression-test-header">Test de dépression</Text>

        {["À quelle fréquence vous êtes-vous senti(e) triste ou abattu(e) ?", 
          "À quelle fréquence vous sentez-vous sans espoir ?", 
          "À quelle fréquence vous sentez-vous fatigué(e) ?", 
          "À quelle fréquence vous sentez-vous sans valeur ?", 
          "À quelle fréquence perdez-vous de l'intérêt pour les choses ?", 
          "À quelle fréquence avez-vous des difficultés à vous concentrer ?"]
          .map((question, index) => (
          <Box key={index} mb="4" className="depression-test-question">
            <Text>{question}</Text>

            {/* Radio Card Group */}
            <RadioCardRoot
              size="md"
              onChange={(event) => handleChange(event, index)}
            >
              <RadioCardLabel>{question}</RadioCardLabel>
              <HStack align="stretch" className="radio-group">
                {items.map((item) => (
                  <RadioCardItem
                    key={item.value}
                    label={item.title}
                    value={item.value}
                    isChecked={answers[index] === parseInt(item.value, 10)}
                    className="radio-card"
                  />
                ))}
              </HStack>
            </RadioCardRoot>
          </Box>
        ))}

        <Button className="submit-button" onClick={handleSubmit}>Soumettre</Button>

        {score !== null && (
          <Box mt="4" className="result-message">
            <Text>{resultMessage()}</Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default DepressionTest;
