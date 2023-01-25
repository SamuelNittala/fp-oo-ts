/* Abstract Data Type (Stack)
    - Methods: push, pop, isEmpty, len
*/
interface Branded<T> {
  _type: T;
}
type Brand<K, T> = K & Branded<T>;

type Stack = Brand<Array<number>, 'stack'>;

export function create(...values: Array<number>): Stack {
  return [...values] as Stack;
}

export function len(s: Stack): number {
  return s.length;
}

export function isEmpty(s: Stack): boolean {
  return len(s) === 0;
}

export const push =
  (val: number) =>
  (s: Stack): Stack => {
    return [...s, val] as Stack;
  };

export function pop(s: Stack): { s: Stack; val: number } {
  return { s: s.slice(0, -1) as Stack, val: s[len(s) - 1] };
}

export const pushAfterPop = (val: number) => (k: ReturnType<typeof pop>) =>
  push(val)(k.s);

export const log =
  (msg: string) =>
  <T>(k: T) => {
    console.log(msg, k);
    return k;
  };
