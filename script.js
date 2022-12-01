const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    let copyText = resultEl.innerText;
    navigator.clipboard.writeText(copyText);
    
})

generateEl.addEventListener('click', () => {
   return resultEl.innerText = generatePassword(randomFunc.lower, randomFunc.upper, randomFunc.number, randomFunc.symbol, lengthEl.value);
})

function generatePassword(lower, upper, number, symbol, length) {

   let result = "";

    let idealArray = [ lower(), upper(), number(), symbol(),
                       lower(), upper(), number(), symbol(),
                       lower(), upper()]

    let passwordArray = [];

    

    for (let j=0; j<10; j++){
        
        if (idealArray[j] != ""){
           
            passwordArray.push(idealArray[j]);
        }
    }

    for (let i=0; i<length; i++){
       result = result + passwordArray[Math.floor(Math.random()*(passwordArray.length-1))]
    }

    return result;



    
}

function getRandomLower() {

    
    if (lowercaseEl.checked){
        let lowerText = ""
        let passwordText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        lowerText = passwordText[Math.floor(Math.random() * 26)].toLowerCase();
        return lowerText;
    }
    else
    {
        return "";
    }

}

function getRandomUpper() {

    if (uppercaseEl.checked){
        let upperText = ""
        let passwordText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        upperText = passwordText[Math.floor(Math.random() * 26)];
        return upperText;
    }
    else
    {
        return "";
    }

}

function getRandomNumber() {
     
    if (numbersEl.checked){
        
        let numberText = ""
        let passwordText = "0123456789"; //10
        numberText = passwordText[Math.floor(Math.random() * 10)];
        return numberText;
    }
    else
    {
        return "";
    }
}

function getRandomSymbol() {
    if (symbolsEl.checked){
        let symbolText = "" 
        let passwordText = "!@#$%&*:?_-+=/\\"; //15
        symbolText = passwordText[Math.floor(Math.random() * 15)];
        return symbolText;
    }
    else
    {
        return "";
    }
}