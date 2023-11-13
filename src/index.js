import readlineSync from 'readline-sync';
import _ from 'lodash';

export const round = 3;
export const maxRandomNum = 21;
export const randomNum = (maxNum) => Math.floor(Math.random() * maxNum);

let yourName;

export const questionPack = (func) => {
  const questions = [];
  const correctAnswers = [];
  for (let i = 0; i < round; i += 1) {
    const random = randomNum(35);
    questions.push(random);
    correctAnswers.push(func(questions[i]) ? 'yes' : 'no');
  }
  return _.zip(questions, correctAnswers);
};

export const greeting = (task) => {
  console.log('Welcome to the Brain Games!');
  yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!`);
  console.log(task);
};

let result;

const oneRound = (roundQuest, roundAnsw) => {
  console.log(`Question: ${roundQuest}`);
  const correctAnswer = roundAnsw;
  const yourAnswer = readlineSync.question('Your answer: ');
  const wrongAnswer = `'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
  const compare = correctAnswer === yourAnswer;
  if (!compare) {
    console.log(`${wrongAnswer}\nLet's try again, ${yourName}!`);
    result = 'fail';
    return;
  }
  console.log('Correct!');
  result = 'win';
};

export const game = (task, question) => {
  greeting(task);
  const pairQA = question;
  let i = 0;
  const j = 0;
  while (i < round) {
    oneRound(pairQA[i][j], pairQA[i][j + 1]);
    if (result === 'fail') {
      break;
    }
    i += 1;
  }
  if (result === 'win') {
    console.log(`Congratulations, ${yourName}!`);
  }
};
