import runGame from '../index.js';
import getRandomNum from '../utils.js';

const isEven = (num) => num % 2 === 0;

const runEvenRound = () => {
  const question = getRandomNum();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  runGame(task, runEvenRound);
};
