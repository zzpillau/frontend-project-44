import { cons, car, cdr } from '@hexlet/pairs';
import { maxRandomNum, runGame } from '../index.js';
import getRandomNum from '../utils.js';

const calculate = (num1, num2, operator) => {
  switch (operator) {
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

const runCalcRound = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNum(operators.length)];
  const pairOfNumbers = cons(getRandomNum(maxRandomNum), getRandomNum(maxRandomNum));
  const calcQuestion = `${car(pairOfNumbers)} ${operator} ${cdr(pairOfNumbers)}`;
  const calcAnswer = calculate(car(pairOfNumbers), cdr(pairOfNumbers), operator);
  return [calcQuestion, calcAnswer.toString()];
};

const calcTask = 'What is the result of the expression?';

export default () => {
  runGame(calcTask, runCalcRound);
};
