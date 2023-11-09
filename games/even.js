import _ from 'lodash';
import {
  round, maxRandomNum, randomNum, game,
} from '../src/index.js';

const evenTask = 'Answer "yes" if the number is even, otherwise answer "no".';

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

const evenQAPair = evenVariants();

export default () => {
  game(evenTask, evenQAPair);
};
