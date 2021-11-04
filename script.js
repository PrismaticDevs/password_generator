// Password Generator
// I like otters, I like platypuses, and I like hedgehogs
// HTML Elements
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
// Randomized Components
let lowercase = getRandomLower();
let uppercase = getRandomUpper();
let number = getRandomNumber();
let symbol = getRandomSymbol();
// Randomization Function
function randomize() {
    // Prompts for Password Desired Components
    let desiredLength = prompt(`Choose the Password's Length`);
    let desiredUpper = confirm(`Uppercase Letters?`);
    let desiredNumber = confirm(`Numbers?`);
    let desiredSymbol = confirm(`Symbols?`);
    let finalPassword = [];
    // Length
    parseInt(desiredLength)
    if (desiredLength < 8 || desiredLength > 128) {
        desiredLength = prompt('Please choose a length of 8 or more.');
        if (desiredLength < 8) {
            desiredLength = prompt('Password must be a length of 8 or more.');
            if (desiredLength < 8) {
                alert('Apassword is too short and is not secure. Try again.');
                return;
            }
        }
        if (desiredLength > 128) {
            desiredLength = prompt('Password must be between 8 and 128 characters');
            if (desiredLength < 128) {
                alert('Apassword is too long. Try again.');
                return;
            }
        }
    }
    // Iterates Over Desired Length
    for (let i = 0; i <= desiredLength; i++) {
        finalPassword.push(lowercase[i]);
        // If Check Numbers
        if (desiredNumber) {
            const finalNumber = getRandomNumber()
            finalPassword.push(finalNumber);
        }
        // If Check Uppercase 
        if (desiredUpper) {
            const finalUpper = getRandomUpper()
            finalPassword.push(finalUpper);
        }
        // If Check Symbols
        if (desiredSymbol) {
            const finalSymbol = getRandomSymbol()
            finalPassword.push(finalSymbol);
        }
    }
    // Randomize Order of Array
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
    // Insert finished password into HTML 
    result.innerText = finalPassword.join('');
    return finalPassword;
}
// Copies Password to Clipboard
function copy() {
    navigator.clipboard.writeText(result.innerText)
        .then(function() {
            alert('Password Successfully Copied')
        }, function() {
            alert('Server unable to copy password');
        });
}