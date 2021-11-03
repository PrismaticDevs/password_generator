// Password Generator
const result = document.getElementById('result');
const copyButton = document.getElementById('clipboard');

// Random Lowercase
function getRandomLower() {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    return lowercase[Math.floor(Math.random() * lowercase.length)];
}
// Random Uppercase
function getRandomUpper() {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return uppercase[Math.floor(Math.random() * uppercase.length)];
}
// Random Number
function getRandomNumber() {
    const numbers = "0123456789";
    return numbers[Math.floor(Math.random() * numbers.length)];
}
// Random Symbol
function getRandomSymbol() {
    const symbols = "~!@#$%^&*()_+`-=<>?/,';:[]{}";
    return symbols[Math.floor(Math.random() * symbols.length)];
}
// Randomization function
function randomize() {
    // Prompts for password components
    let desiredLength = prompt(`Choose the Password's Length`);
    console.log(desiredLength.valueOf());
    let desiredLower = prompt(`How many Lowercase Letters?`);
    let desiredUpper = prompt(`How many Uppercase Letters?`);
    let desiredNumber = prompt(`How many Uppercase Letters?`);
    let desiredSymbol = prompt(`How many Numbers?`);
    let finalPassword = [];
    let lowercase = getRandomLower();
    let uppercase = getRandomUpper();
    let number = getRandomNumber();
    let symbol = getRandomSymbol();
    finalPassword.push(lowercase, uppercase, number, symbol);
    // Randomize the Array
    function shuffleArray(array) {
        let curId = array.length;
        while (0 !== curId) {
            let randId = Math.floor(Math.random() * curId);
            curId -= 1;
            let tmp = array[curId];
            array[curId] = array[randId];
            array[randId] = tmp;
        }
        return array;
    }
    shuffleArray(finalPassword);
    // Put the finished password into the HTML 
    result.innerText = finalPassword.join('');
}
// Copy Function