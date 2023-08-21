import readlineSync from 'readline-sync';
import runGame from './engine.js';
import { GetTask } from './typings.js';

function gamebase(description: string, getTask: GetTask): void {
    console.log('Welcome to the Brain Games!');
    const username: string = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${username}!`);
    console.log(description);

    runGame(username, getTask);

    console.log(`Congratulations, ${username}!`);
}

export default gamebase;