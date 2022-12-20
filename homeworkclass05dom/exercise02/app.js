console.log("CONNECTED")


let userInput = Number(prompt("Please enter your age"))

let result = document.getElementById("result")

function inputChickenYears (inputYears){
    if (!isNaN(inputYears)){
        result.innerHTML = `Your chicken weight is : ${inputYears/2}`
    }

    else{result.innerHTML = 'Please provide a number, not letters or special signs'}


}

inputChickenYears(userInput)

