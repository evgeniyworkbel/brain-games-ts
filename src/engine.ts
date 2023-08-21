import readlineSync from 'readline-sync';
import type { GetTask } from './typings.js';

function runGame(username: string, getTask: GetTask): string {
    let currentRound: number = 1;
    const roundsCount: number = 3;

    while(currentRound <= roundsCount) {
        const [question, computedValue] = getTask();

        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer === computedValue) {
            console.log('Correct!');
        } else {
            console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${computedValue}"`);
            console.log(`Let's try again, ${username}!`);

            // Exit game immediately
            return 'failed';
        }

        currentRound += 1;
    }

    return 'succeed';
}

export default runGame;
