const inputHTML = document.getElementById('input');
const outputHTML = document.getElementById('output');
let output;

const currencies = ['EUR', 'USD', 'BLN'];

let select1 = document.getElementById('select1');
let select2 = document.getElementById('select2');

let currency1 = 'EUR';
let currency2 = 'EUR';

const exchangeRatesEURtoUSD = 1.14;
const exchangeRatesEURtoBLN = 2.41;
const exchangeRatesUSDtoBLN = 2.11;
const EURtoUSD = document.getElementById('EURtoUSD');
const EURtoBLN = document.getElementById('EURtoBLN');
const USDtoEUR = document.getElementById('USDtoEUR');
const USDtoBLN = document.getElementById('USDtoBLN');
const BLNtoEUR = document.getElementById('BLNtoEUR');
const BLNtoUSD = document.getElementById('BLNtoUSD');

const currentCurrency = (currency, id) =>{
    id.innerText = currency.toFixed(4);
}

currentCurrency(exchangeRatesEURtoUSD, EURtoUSD);
currentCurrency(exchangeRatesEURtoBLN, EURtoBLN);
currentCurrency(1/exchangeRatesEURtoUSD, USDtoEUR);
currentCurrency(exchangeRatesUSDtoBLN, USDtoBLN);
currentCurrency(1/exchangeRatesEURtoBLN, BLNtoEUR);
currentCurrency(1/exchangeRatesUSDtoBLN, BLNtoUSD);

select1.addEventListener('change', function(){
    currency1 = select1.value;
    switch(currency1){
        case 'USD':
            switch(currency2){
                case 'BLN':
                        output = (document.getElementById('input').value * exchangeRatesUSDtoBLN).toFixed(2);
                        outputHTML.innerText = output;
                    break;
                case 'EUR':
                        output = (document.getElementById('input').value / exchangeRatesEURtoUSD).toFixed(2);
                        outputHTML.innerText = output;
                    break;
                case 'USD':
                        output = document.getElementById('input').value;
                        outputHTML.innerText = output;
                    break;
            }
            break;
        case 'EUR':
            switch(currency2){
                case 'BLN':
                        output = (document.getElementById('input').value * exchangeRatesEURtoBLN).toFixed(2);
                        outputHTML.innerText = output;
                    break;
                case 'USD':
                        output = (document.getElementById('input').value * exchangeRatesEURtoUSD).toFixed(2);
                        outputHTML.innerText = output;
                    break;
                case 'EUR':
                        output = document.getElementById('input').value;
                        outputHTML.innerText = output;
                    break;
            }
            break;
        case 'BLN':
            switch(currency2){
                case 'EUR':
                        output = (document.getElementById('input').value / exchangeRatesEURtoBLN).toFixed(2);
                        outputHTML.innerText = output;
                    break;
                case 'USD':
                        output = (document.getElementById('input').value / exchangeRatesUSDtoBLN).toFixed(2);
                        outputHTML.innerText = output;
                    break;
                case 'BLN':
                        output = document.getElementById('input').value;
                        outputHTML.innerText = output;
                    break;
            }
            break;
            default:
                outputHTML.innerText = 'error';
                break;
    }
})

select2.addEventListener('change', function(){
    currency2 = select2.value;
    switch(currency1){
        case 'USD':
            switch(currency2){
                case 'BLN':
                        output = (document.getElementById('input').value * exchangeRatesUSDtoBLN).toFixed(2);
                        outputHTML.innerText = output;
                    break;
                case 'EUR':
                        output = (document.getElementById('input').value / exchangeRatesEURtoUSD).toFixed(2);
                        outputHTML.innerText = output;
                    break;
                case 'USD':
                        output = document.getElementById('input').value;
                        outputHTML.innerText = output;
                    break;
            }
            break;
        case 'EUR':
            switch(currency2){
                case 'BLN':
                        output = (document.getElementById('input').value * exchangeRatesEURtoBLN).toFixed(2);
                        outputHTML.innerText = output;
                    break;
                case 'USD':
                        output = (document.getElementById('input').value * exchangeRatesEURtoUSD).toFixed(2);
                        outputHTML.innerText = output;
                    break;
                case 'EUR':
                        output = document.getElementById('input').value;
                        outputHTML.innerText = output;
                    break;
            }
            break;
        case 'BLN':
            switch(currency2){
                case 'EUR':
                        output = (document.getElementById('input').value / exchangeRatesEURtoBLN).toFixed(2);
                        outputHTML.innerText = output;
                    break;
                case 'USD':
                        output = (document.getElementById('input').value / exchangeRatesUSDtoBLN).toFixed(2);
                        outputHTML.innerText = output;
                    break;
                case 'BLN':
                        output = document.getElementById('input').value;
                        outputHTML.innerText = output;
                    break;
            }
            break;
            default:
                outputHTML.innerText = 'error';
                break;
    }
})

inputHTML.addEventListener('click', function(){
    switch(currency1){
        case 'USD':
            switch(currency2){
                case 'BLN':
                    inputHTML.addEventListener('input', function(){
                        output = (document.getElementById('input').value * exchangeRatesUSDtoBLN).toFixed(2);
                        outputHTML.innerText = output;
                    });
                    break;
                case 'EUR':
                    inputHTML.addEventListener('input', function(){
                        output = (document.getElementById('input').value / exchangeRatesEURtoUSD).toFixed(2);
                        outputHTML.innerText = output;
                    });
                    break;
                case 'USD':
                    inputHTML.addEventListener('input', function(){
                        output = document.getElementById('input').value;
                        outputHTML.innerText = output;
                    });
                    break;
            }
            break;
        case 'EUR':
            switch(currency2){
                case 'BLN':
                    inputHTML.addEventListener('input', function(){
                        output = (document.getElementById('input').value * exchangeRatesEURtoBLN).toFixed(2);
                        outputHTML.innerText = output;
                    });
                    break;
                case 'USD':
                    inputHTML.addEventListener('input', function(){
                        output = (document.getElementById('input').value * exchangeRatesEURtoUSD).toFixed(2);
                        outputHTML.innerText = output;
                    });
                    break;
                case 'EUR':
                    inputHTML.addEventListener('input', function(){
                        output = document.getElementById('input').value;
                        outputHTML.innerText = output;
                    });
                    break;
            }
            break;
        case 'BLN':
            switch(currency2){
                case 'EUR':
                    inputHTML.addEventListener('input', function(){
                        output = (document.getElementById('input').value / exchangeRatesEURtoBLN).toFixed(2);
                        outputHTML.innerText = output;
                    });
                    break;
                case 'USD':
                    inputHTML.addEventListener('input', function(){
                        output = (document.getElementById('input').value / exchangeRatesUSDtoBLN).toFixed(2);
                        outputHTML.innerText = output;
                    });
                    break;
                case 'BLN':
                    inputHTML.addEventListener('input', function(){
                        output = document.getElementById('input').value;
                        outputHTML.innerText = output;
                    });
                    break;
            }
            break;
            default:
                outputHTML.innerText = 'error';
                break;
    }
})









