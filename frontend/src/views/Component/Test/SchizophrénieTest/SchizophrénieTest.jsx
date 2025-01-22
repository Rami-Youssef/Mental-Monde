import React, { useState } from 'react';
import { Box, Text, Button, HStack } from '@chakra-ui/react';
import {
  RadioCardItem,
  RadioCardLabel,
  RadioCardRoot,
} from '../../../../components/ui/radio-card'; // Make sure this path is correct
import './SchizophrénieTest.scss'; // Importing the SCSS file

const SchizophreniaTest = () => {
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
    setScore(totalScore); // Store the total score
  };

  // Determine if the user might have schizophrenia based on the score
  const resultMessage = () => {
    if (score === null) return null;
    if (score <= 12) return "Vous n'avez probablement pas de symptômes de schizophrénie.";
    if (score <= 18) return "Vous pourriez éprouver des symptômes légers liés à la schizophrénie.";
    return "Vous pourriez éprouver des symptômes modérés à sévères liés à la schizophrénie. Envisagez de demander de l'aide.";
  };

  // Items for radio options
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
        <Text className="depression-test-header">Test de Schizophrénie</Text>

        {[
          "À quelle fréquence entendez-vous des voix ou percevez des choses qui ne sont pas là ?", 
          "À quelle fréquence avez-vous des pensées ou croyances qui semblent étranges ou illogiques ?", 
          "À quelle fréquence avez-vous des difficultés à distinguer la réalité de votre imagination ?", 
          "À quelle fréquence avez-vous des difficultés à maintenir une conversation ou organiser vos pensées ?", 
          "À quelle fréquence ressentez-vous un détachement émotionnel ou un manque de motivation ?", 
          "À quelle fréquence ressentez-vous que les gens complotent ou essaient de vous nuire ?"
        ].map((question, index) => (
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

export default SchizophreniaTest;
