import readlineSync from 'readline-sync';

function app(): void {
    console.log('Welcome to the Brain Games!');

    const username: string = readlineSync.question('May I have your name?');

    console.log(`Hello, ${username}!`);
}

export { app };
