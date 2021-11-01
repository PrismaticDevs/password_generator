 // DOM Elements
 const resultEl = document.getElementById('result');
 const lengthEl = document.getElementById('length');
 const uppercaseEl = document.getElementById('uppercase');
 const lowercaseEl = document.getElementById('lowercase');
 const numbersEl = document.getElementById('numbers');
 const symbolsEl = document.getElementById('symbols');
 const generateEl = document.getElementById('generate');
 const clipboardEl = document.getElementById('clipboard');

 // Random Func Object
 const randomFunc = {
     lower: getRandomLower(),
     upper: getRandomUpper(),
     number: getRandomNumber(),
     symbol: getRandomSymbol()
 };

 // Generate Click Event Listener
 generateEl.addEventListener('click', () => {
     const length = +lengthEl.value;
     const hasLower = lowercaseEl.checked;
     const hasUpper = uppercaseEl.checked;
     const hasNumber = numbersEl.checked;
     const hasSymbol = symbolsEl.checked;
     resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
 });

 // Generate Password Function 
 function generatePassword(lower, upper, number, symbol, length) {
     // 1. Init pw var
     let generatedPassword = '';
     // 2. Filter out unchecked types
     const typesCount = lower + upper + number + symbol;
     //  console.log('typesCount: ', typesCount);
     const typesArr = [{
         lower
     }, {
         upper
     }, {
         number
     }, {
         symbol
     }].filter(item => Object.values(item)[0]);
     //  console.log('typesArr: ', typesArr);
     if (typesCount === 0) {
         return '';
     }
     //  console.log(length);
     // 3. Loop over length calling generator function for each type
     for (let i = 0; i < length; i += typesCount) {
         typesArr.forEach(type => {
             const funcName = Object.keys(type)[0];
             //  console.log('funcName: ', funcName)
             generatedPassword += randomFunc[funcName]

         });
     }
     // 4. Add pw to pw var and return   
     const finalPassword = generatedPassword.slice(0, length);
     return finalPassword;
 }

 // Random Lowercase
 function getRandomLower() {
     return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
 }
 // Random Uppercase
 function getRandomUpper() {
     return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
 }
 // Random Number
 function getRandomNumber() {
     return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
 }
 // Random Symbol
 function getRandomSymbol() {
     const symbols = "~!@#$%^&*()_+`-=<>?/.,';:[]{}";
     return symbols[Math.floor(Math.random() * symbols.length)]
 }

 // Copy Function
 document.addEventListener('DOMContentLoaded', function() {
     let copyButton = document.getElementById('clipboard');
     copyButton.addEventListener('click', function() {
         navigator.clipboard
             .writeText(document.getElementById('result').innerText)
             .then(
                 success => console.log("text copied"), err => console.log("error copying text")
             );
         console.log(document.getElementById('result').innerText);
         alert('Password copied');
     });
 });