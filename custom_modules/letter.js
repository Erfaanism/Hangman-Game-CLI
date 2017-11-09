function Letter(character, letter) {
    this.bol = false;
    this.arrUsed = [];
    this.intRemaining = 6;
    this.intCount = 0;
};

Letter.prototype.checker = (character, letter) => {
    console.log('\n\n');
    character.bolFound = false;
    if (/\d/.exec(letter) && character.bolLoaded) {
        console.log('Please enter a letter, numbers are not allowed!'.error);
        console.log('\n\n');
        return false;
    }
    if (letter.length === 0 && character.bolLoaded) {
        console.log('Please enter a letter, input cannot be empty!'.error);
        console.log('\n\n');
        return false;
    }
    if (letter.length === ' ' && character.bolLoaded) {
        console.log('Please enter a letter, space is not a character!'.error);
        console.log('\n\n');
        return false;
    }
    if (letter.length > 1 && character.bolLoaded) {
        console.log('Please enter a single letter, multiple letters are not allowed!'.error);
        console.log('\n\n');
        return false;
    }
    if (character.arrUsed.indexOf(letter) !== -1 && character.bolLoaded) {
        console.log(`Please enter a new letter, ${letter.prompt} has been already entered!`.error);
        console.log('\n\n');
        return false;
    }
    for (let i = 0; i < character.arrFName.length; i++) {
        if (letter === character.fname[i]) {
            character.arrFName[i] = `${letter} `;
            character.intCorrect++;
            character.bolFound = true;
        }
        process.stdout.write(character.arrFName[i]);
    };
    process.stdout.write('  ');
    for (let j = 0; j < character.lname.length; j++) {
        if (letter === character.lname[j]) {
            character.arrLName[j] = `${letter} `;
            character.intCorrect++;
            character.bolFound = true;
        };
        process.stdout.write(character.arrLName[j]);
    };
    if (character.intCorrect === character.fname.length + character.lname.length) {
        console.log('\n\n');
        console.log('Congratulaitons, you got it!'.winner)
        return [true, 'won'];
    } else if (character.arrUsed.indexOf(letter) === -1 && character.bolFound === false && character.bolLoaded) {
        character.intRemaining--;
        if (character.intRemaining === 0) {
            console.log('\n\n');
            console.log('Sorry, you ran out of guesses!'.loser);
            console.log(`The character was: ${character.fname.error} ${character.lname.error}`.loser);
            return [true, 'lost'];
        }
    }
    console.log('\n\n');
    console.log(`Remaining Guesses: ${character.intRemaining}`.remaining);
    process.stdout.write('\n\n');
    if (character.bolLoaded) {
        character.arrUsed.push(letter);
    }
    return false;
};


module.exports = Letter;