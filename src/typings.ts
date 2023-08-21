export type Descriptions = {
    even: string;
};

export type Task = {
    question: string,
    expectedResult: string,
};

export type GetTask = () => Task;

/* For brain-calc */
export type Sign = '+' | '-' | '*' | '%';
export type SignMapFn = (a: number, b: number) => number;
export type SignMap = Record<Sign, SignMapFn>;

export type CalculateFn = (num1: number, num2: number, sign: keyof SignMap) => number;
