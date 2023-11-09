import _ from 'lodash';
import readlineSync from 'readline-sync';
import {
  cons, car, cdr,
} from '@hexlet/pairs';
import {
  round, maxRandomNum, randomNum, game,
} from '../src/index.js';

const progressionTask = 'What number is missing in the progression?';

let item;

const progress = () => {
  const progLength = 10;
  const arr = [];
  let start = randomNum(7);
  const add = randomNum(7);
  arr.push(start);
  for (let i = 0; i < progLength - 1; i += 1) {
    const sum = start + add;
    arr.push(sum);
    start = sum;
  }
  const myProg = arr;
  const index = randomNum(myProg.length);
  item = myProg[index];
  myProg[index] = '..';
  return myProg.join(' ');
};


const progressionVariants = () => {
  const progressionQuestion = [];
  const progressionCorrectAnswer = [];
  for (let i = 0; i < round; i += 1) {
    progressionQuestion.push(progress());
    progressionCorrectAnswer.push(item.toString());
  }
  return _.zip(progressionQuestion, progressionCorrectAnswer);
};

const progressionQAPair = progressionVariants();

export default () => {
  game(progressionTask, progressionQAPair);
};
