
let car = {
    model: "vw",
    color: "red",
    year:  "2012",
    fuelConsuption: 9.5,

    fuelNeededForDistacne: function(distance){

        //adding another propert to the object and calculation
         car.neededFuel = distance *(this.fuelConsuption/100)
         
         //bonus on my hand, practice....
         let fuelConsuptionResult = document.getElementById("fuelConsuptionResult").innerHTML = car.neededFuel

        return `You will need ${this.neededFuel} liters of fuel for this distance ${distance}`

    }


}

console.log(car)

console.log(car.fuelNeededForDistacne(252))
console.log(car.fuelNeededForDistacne(369))


