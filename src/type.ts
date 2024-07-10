export type Test = {
  id: number;
  name: string;
};

export type Question = {
  id: number;
  testId: number;
  text: string;
  a: string;
  b: string;
  c: string;
  d: string;

  trueAnswer: "a" | "b" | "c" | "d";
};
