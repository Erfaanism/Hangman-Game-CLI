function Word(characters) {
    let rndm = Math.floor(Math.random() * characters.length);
    this.fname = characters[rndm].fname;
    this.lname = characters[rndm].lname;
}

module.exports = Word;