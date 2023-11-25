import { cons, car, cdr } from '@hexlet/pairs';
import runGame from '../index.js';
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
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const runCalcRound = () => {
  const operators = ['+', '-', '*'];
  const lastOperator = operators.length - 1;
  const currentOperator = operators[getRandomNum(0, lastOperator)];
  const pairOfNumbers = cons(getRandomNum(), getRandomNum());
  const question = `${car(pairOfNumbers)} ${currentOperator} ${cdr(pairOfNumbers)}`;
  const answer = calculate(car(pairOfNumbers), cdr(pairOfNumbers), currentOperator);
  return [question, answer.toString()];
};

const task = 'What is the result of the expression?';

export default () => {
  runGame(task, runCalcRound);
};
