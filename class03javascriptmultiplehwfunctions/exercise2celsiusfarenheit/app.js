function celToFar(celsius="10"){
    let convertionCF= celsius * 1.8 + 32;
    return convertionCF
}

function farToCel(fahrenheit="10"){
    let convertionFC = (5/9) * (fahrenheit-32)
    return convertionFC
}

let whatToConvert= prompt("Type C for Celsius to Fahreinheit, or \n Type F for Fahreheit to Celsius ")

// Converting user input to UPPERCASE
let upperCaseWhatToConvert = whatToConvert.toUpperCase()

let amount = parseFloat(prompt("Please type your amount"))



if (upperCaseWhatToConvert === "C"){
    //Global
    console.log( celToFar(amount), "F")}
    else if(upperCaseWhatToConvert=== "F"){
    //Global
       console.log(farToCel(amount), "C")}
       else {
        console.log('Invalid currency')
       }