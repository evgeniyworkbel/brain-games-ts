import gamebase from '../index.js';
import getRandomInteger from '../randomNumGen.js';
import descriptions from '../descriptions.js';
import { MAX_NUMBER_FOR_RANDOM_GEN } from '../constants.js';
import type { Task } from '../typings.js';

const isEven = (num: number): boolean => num % 2 === 0;

function getTask(): Task {
    const number = getRandomInteger(MAX_NUMBER_FOR_RANDOM_GEN);
    const question = `${number}`;
    const expectedResult = isEven(number) ? 'yes' : 'no';

    return { question, expectedResult };
}

function evenGame(): void {
    gamebase(descriptions.even, getTask);
}

export { evenGame };
