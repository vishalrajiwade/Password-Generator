const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')
let finalPass = "";
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    navigator.clipboard.writeText(resultEl.innerText);
    alert("Copied the text: " + resultEl.innerText);
    clearPrevResult();
    displayPassword();
})

generateEl.addEventListener('click', () => {
    clearPrevResult();
    let length = lengthEl.value;
    let uppercase = uppercaseEl.checked;
    let lowercase = lowercaseEl.checked;
    let numbers = numbersEl.checked;
    let symbols = symbolsEl.checked;
    
    generatePassword(lowercase, uppercase, numbers, symbols, length);
})

function generatePassword(lower, upper, number, symbol, length) { 
    let i=0
    while(i<length){                                              
        if (upper ){                                              
            randomFunc.upper();                                 
            i++;                                                   
        }  
            
        if(lower && i<length){                                
            randomFunc.lower();                                     
            i++;                                          
        }   
        if(number && i<length){                        
            randomFunc.number();                                     
            i++;                                          
        }  
        if(symbol && i<length){                        
            randomFunc.symbol();                      
            i++;                                          
        }  
    }
    displayPassword();
}

function getRandomLower() {
    let ch = 'abcdefghijklmnopqrstuvwxyz';
    let ranLower = ch[Math.floor((Math.random() * 25))];
    finalPass += ranLower;
    console.log(`ranLower: ${ranLower}`);
}

function getRandomUpper() {
    let ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let ranUpper = ch[Math.floor((Math.random() * 25))];
    finalPass += ranUpper;
    console.log(`ranUpper: ${ranUpper}`);
}

function getRandomNumber() {
    let ch = '0123456789';
    let ranNumber = ch[Math.floor((Math.random() * 9))];
    finalPass += ranNumber;
    console.log(`ranNumber : ${ranNumber}`);
}

function getRandomSymbol() {
    let ch = '!@#$%&*';
    let ranSymbol = ch[Math.floor((Math.random() * 6))];
    finalPass += ranSymbol;
    console.log(`ranSymbol : ${ranSymbol}`);
}

function displayPassword(){
   
    resultEl.innerText = finalPass;

}

function clearPrevResult(){
    finalPass = '';
}