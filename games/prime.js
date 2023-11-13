import {
  questionPack, game,
} from '../src/index.js';

const primeTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const primeQAPair = questionPack(isPrime);

export default () => {
  game(primeTask, primeQAPair);
};
