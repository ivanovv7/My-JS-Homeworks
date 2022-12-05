console.log("CONECTED")

/* Chinese Zodiac Homework*/

let yearUserInput = prompt("Please enter the year you were born")

let zodiacFormulaResults = (parseFloat(yearUserInput)-4)%12

console.log("Generated result/value \n", zodiacFormulaResults)

//PROBAV NA NACINOT PODOLU SO && LOGICAL OPERATOR I NE FUNKCIONIRASE, MORAV EDEN PO EDEN DA GI NAPISAM USLOVITE - OD LINE 19 do LINE 21.

//if(parseFloat(yearUserInput)>2022 && parseFloat(yearUserInput)<1903) {
    //alert("Yor birth year is invalid")
//}

if(yearUserInput<1903){ // I did a resarch the oldest person is born in 1903 :))
    alert("You have entered and invalid year")}

    else if(yearUserInput>2022) {
        alert("You have entered and invalid year")
    }// RAT
    else if( zodiacFormulaResults ===0){
      console.log(`Chinese Zodiac: Rat`)}
     // OX
      else if(zodiacFormulaResults===1){
        console.log(`Chinese Zodiac: Ox `)
      }
      // TIGER
      else if(zodiacFormulaResults===2){
        console.log(`Chinese Zodiac: Tiger `)
      }
      //RABBIT
      else if(zodiacFormulaResults===3){
        console.log(`Chinese Zodiac: Rabbit `)
      }
      //DRAGON
      else if(zodiacFormulaResults===4){
        console.log(`Chinese Zodiac: Dragon `)
      }
      //SNAKE
      else if(zodiacFormulaResults===5){
        console.log(`Chinese Zodiac: Snake `)
      }
      //HORSE
      else if(zodiacFormulaResults===6){
        console.log(`Chinese Zodiac: Horse `)
      }
      //GOAT
      else if(zodiacFormulaResults===7){
        console.log(`Chinese Zodiac: Goat `)
      }
      //MONKEY
      else if(zodiacFormulaResults===8){
        console.log(`Chinese Zodiac: Monkey `)
      }
      //ROOSTER
      else if(zodiacFormulaResults===9){
        console.log(`Chinese Zodiac: Rooster `)
      }
      //DOG
      else if(zodiacFormulaResults===10){
        console.log(`Chinese Zodiac: Dog `)
      }
      //PIG
      else if(zodiacFormulaResults===11){
        console.log(`Chinese Zodiac: Pig `)
      }
        
    
