import gamebase from '../index.js';
import getRandomInteger from '../randomNumGen.js';
import descriptions from '../descriptions.js';
import { MAX_NUMBER_FOR_RANDOM_GEN } from '../constants.js';
import type { Task } from '../typings.js';

const calculateGcd = (num1: number, num2: number): number => {
    const remainder = num1 % num2;

    if (remainder === 0) {
        return num2;
    }

    return calculateGcd(num2, remainder);
  };

function getTask(): Task {
    const number1 = getRandomInteger(MAX_NUMBER_FOR_RANDOM_GEN);
    const number2 = getRandomInteger(MAX_NUMBER_FOR_RANDOM_GEN);

    const question = `${number1} ${number2}`;
    const expectedResult = calculateGcd(number1, number2).toString();

    return { question, expectedResult };
}

function gcdGame(): void {
    gamebase(descriptions.gcd, getTask);
}

export { gcdGame };
