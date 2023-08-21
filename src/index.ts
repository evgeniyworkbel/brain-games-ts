import readlineSync from 'readline-sync';
import runGame from './engine.js';
import { GetTask } from './typings.js';

function gamebase(description: string, getTask: GetTask): void {
    console.log('Welcome to the Brain Games!');
    const username = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${username}!`);
    console.log(description);

    const result = runGame(username, getTask);

    if (result === 'succeed') {
        console.log(`Congratulations, ${username}!`);
    }

    if (result === 'failed') {
        return undefined;
    } 
}

export default gamebase;