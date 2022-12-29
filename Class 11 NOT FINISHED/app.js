console.log("-----------EXERCISE 1----------------")

// ****************** EXERCISE 1****************************************

//Declare and initialize a variables of every type that we learned so far. Print each of them
//in a console or alert()!



let userName = "Ivan"; // preffered way of declaring variables
console.log(userName)

const userAge = 27;
console.log(userAge)

var userSureName = true // Old vaj of declaring a variable - BOOLEAN
console.log(userSureName)

console.log("-----------EXERCISE 2----------------")
// ****************** EXERCISE 2********************************************

//let nameOfPromptUser = Number(prompt("Please type your age"))
//console.log(typeof(nameOfPromptUser))

//let userPromptName = prompt("Please your name")
//console.log(typeof(userPromptName))

//let sureNameOfPromptUser = prompt("Please enter your surename")
//console.log(typeof(sureNameOfPromptUser))

//let areYouOver = prompt("Are you over 182 cm in height? please only type TRUE or FALSE")
//console.log(typeof(areYouOver))

// SECOND TRY
function typeoffArguments(parametar="not set") {
    let typeoffvar = `The type of your parametar is ${typeof(parametar)}`
    console.log(typeoffvar)
    return typeoffvar
  }

typeoffArguments(null)
typeoffArguments(true)
typeoffArguments(5)
typeoffArguments("Ivan")
// i could not figure out how to return undifined
//typeoffArguments(swewe)

console.log("-----------EXERCISE 3----------------")
// ****************** EXERCISE 3****************************************

// REQUIREMENTS 

//Write a JavaScript program to get the difference between a given 
//number and 13, if the number is greater than 13 double the difference as a result.

//Make sure you use a function!


//Ex. Input: 20 ==> Output: 14

let result = ""

function doubleTheDiffIfHigher(fixedNumber,givenNumber){
    if(givenNumber>fixedNumber){
        result = (givenNumber-fixedNumber)*2
        return result
    }

    else{
        alert("Please try again :)")
    }



}

let finalOutput = doubleTheDiffIfHigher(13,25)
console.log(finalOutput)


console.log("-----------EXERCISE 4----------------")
// ****************** EXERCISE 4****************************************


function printTheHigherOne (inputOne,inputTwo){

    if(inputOne<0||inputTwo<0){
        alert("Please enter positive number (higher than 0) my friend :)")
    }

    let inputOneResult = 100-inputOne;
    let inputTwoResult = 100-inputTwo;

    if (inputOneResult>inputTwoResult){
        return `${inputTwo} is closer to 100`
    }

    else{
        return `${inputOne} is closer to 100`
    }

}

let firstTry = printTheHigherOne(97,99)

console.log(firstTry)


console.log("-----------EXERCISE 5----------------")
// ****************** EXERCISE 5****************************************

//Bobs salary is 1000 eur per month. He has expenses that has to cover during the month. He has to pay rent
 //for his apartment 375 eur. He should pay 250 eur for his bills in total. Print on screen what is the amount left that
  //Bob has for the rest of the month, and what is the total amount of his expenses.

  let bobsSalary = 1000

  let bobsExpenses = [375,250]

  function bobsMoneyLeftAfterExpenses (salary, expenses){
    let bobsMoneyLeft = 1000
    for(let i =0;i<bobsExpenses.length;i++){
         bobsMoneyLeft -= expenses[i]

    //}

  }
  console.log(bobsMoneyLeft)
}


  // This function is created to work and accept any array as for the second argument
  bobsMoneyLeftAfterExpenses (bobsSalary,bobsExpenses)

  console.log("-----------EXERCISE 6----------------")
// ****************** EXERCISE 6****************************************

let studentExamsGrades= [10,6,8,9,6]

let studentSemestarAverage = ""
let integerstudentSemestarAverage = Number(studentSemestarAverage)


console.log(integerstudentSemestarAverage) // i got 0... it was easier to type = 0 i will leave it as a lesson

