import runGame from '../index.js';
import getRandomNum from '../utils.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let divisor = 2; divisor < num; divisor += 1) {
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
};

const runPrimeRound = () => {
  const question = getRandomNum();
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  runGame(task, runPrimeRound);
};
