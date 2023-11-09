import _ from 'lodash';
import {
  cons, car, cdr,
} from '@hexlet/pairs';
import {
  round, maxRandomNum, randomNum, game,
} from '../src/index.js';

const primeTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  game(primeTask, primeQAPair);
};
