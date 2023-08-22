import gamebase from '../index.js';
import getRandomInteger from '../randomNumGen.js';
import descriptions from '../descriptions.js';
import { MAX_NUMBER_FOR_RANDOM_GEN, MIN_PRIME_NUMBER } from '../constants.js';
import type { Task } from '../typings.js';

const isPrime = (num: number): boolean => {
    if (num < MIN_PRIME_NUMBER) {
        return false;
    }

    let i = MIN_PRIME_NUMBER;
    while (i <= num / 2) {
        if (num % i === 0) {
            return false;
        }

        i += 1;
    }

    return true;
};

function getTask(): Task {
    const number = getRandomInteger(MAX_NUMBER_FOR_RANDOM_GEN);
    const question = `${number}`;
    const expectedResult = isPrime(number) ? 'yes' : 'no';

    return { question, expectedResult };
}

function primeGame(): void {
    gamebase(descriptions.prime, getTask);
}

export { primeGame };
