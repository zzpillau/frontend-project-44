import { cons, car, cdr } from '@hexlet/pairs';
import { maxRandomNum, runGame } from '../index.js';
import getRandomNum from '../utils.js';

const getGCD = (a, b) => {
  let i = a;
  let j = b;
  while (i > 0 && j > 0) {
    if (i >= j) {
      i %= j;
    } else {
      j %= i;
    }
  }
  return Math.max(i, j);
};

const runGcdRound = () => {
  const pairOfNumbers = cons(getRandomNum(maxRandomNum), getRandomNum(maxRandomNum));
  const gcdQuestion = `${car(pairOfNumbers)} ${cdr(pairOfNumbers)}`;
  const gcdAnswer = getGCD(car(pairOfNumbers), cdr(pairOfNumbers));
  return [gcdQuestion, gcdAnswer.toString()];
};

const gcdTask = 'Find the greatest common divisor of given numbers.';

export default () => {
  runGame(gcdTask, runGcdRound);
};
