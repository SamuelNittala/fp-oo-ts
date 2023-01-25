/*Object (Stack)
  Methods (push, pop, isEmpty, length)
*/
interface StackObj<T> {
  push(val: T): StackObj<T>;
  pop(): StackObj<T> | null;
  isEmpty(): boolean;
  length(): number;
  display(): string;
}

export class Empty<T> implements StackObj<T> {
  push(val: T): StackObj<T> {
    return new Push(val, this);
  }
  pop(): null {
    return null;
  }
  isEmpty() {
    return true;
  }
  length() {
    return 0;
  }
  display() {
    return '';
  }
}

export class Push<T> implements StackObj<T> {
  val: T;
  stack: StackObj<T>;
  constructor(val: T, stack: StackObj<T>) {
    this.stack = stack;
    this.val = val;
    return this;
  }
  push(val: T): StackObj<T> {
    return new Push(val, this);
  }
  pop(): StackObj<T> | null {
    return this.stack;
  }
  isEmpty() {
    return false;
  }
  length() {
    return 1 + this.stack.length();
  }
  display() {
    return this.val + ',' + this.stack.display();
  }
}

export const arrayToStack = <T>(arr: Array<T>) => {
  return arr.reduce((acc, curr) => {
    return acc.push(curr);
  }, new Empty<T>());
};

export const formatDisplay = (s: string) => {
  return s.split(',').reduce((acc, curr) => {
    if (curr) return acc + `|${curr}|\n___\n`;
    return acc;
  }, '');
};
