

function CreateOneBigString(arrayDymanic){
    // Searched the net and :
    //.join is creating one string from all array elements, ('')--> is SPACE separator
    console.log(arrayDymanic.join(' '))
}

//First calling test
let anyArray=["Hello", "my", "friends", "how are you ?"]

CreateOneBigString(anyArray)
//Works fine

/*************************************************** */

//Second calling test

let anyArrayTwo=["My", "name", "is", 'Ivan Ivanov']

CreateOneBigString(anyArrayTwo)

// It also works fine :)