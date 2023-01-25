import { IsPalindrome } from './types';
import { transduce, transform } from './fp';
import {
  create,
  log,
  pushAfterPop,
  push,
  pop,
  arrayToStack,
  formatDisplay,
} from './oo-adt';

// const st = create(2, 3, 5);
// const pushLog = log('push');
// const popLog = log('pop');

// R.compose(pushLog, pushAfterPop(8), popLog, pop, pushLog, push(6), push(4))(st);

// const isPalindrome = (s: string) => {
//   for (let i = 0; i < s.length / 2; ++i) {
//     if (s[i] !== s[s.length - 1 - i]) return false;
//   }
//   return true;
// };

// const stack = arrayToStack([2, 4]);
// console.log(formatDisplay(stack.pop().pop().display()));

const values = ['apple', 'banana', 'orange', 'grapes'];
console.log(transduce(values));
