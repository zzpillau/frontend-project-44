import _ from 'lodash';
import readlineSync from 'readline-sync';
import {
  cons, car, cdr,
} from '@hexlet/pairs';

// tasks

export const evenTask = 'Answer "yes" if the number is even, otherwise answer "no".';
export const calcTask = 'What is the result of the expression?';
export const gcdTask = 'Find the greatest common divisor of given numbers.';

// common

const round = 3;
const maxRandomNum = 35;
const randomNum = (maxNum) => Math.floor(Math.random() * maxNum);

let yourName;

export const greeting = (task) => {
  console.log('Welcome to the Brain Games!');
  yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!`);
  console.log(task);
};

// even

const isEven = (num) => num % 2 === 0;

const evenVariants = () => {
  const evenQuestion = [];
  const evenCorrectAnswer = [];
  for (let i = 0; i < round; i += 1) {
    evenQuestion.push(randomNum(maxRandomNum));
    evenCorrectAnswer.push(isEven(evenQuestion[i]) ? 'yes' : 'no');
  }
  return _.zip(evenQuestion, evenCorrectAnswer);
};

export const evenQAPair = evenVariants();

// calc

const calcVariants = () => {
  const calcQuestion = [];
  const calcCorrectAnswer = [];
  for (let i = 0; i < round; i += 1) {
    const operators = ['+', '-', '*'];
    const operator = operators[randomNum(operators.length)];
    const pair = cons(randomNum(maxRandomNum), randomNum(maxRandomNum));
    const calcQuest = `${car(pair)} ${operator} ${cdr(pair)}`; // это вопрос calc 1 раунд, его запушить
    calcQuestion.push(calcQuest);
    calcCorrectAnswer.push(eval(calcQuestion[i]).toString());
  }
  return _.zip(calcQuestion, calcCorrectAnswer);
};

export const calcQAPair = calcVariants();

// gcd

const gcd = (a, b) => {
  let i = a;
  let j = b;
  while (i > 0 && j > 0) {
    if (i >= j) {
      i = i % j;
    } else {
      j = j % i;
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

export const gcdQAPair = gcdVariants();

// game logic

export const game = (task, question) => {
  greeting(task);
  const qaPair = question;
  /* eslint-disable-next-line */
  for (const [q, a] of qaPair) {
    console.log(`Question: ${q}`);
    const correctAnswer = a;
    const yourAnswer = readlineSync.question('Your answer: ');
    const wrongAnswer = `'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
    const compare = correctAnswer === yourAnswer;
    if (!compare) {
      console.log(`${wrongAnswer}\nLet's try again, ${yourName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${yourName}`);
};