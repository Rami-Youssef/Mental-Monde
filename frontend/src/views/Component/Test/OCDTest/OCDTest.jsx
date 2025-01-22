import React, { useState } from 'react';
import { Box, Text, Button, HStack } from '@chakra-ui/react';
import {
  RadioCardItem,
  RadioCardLabel,
  RadioCardRoot,
} from '../../../../components/ui/radio-card'; // Make sure this path is correct
import './OCDTest.scss'; // Importing the SCSS file

const OCDTest = () => {
  const [answers, setAnswers] = useState(Array(6).fill(0)); // Store answers for each question
  const [score, setScore] = useState(null);

  // Handle the change of answers for each question
  const handleChange = (event, index) => {
    const value = event.target.value; // Extract the value from the event object
    const parsedValue = parseInt(value, 10); // Parse the value into an integer
    if (!isNaN(parsedValue)) {
      const newAnswers = [...answers];
      newAnswers[index] = parsedValue; // Save the answer as an integer
      setAnswers(newAnswers); // Update the state
    } else {
      console.error('Invalid value:', value);
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    const totalScore = answers.reduce((sum, current) => sum + current, 0); // Sum up all answers
    setScore(totalScore); 
  };

  const resultMessage = () => {
    if (score === null) return null;
    if (score <= 12) return "Vous n'avez probablement pas de troubles obsessionnels-compulsifs.";
    if (score <= 18) return "Vous pourriez éprouver des symptômes légers de TOC.";
    return "Vous pourriez éprouver des symptômes modérés à sévères de TOC. Envisagez de demander de l'aide.";
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
        <Text className="depression-test-header">Test de TOC (Troubles Obsessionnels-Compulsifs)</Text>

        {[
          "À quelle fréquence avez-vous des pensées obsessionnelles répétitives ?", 
          "À quelle fréquence sentez-vous le besoin de vérifier ou répéter certaines actions ?", 
          "À quelle fréquence ces pensées ou comportements interfèrent-ils avec votre vie quotidienne ?", 
          "À quelle fréquence ressentez-vous une angoisse intense liée à vos pensées ou actions ?", 
          "À quelle fréquence essayez-vous de supprimer vos pensées obsessionnelles sans succès ?", 
          "À quelle fréquence ressentez-vous une pression pour exécuter des rituels afin de vous apaiser ?"
        ].map((question, index) => (
          <Box key={index} mb="4" className="depression-test-question">
            <Text>{question}</Text>

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

export default OCDTest;
