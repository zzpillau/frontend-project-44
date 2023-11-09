import _ from 'lodash';
import {
  cons, car, cdr,
} from '@hexlet/pairs';
import {
  round, maxRandomNum, randomNum, game,
} from '../src/index.js';

const gcdTask = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
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

const gcdVariants = () => {
  const gcdQuestion = [];
  const gcdCorrectAnswer = [];
  for (let i = 0; i < round; i += 1) {
    const pair = cons(randomNum(maxRandomNum), randomNum(maxRandomNum));
    const gcdAnsw = gcd(car(pair), cdr(pair));
    const gcdQuest = `${car(pair)} ${cdr(pair)}`;
    gcdQuestion.push(gcdQuest);
    gcdCorrectAnswer.push(gcdAnsw.toString());
  }
  return _.zip(gcdQuestion, gcdCorrectAnswer);
};

const gcdQAPair = gcdVariants();

export default () => {
  game(gcdTask, gcdQAPair);
};
