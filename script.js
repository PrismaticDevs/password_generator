// DOM Elements
const resultElement = document.getElementById("password");
const lengthElement = document.getElementById("length");
const upperElement = document.getElementById("upper");
const lowerElement = document.getElementById("lower");
const numbersElement = document.getElementById("numbers");
const specialElement = document.getElementById("special");
const generate = document.getElementById("generate");
const clipboard = document.getElementById("clipboard");

// Functions Object
const randomFunc = {
    lower: randomLower,
    upper: randomUpper,
    number: randomNumber,
    special: randomSpecial
}

//  Generate Event Listener
resultElement.innerText = generate.addEventListener('click', () => {
    const length = +lengthElement.value;
    const hasLower = lowerElement.checked
    const hasUpper = upperElement.checked
    const hasNumber = numbersElement.checked
    const hasSpecial = specialElement.checked
    password.innerText = generatePassword(length, hasLower, hasUpper, hasNumber, hasSpecial);
    console.log(length, ' length ', hasUpper, 'upper', hasSpecial, 'special', hasNumber, "number", hasLower, )
});

// Generate password function
function generatePassword(lower, upper, number, special, length) {
    // Init pw var
    let generatedPassword = '';
    // Filter outn unckecked items
    const typesCount = lower + upper + special + number;
    console.log("types: ", typesCount)
        // Loop over length and call generator function for each type
    const typesArr = [{
        lower
    }, {
        upper
    }, {
        number
    }, {
        special
    }].filter(
        item => Object.values(item)[0]
    );
    console.log('typesArr: ', typesArr);
    if (typesCount === 0) {
        return '';
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            console.log('funcName: ', funcName)
            generatePassword += randomFunc[funcName]();
        });

    }
    // Assign pw var to the pw
}

function randomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

function randomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}

function randomSpecial() {
    const symbols = "~!@#$%^&*()_+|?><:,./;'";
    return symbols[Math.floor(Math.random() * symbols.length)];
}