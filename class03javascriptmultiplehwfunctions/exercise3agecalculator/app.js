
const d= new Date()
let currentYear = d.getFullYear()

function calculateAge(currentYear, birthYear){
    let realAge= (currentYear-birthYear)
    return `Your are ${realAge} years old`
}
//Ivan age
let ivanAge = calculateAge(currentYear,1995)
console.log(ivanAge)

// Sara age

let saraAge = calculateAge(currentYear,1995)
console.log(saraAge)

//Dragan age

let draganAge = calculateAge(currentYear,1972)
console.log(draganAge)