function didTheStudentPass (studentExamGrades,passingAverage,studentName){
  let sumOfgrades = 0

  // This function will work for any given array of student grades lenght (for 10 exams, 25, 30.....)
    for(let i = 0; i<studentExamGrades.length;i++){

    sumOfgrades += studentExamGrades[i]
    
    }
    //Testing if the for loop sums the grades => ITS OKK
    console.log(sumOfgrades)
    
    // when invoking the function the user/teacher can choose his passing average number this is the second argument of the function "passingAverage"
    // i even added the student name so when allerting it will say (IVAN YOU PASSED/NOT PASSED)
    if(sumOfgrades/studentExamGrades.length < passingAverage){
        alert("I am sorry you have not passed this semestar, please follow instructions for MAKEUP")
    }

    else{
        alert(`${studentName} you have passed this exam CONGRATS !!!!!!!! :))))))`)
    }
}
// Aneta and George please uncomment line 170 and 172 for testing the function, i commented out so when you open the file you dont get allert instantly :)

//didTheStudentPass(studentExamsGrades,8,"Ivan")

//didTheStudentPass (studentExamsGrades,7,"Ivan")


console.log("-----------EXERCISE 7----------------")
// ****************** EXERCISE 7****************************************

//Requirements

//Make an array of ten elements. Make sure four of them to be: Null, undefined, NaN, “” and false (JavaScript falsy values). 
//Create a function that will work for every array in the world :) and it will remove all the falsy values from the array.

let  arrayOfTenNumbers = [ 7, "Test", undefined, "Eminem", false, undefined, null, 66, NaN,"Ivan","Ivanov","Testing" ]

function clearFlasyValues (everyArrayInTheWorld){
    //This JS filter() method will take out all the falsy values from the given array
    // I have discovered this in the first few homeworks from JS, ofcourse i learned it from  google.
    // If this is not okey i will recreate the Exercise
    // Like this it will work with every array
    let arrayOfOnlyTrutyValues = everyArrayInTheWorld.filter(Boolean)
    
console.log(arrayOfOnlyTrutyValues)

return arrayOfOnlyTrutyValues
}

clearFlasyValues(arrayOfTenNumbers)

console.log("-----------EXERCISE 8----------------")
// ****************** EXERCISE 8****************************************

// Requirements

//Write a JavaScript function called storyTeller(), that will take as an input parameters the input fields values from the html!

//ex: storyTeller(who, what, when);

//In the function, retrieve the current values of the form input elements, make a story from them, and output that in the story div 
//(like "Example: Lancelot was a really strong knight in the middle age!")

let who = document.getElementsByTagName("input")[0]
let what = document.getElementsByTagName("input")[1]
let when = document.getElementsByTagName("input")[2]

let btn = document.getElementsByTagName("button")[0]

let containerForStory = document.getElementById("containerForStory")

function storyTeller(inputOne,inputTwo,inputThree){
    containerForStory.innerHTML += `<p> ${inputOne}  ${inputTwo} ${inputThree}`
}

btn.addEventListener("click", function(event){
    event.preventDefault()
    storyTeller(who.value,what.value,when.value)
})



console.log("-----------EXERCISE 9----------------")
// ****************** EXERCISE 9****************************************

// Requirements

//Write a JavaScript programm called PhoneBook. You should have three input fields in the html, one for firstName, lastName and phoneNumber. 
//After entering the values into each of them, on clicking on a “Save” button, you should display the newly added contact in a table below the
// inputs. Make sure the user is entering an appropriate values in the fields!


//Bonus: Add column with delete and edit button so that you can edit or delete a contact! Try to save the newly added contact as an object
// (literal or construcotr function its up to you) and add it to an array!

let firstName = document.getElementById("firstName")
let secondName = document.getElementById("lastName")
let phoneNumber = document.getElementById("phoneNumber")

let btnAddContact = document.getElementById("btnAddContact")
















