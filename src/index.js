import readlineSync from 'readline-sync';

export const round = 3;
export const maxRandomNum = 21;
export const randomNum = (maxNum) => Math.floor(Math.random() * maxNum);

let yourName;

export const greeting = (task) => {
  console.log('Welcome to the Brain Games!');
  yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!`);
  console.log(task);
};

// game logic

export const game = (task, question) => {
  greeting(task);
  const pairQA = question;
  for (const [quest, answ] of pairQA) { // линтер ругается на for...of!!!
    console.log(`Question: ${quest}`);
    const correctAnswer = answ;
    const yourAnswer = readlineSync.question('Your answer: ');
    const wrongAnswer = `'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
    const compare = correctAnswer === yourAnswer;
    if (!compare) {
      console.log(`${wrongAnswer}\nLet's try again, ${yourName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${yourName}!`);
};
