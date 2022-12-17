


function tellStory(array){
myFinalStory = ""
myFinalStory+= `This is ${array[0]}. ${array[0]} is a very nice person.
Today his mood is ${array[1]}. So he will probably be ${array[2]} all day`
console.log(myFinalStory)
}

//first i made the array so it was easier for me to formulate the funcion with index positions
let arrayOfThreeStrings=["Ivan", "Angry", "Sleeping"]

//Printing the function
tellStory(arrayOfThreeStrings)

