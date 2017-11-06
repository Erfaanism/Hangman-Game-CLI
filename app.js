const fs = require('fs');
const colors = require('colors');
const inquirer = require('inquirer');
const names = './custom_modules/names.json';
const header = './custom_modules/header.json';
const jsonHeader = JSON.parse(fs.readFileSync(header));
const strHeader = jsonHeader.welcome;

for (var i = 0; i < 4497; i++) {
    try {
        process.stdout.write(strHeader[i]);
    } catch (e) {}
}