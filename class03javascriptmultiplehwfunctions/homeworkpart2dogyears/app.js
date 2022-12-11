console.log("DOG YEARS CALCULATOR CONNECTED TEST")

function convertDogToHumanYearsAndVv(){
    
    let userChoise = prompt(`Please type "DOG" to calculate your dog's age based on human to dog years or 
     type "HUMAN" to convert dog years to human years just for fun :)`).toUpperCase() // I'm not sure if this is correct but it works in the browser when i type with small letters.

     // Converting user input to number as well as declaring the variable at the same time
     let userInputAges = Number( prompt("Please input your desired age for conversion"))

     //IF statement
     if(userChoise=== "DOG"){
        console.log(`Your dog is ${userInputAges*7} years old in dog years`)}
        else if (userChoise==="HUMAN"){
            console.log(`Your dog is ${userInputAges/7} in human years :)`)
        }
        else {
            alert(`Please choose between DOG or HUMAN as stated before`)
        }

     
     //Is it a mistake that i did not use RETURN? ****
     
}

convertDogToHumanYearsAndVv()

