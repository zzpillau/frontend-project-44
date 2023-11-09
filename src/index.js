import _ from 'lodash';
import readlineSync from 'readline-sync';
import {
  cons, car, cdr,
} from '@hexlet/pairs';

export const round = 3;
export const maxRandomNum = 35;
export const randomNum = (maxNum) => Math.floor(Math.random() * maxNum);

let yourName;

export const greeting = (task) => {
  console.log('Welcome to the Brain Games!');
  yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!`);
  console.log(task);
};

// const zipQA = (qwest, answ) => {
//  const Question = [];
//  const CorrectAnswer = [];
//  for (let i = 0; i < round; i += 1) {
//    Question.push(qwest);
//    CorrectAnswer.push(answ);
//  }
//  return _.zip(Question, CorrectAnswer);
// };

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
