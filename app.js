const fs = require('fs');
const inquirer = require('inquirer');
const colors = require('colors');
const theme = require('./custom_modules/theme.json');
const header = require('./custom_modules/header.json');
const strHeader = header.welcome;
const names = require('./custom_modules/names.json');
const Word = require('./custom_modules/word');
const Letter = require('./custom_modules/letter');

let arrNames = names.slice(0);
let intWon = 0;
let intLost = 0;

colors.setTheme(theme);

for (let i = 0; i < 318; i++) {
    if (strHeader[i] === "+" || strHeader[i] === "|" || strHeader[i] === "-") {
        process.stdout.write(strHeader[i].bannerBox);
    } else {
        process.stdout.write(strHeader[i].bannerText);
    }
};

process.stdout.write('Instruction: Your goal is to guess the name of a random character from Game of Thrones\n' + 'Good Luck!\n'.bannerText);

let play = () => {
    let input = "";
    let word = new Word(arrNames);
    word.placeholder();
    let letter = new Letter(word, input);
    letter.checker(word, input);
    word.bolLoaded = true;
    inquirer.prompt({
        type: 'input',
        name: 'guess',
        message: "Guess a letter!".prompt,
        validate: (val) => {
            input = val.toUpperCase();
            letter = new Letter;
            let result = letter.checker(word, input);
            if (result[0] === true) {
                if (result[1] === 'won') {
                    intWon++;
                } else {
                    intLost++;
                }
                console.log(`\nRounds won: ${intWon} Rounds lost: ${intLost}\n`);
                return result[0];
            } else {
                console.log(result)
                return result;
            }
        }
    }).then(tryAgain => {
        inquirer.prompt({
            type: 'list',
            name: 'tryAgain',
            message: 'Give it another try?'.prompt,
            choices: ['Next round', 'Exit']
        }).then(answer => {
            if (answer.tryAgain === 'Next round') {
                if (arrNames.length < 0) {
                    arrNames = names.slice(0);
                } else {
                    arrNames.splice(word.rndm, 1);
                }
                play();
            } else {
                return false;
            }
        })
    })
};

play();