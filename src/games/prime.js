import { maxRandomNum, runGame } from '../index.js';
import getRandomNum from '../utils.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const runPrimeRound = () => {
  const primeQuestion = getRandomNum(maxRandomNum);
  const primeAnswer = isPrime(primeQuestion) ? 'yes' : 'no';
  return [primeQuestion, primeAnswer];
};

const primeTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  runGame(primeTask, runPrimeRound);
};
