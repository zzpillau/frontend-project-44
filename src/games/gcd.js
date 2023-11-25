import { cons, car, cdr } from '@hexlet/pairs';
import runGame from '../index.js';
import getRandomNum from '../utils.js';

const getDivisor = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num1 > 0 && num2 > 0) {
    if (num1 >= num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  return Math.max(num1, num2);
};

const runGcdRound = () => {
  const pairOfNumbers = cons(getRandomNum(), getRandomNum());
  const question = `${car(pairOfNumbers)} ${cdr(pairOfNumbers)}`;
  const answer = getDivisor(car(pairOfNumbers), cdr(pairOfNumbers));
  return [question, answer.toString()];
};

const task = 'Find the greatest common divisor of given numbers.';

export default () => {
  runGame(task, runGcdRound);
};
