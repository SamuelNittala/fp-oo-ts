type _Symbol = string;
type _Number = number;
type Atom = _Symbol | _Number;
type List = string[];
type Exp = Atom | List;
type Env = object;

type Length<T extends unknown[]> = T['length'];

type AddSpaceAroundParan<
  T extends string,
  R extends string
> = T extends `${infer first}${infer rest}`
  ? first extends '(' | ')'
    ? AddSpaceAroundParan<rest, `${R} ${first} `>
    : AddSpaceAroundParan<rest, `${R}${first}`>
  : R;

type Filter<
  T extends unknown[],
  value extends string,
  R extends unknown[]
> = T extends [infer first, ...infer rest]
  ? first extends value
    ? Filter<rest, value, R>
    : Filter<rest, value, [...R, first]>
  : R;

type Tokenize<
  T extends string,
  R extends string[],
  I extends string,
  flag extends boolean
> = T extends `${infer first}${infer rest}`
  ? first extends ' '
    ? flag extends true
      ? Tokenize<T, [...R, I], '', false>
      : Tokenize<rest, R, I, true>
    : Tokenize<rest, R, `${I}${first}`, flag>
  : Filter<R, '', []>;

type spacedInput = AddSpaceAroundParan<
  '(begin (define r 10) (* pi (* r r)))',
  ''
>;
type tokens = Tokenize<spacedInput, [], '', false>;

const parse = (tokens: string[]) => {
  const token = tokens.splice(0, 1)[0];
  if (token === '(') {
    const res = [];
    while (tokens[0] !== ')') {
      res.push(parse(tokens));
    }
    tokens.splice(0, 1);
    return res;
  }
  return token;
};
