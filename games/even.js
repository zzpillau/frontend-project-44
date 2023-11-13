import {
  questionPack, game,
} from '../src/index.js';

const evenTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const evenQAPair = questionPack(isEven);

export default () => {
  game(evenTask, evenQAPair);
};
