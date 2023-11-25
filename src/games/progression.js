import runGame from '../index.js';
import getRandomNum from '../utils.js';

const buildProgression = () => {
  const result = [];
  let start = getRandomNum(2, 9);
  result.push(start);

  const step = getRandomNum(2, 9);
  const progLength = 10;

  for (let progElement = 2; progElement <= progLength; progElement += 1) {
    const sum = start + step;
    result.push(sum);
    start = sum;
  }
  return result;
};

const runProgressionRound = () => {
  const progression = buildProgression();
  const lastDotsPosition = progression.length - 1;
  const dotsShouldBeHere = getRandomNum(0, lastDotsPosition);
  const answer = progression[dotsShouldBeHere].toString();
  progression[dotsShouldBeHere] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const task = 'What number is missing in the progression?';

export default () => {
  runGame(task, runProgressionRound);
};
