const inquirer = require('inquirer');

const { genhtml } = require('./generateHTML');

function getUserInput() {
    return inquirer.prompt([
        {            
            type: 'input',
            message: 'Please enter your Github username!',
            name: 'username',
        },
        {            
            type: 'list',
            message: 'Please choose your favorite color',
            name: 'color',
            choices: [
                {
                    name: 'Green',
                    value: 'green'
                },
                {
                    name: 'Gray',
                    value: 'gray'
                },
            ]
        }
    ])
}

async function main() {
    const { username, color } = await getUserInput();
    genhtml(username, color);
}

main();