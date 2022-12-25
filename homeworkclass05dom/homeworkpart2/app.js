
// declare array of some random numbers
let arrayOfNumbers = [6,5,8,7,9,99]
  
// select div for listing numbers from array
let firstDiv = document.getElementById("firstDiv")

let result = document.getElementById("result")

//printing numbers from array - POGRESEN KONCEPT
//firstDiv.innerHTML = `The numbers in the array are : ${arrayOfNumbers}`

//declare variale-helper for the sum operation (GLOBAL SCOPE)
let sumOfArrayNum = 0

firstDiv.innerHTML += "<ul>"

for(let i = 0; i<arrayOfNumbers.length;i++){
    //sum of all numbers in array using loop
    sumOfArrayNum+= arrayOfNumbers[i]
    //printing numbers from array in OL - REFACTOR
    firstDiv.innerHTML += `<li>${arrayOfNumbers[i]}</li>`

    
}

firstDiv.innerHTML += "</ul>"


// printing result on html page
result.innerHTML= `The sum of the numbers in the array is : ${sumOfArrayNum}`

result.style.color="red"
