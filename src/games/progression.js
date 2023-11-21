import { runGame } from '../index.js';
import getRandomNum from '../utils.js';

const runProgressionRound = () => {
  const progression = [];
  const progressionLength = 10;
  let start = getRandomNum(7);
  const step = getRandomNum(7);
  progression.push(start);

  for (let i = 0; i < progressionLength - 1; i += 1) {
    const sum = start + step;
    progression.push(sum);
    start = sum;
  }

  const dotsShouldBeHere = getRandomNum(progressionLength);
  const progressionAnswer = progression[dotsShouldBeHere].toString();
  progression[dotsShouldBeHere] = '..';
  const progressionQuestion = progression.join(' ');

  return [progressionQuestion, progressionAnswer];
};

const progressionTask = 'What number is missing in the progression?';

export default () => {
  runGame(progressionTask, runProgressionRound);
};
