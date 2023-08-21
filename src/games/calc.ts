import gamebase from '../index.js';
import getRandomInteger from '../randomNumGen.js';
import descriptions from '../descriptions.js';
import { MAX_NUMBER_FOR_RANDOM_GEN } from '../constants.js';
import type { Task, Sign, SignMap, CalculateFn } from '../typings.js';

const signs: Sign[] = ['+', '-', '*', '%'];

const calculate: CalculateFn = (num1, num2, sign) => {
    const map: SignMap = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '%': (a, b) => a % b,
    };

    return map[sign](num1, num2);
};

function getTask(): Task {
    const number1 = getRandomInteger(MAX_NUMBER_FOR_RANDOM_GEN);
    const number2 = getRandomInteger(MAX_NUMBER_FOR_RANDOM_GEN);
    const sign = signs[getRandomInteger(signs.length - 1)];

    const question = `${number1} ${sign} ${number2}`;
    const expectedResult = calculate(number1, number2, sign).toString();

    return { question, expectedResult };
}

function calcGame(): void {
    gamebase(descriptions.calc, getTask);
}

export { calcGame };
