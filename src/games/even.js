import { maxRandomNum, runGame } from '../index.js';
import getRandomNum from '../utils.js';

const isEven = (num) => num % 2 === 0;

const runEvenRound = () => {
  const evenQuestion = getRandomNum(maxRandomNum);
  const evenAnswer = isEven(evenQuestion) ? 'yes' : 'no';
  return [evenQuestion, evenAnswer];
};

const evenTask = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  runGame(evenTask, runEvenRound);
};
