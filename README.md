# Hangman-Game-CLI

### Node and NPM packages used

- [fs: FileSystem](https://nodejs.org/api/fs.html)
- [colors](https://www.npmjs.com/package/colors)
- [inquirer](https://www.npmjs.com/package/inquirer)

### Logic

The basic logic of the game is a Hangman Game for Game of Thrones characters. This is a CLI (Command Line Interface) version of [this](https://erfaanism.github.io/Hangman-Game/) project.

1. The application chooses a random character and creates a placeholder based on number of letters in first and last name (unique untill all have been used)
2. Prompts the user for entry using inquirer
3. Validates the entry (entry has to be a single character. Numbers, space, "" and multiple characters are not allowed)
4. Application compares the entry with each letter within the first and last name and reveals the letter if entered correctly.
5. Player has 6 guesses and if uses all 6, the game will be lost
6. The game has multiple rounds and after winning or losing the player chooses wether they want to go to the next round or exit.
7. The application keeps track of number of the score until the player exits and displayes the score at the end of each round.

### Constructors

The game use two .js modules inside the custom_modules directory, each responsible for handling the word or letters. Each file has a single Constructor Function responsible for the task.

[Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)


### Extras

I have recently started using Visual Studio Code and I find it really useful.

[VS Code](https://code.visualstudio.com/)

Also take advantage of the great extensions available for this tool.

[VS Code Marketplace](https://marketplace.visualstudio.com/)