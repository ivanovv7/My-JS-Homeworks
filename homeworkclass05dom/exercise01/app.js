console.log("-----Connected-----")

// select first div
let first = document.getElementById("first")
console.log(first)

//select all paragraphs
let allP = document.getElementsByTagName("p")
console.log(allP)

//select last div
     // second div selected
let anotherDiv = document.getElementsByClassName("anotherDiv")
 console.log(anotherDiv)

 let anotherDivar = anotherDiv[0]

 let lastDiv = anotherDivar.nextElementSibling
 console.log(lastDiv)

 // select h3 in last div
 let headerThree = lastDiv.lastElementChild
 console.log(headerThree)

 //select h1 in last div
 let headerOne = lastDiv.firstElementChild
 console.log(headerOne)

 // get text from first paragraph in second div

 let paragraphSecondText = document.getElementsByClassName("second")[0].innerText;
 console.log(paragraphSecondText)

 // add the word text to the "text" element

 let textElement = document.getElementsByTagName("text")[0].innerText+= "text"
 console.log(textElement)

 // change text of header 1 and 3
 headerOne.innerText= 'Header 1 new text'
 console.log(headerOne)

 headerThree.innerText = 'Header 3 new text'






