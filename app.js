const fs = require('fs');
const inquirer = require('inquirer');
const colors = require('colors');
const theme = require('./custom_modules/theme.json');
const header = require('./custom_modules/header.json');
const strHeader = header.welcome;
const names = require('./custom_modules/names.json');
const Word = require('./custom_modules/word');
const Letter = require('./custom_modules/letter');

var arrNames = names.slice(0);
var input = "";

colors.setTheme(theme);

for (var i = 0; i < 318; i++) {
    if (strHeader[i] === "+" || strHeader[i] === "|" || strHeader[i] === "-") {
        process.stdout.write(strHeader[i].bannerBox);
    } else {
        process.stdout.write(strHeader[i].bannerText);
    }
};

process.stdout.write('Instruction: You need to guess the name of a character from Game of Thrones\nGood Luck!\n');

var word = new Word(arrNames);
var letter = new Letter(word, input);

// console.log(word.fname, word.lname);

// letter.checker(word, input);

function play() {
    let bolReady = false;
    letter.checker(word, input);
    letter.loaded = true;
    inquirer.prompt({
        type: 'input',
        name: 'letter',
        message: "Guess a letter!".prompt,
        validate: function(val) { return letter.checker(word, val) }
    });
};

play();