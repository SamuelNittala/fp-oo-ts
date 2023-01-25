type FirstCharacter<T extends string> = T extends `${infer first}${infer rest}`
  ? first
  : T;

type LastCharacter<T extends string> = T extends `${infer first}${infer rest}`
  ? rest extends ''
    ? first
    : LastCharacter<rest>
  : T;

type RemoveFirst<T extends string> = T extends `${infer first}${infer rest}`
  ? rest
  : T;

type RemoveLast<
  T extends string,
  K extends string
> = T extends `${infer first}${infer rest}`
  ? rest extends ''
    ? K
    : RemoveLast<rest, `${K}${first}`>
  : T;

export type IsPalindrome<T extends string> =
  T extends `${infer first}${infer rest}`
    ? rest extends ''
      ? true
      : FirstCharacter<T> extends LastCharacter<T>
      ? IsPalindrome<`${RemoveLast<T, `${RemoveFirst<T>}`>}`>
      : false
    : false;
