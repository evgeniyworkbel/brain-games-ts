import readlineSync from 'readline-sync';
import runGame from './engine.js';
import type { GetTask } from './typings.js';

function gamebase(description: string, getTask: GetTask): void {
    console.log('Welcome to the Brain Games!');
    const username = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${username}!`);
    console.log(description);

    const status = runGame(username, getTask);

    if (status === 'succeed') {
        console.log(`Congratulations, ${username}!`);
    }

    if (status === 'failed') {
        return undefined;
    } 
}

export default gamebase;