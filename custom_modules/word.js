function Word(characters) {
    this.rndm = Math.floor(Math.random() * characters.length);
    this.fname = characters[this.rndm].fname;
    this.lname = characters[this.rndm].lname;
    this.arrFName = [];
    this.arrLName = [];
    this.arrUsed = [];
    this.bolFound = false;
    this.bolLoaded = false;
    this.intRemaining = 6;
    this.intCorrect = 0;
    this.placeholder = () => {
        for (let i = 0; i < this.fname.length; i++) {
            this.arrFName[i] = '_ ';
        };
        for (let j = 0; j < this.lname.length; j++) {
            this.arrLName[j] = '_ ';
        };
    }
}

module.exports = Word;