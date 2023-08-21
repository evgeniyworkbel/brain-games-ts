import gamebase from '../index.js';
import getRandomInteger from '../randomNumGen.js';
import descriptions from '../descriptions.js';
import { MAX_NUMBER_FOR_RANDOM_GEN } from '../constants.js';

const isEven = (num: number): boolean => num % 2 === 0;

function getTask(): string[] {
    const number = getRandomInteger(MAX_NUMBER_FOR_RANDOM_GEN);
    const question = `${number}`;
    const result = isEven(number) ? 'yes' : 'no';

    return [question, result];
}

function evenGame(): void {
    gamebase(descriptions.even, getTask);
}

export default evenGame;