// Exercise  - Area of Circle
console.log("Write a JS program that will calculate area of Circle")

let radius = 15 // in meters
let π = 3.14159

let areaOfCircle = (π * (radius ** 2))

console.log("This is the area of the Circle", areaOfCircle)


console.log("---------------------------------------------------------")


/* HOMEWORK - Calalculate the price of 30 phones  */

//Price of phone
let priceOfPhone = 119.95

//Calculate VAT for one phone

let vatForPhone = ( (5/100)* priceOfPhone)

console.log("VAT for one phone is :", vatForPhone )

//Price for all 30 phones
console.log("The price for 30 phones with included VAT is : \n "
, (vatForPhone+priceOfPhone)*30)
