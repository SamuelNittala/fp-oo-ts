import * as R from 'ramda';

export const transform = R.compose(
  R.tap((x) => console.log('--------TOP---------')),
  R.tap((x) => console.log('FILTER:', x)),
  R.filter((x) => /r/i.test(x)),
  R.tap((x) => console.log('UPPER:', x)),
  R.map(R.toUpper),
  R.tap((x) => console.log('REVERSE:', x)),
  R.map(R.reverse),
  R.tap(() => console.log('-------BOTTOM-------'))
);

export const transduce = R.transduce(transform, R.flip(R.append), []);
