export type Descriptions = {
    even: string;
};

export type Task = {
    question: string,
    expectedResult: string,
};

export type GetTask = () => Task;
