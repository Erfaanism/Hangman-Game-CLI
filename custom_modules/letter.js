const colors = require('colors');
const theme = require('./theme.json');

var bolRevealed = false;

function Letter(character, letter) {
    bolRevealed = false;
    this.loaded = false;
    this.revealed = [];
    this.guessed = [];
    this.remaining = 6;
    this.count = 0;
};

Letter.prototype.checker = function(character, letter) {
    console.log('\n\n');
    if (/\d/.exec(letter)) {
        console.log('Please enter a letter, numbers are not allowed!'.error);
        console.log('\n\n');
        return false;
    }
    if (letter.length === 0 && this.loaded) {
        console.log('Please enter a letter, input cannot be empty!'.error);
        console.log('\n\n');
        return false;
    }
    if (letter.length === " " && this.loaded) {
        console.log('Please enter a letter, space is not a character!'.error);
        console.log('\n\n');
        return false;
    }
    if (letter.length > 1 && this.loaded) {
        console.log('Please enter a single letter, multiple letters are not allowed!'.error);
        console.log('\n\n');
        return false;
    }
    console.log('\n\n');
    for (let i = 0; i < character.fname.length - 1; i++) {
        if (letter === character.fname[i]) {
            process.stdout.write(`${letter} `);
            if (!bolRevealed) {
                this.revealed.push(letter);
                bolRevealed = true;
            }
            this.count++;
        } else {
            process.stdout.write("_ ");
        }
    };
    process.stdout.write(" ");
    for (let i = 0; i < character.lname.length - 1; i++) {
        if (letter === character.lname[i]) {
            process.stdout.write(`${letter} `);
            if (!bolRevealed) {
                this.revealed.push(letter);
                bolRevealed = true;
            }
            this.count++;
        } else {
            process.stdout.write("_ ");
        }
    };
    process.stdout.write("\n\n");
    if (!bolRevealed && this.loaded) {
        this.remaining--;
    } else { bolRevealed = false; }
};

module.exports = Letter;