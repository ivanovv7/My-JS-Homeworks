
let animal = {
    name: "Molly",
    kind: "Dog",

    speak: function(textToBespokenByDog){
        
       
       return `The ${animal.kind} says: ${textToBespokenByDog}, my name is ${this.name}!!!!`
    }

}

 




// Selecting the input element,adding event Listener, getting input from user, 
        //storeing input, calling function.
        let textToBespoken = document.getElementsByTagName("input")[0].addEventListener("change",function(event){
            let inputFromUser= event.target.value
            //test 1
            console.log( animal.speak(inputFromUser))
            
       })


// test 2 hard code 

console.log(animal.speak("I'm very verryyy hungry!!!"))



