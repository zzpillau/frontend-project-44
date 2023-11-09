import _ from 'lodash';
import {
  round, maxRandomNum, randomNum, game,
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

const primeVariants = () => {
  const primeQuestion = [];
  const primeCorrectAnswer = [];
  for (let i = 0; i < round; i += 1) {
    primeQuestion.push(randomNum(maxRandomNum));
    primeCorrectAnswer.push(isPrime(primeQuestion[i]) ? 'yes' : 'no');
  }
  return _.zip(primeQuestion, primeCorrectAnswer);
};

const primeQAPair = primeVariants();

export default () => {
  game(primeTask, primeQAPair);
};