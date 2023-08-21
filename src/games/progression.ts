import gamebase from '../index.js';
import getRandomInteger from '../randomNumGen.js';
import descriptions from '../descriptions.js';
import { MAX_NUMBER_FOR_RANDOM_GEN, MAX_NUMBER_COUNT_IN_PROGRESSION, MAX_STEP_IN_PROGRESSION } from '../constants.js';
import type { Task } from '../typings.js';

function chooseStep(): number {
    const step = getRandomInteger(MAX_STEP_IN_PROGRESSION);

    return step !== 0
        ? step
        : chooseStep();
}

function getTask(): Task {
    const sequence: (number | string)[] = [];
    const step = chooseStep();
    const firstNum = getRandomInteger(MAX_NUMBER_FOR_RANDOM_GEN);

    for (let i = 0, newNum = firstNum; i < MAX_NUMBER_COUNT_IN_PROGRESSION; newNum += step, i += 1) {
        sequence.push(newNum);
    }

    const someIndex = getRandomInteger(MAX_NUMBER_COUNT_IN_PROGRESSION);
    const replacedNum = sequence[someIndex];

    sequence[someIndex] = '..';

    const question = sequence.join(' ');
    const expectedResult = replacedNum.toString();

    return { question, expectedResult };
}

function progressionGame(): void {
    gamebase(descriptions.gcd, getTask);
}

export { progressionGame };
