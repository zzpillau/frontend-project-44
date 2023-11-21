import readlineSync from 'readline-sync';

export const rounds = 3;
export const maxRandomNum = 21;

export const runGame = (gameTask, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n${gameTask}`);
  let effort = 1;

  while (effort <= rounds) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = answer;
    const wrongAnswer = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
    const compare = correctAnswer === userAnswer;

    if (!compare) {
      console.log(`${wrongAnswer}\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    effort += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};
