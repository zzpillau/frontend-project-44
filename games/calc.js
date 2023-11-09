import _ from 'lodash';
import { cons, car, cdr } from '@hexlet/pairs';
import {
  round, maxRandomNum, randomNum, game,
} from '../src/index.js';

const calcTask = 'What is the result of the expression?';

const calculator = (num1, num2, oper) => {
  switch (oper) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const calcVariants = () => {
  const calcQuestion = [];
  const calcCorrectAnswer = [];
  for (let i = 0; i < round; i += 1) {
    const operators = ['+', '-', '*'];
    const operator = operators[randomNum(operators.length)];
    const pair = cons(randomNum(maxRandomNum), randomNum(maxRandomNum));
    const calcQuest = `${car(pair)} ${operator} ${cdr(pair)}`;
    calcQuestion.push(calcQuest);
    const calcResult = calculator(car(pair), cdr(pair), operator);
    calcCorrectAnswer.push(calcResult.toString());
  }
  return _.zip(calcQuestion, calcCorrectAnswer);
};

const calcQAPair = calcVariants();

export default () => {
  game(calcTask, calcQAPair);
};
