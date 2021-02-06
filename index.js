import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const question = gameInfo => car(gameInfo);
const answer = gameInfo => cdr(gameInfo);
const questionsToPlayerCount = 3;

const gameMechanics = (description, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = questionsToPlayerCount; i > 0; i -= 1) {
    const gameInfo = game();
    const getQuestion = question(gameInfo);
    const correctAnswer = answer(gameInfo);

    console.log(`Question: ${getQuestion}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === playerAnswer) console.log('Correct!');
    else {
      console.log(`"${playerAnswer}" is wrong answer ;(.`);
      console.log(`Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameMechanics;