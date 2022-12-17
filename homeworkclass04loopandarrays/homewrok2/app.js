


function sumOfFiveNumbersInArray(array,){
    let result = 0
    result = `${array[0]+array[1]+array[2]+array[3]+array[4]}`

 console.log(result)
}

let arrayOfFiveNumbers = [6,9,4,8,9]
sumOfFiveNumbersInArray(arrayOfFiveNumbers)


//BONUS VALIDATE NUMBER()

function validateNumber(arrayTwo){

    if(isNaN(arrayTwo[0])=== false){
        console.log("The number is valid!!")}
        
        else{alert("YOUR NUMBER IS INVALID")}

        if(isNaN(arrayTwo[1])=== false){
            console.log("The number is valid!!")}
            
            else{alert("YOUR NUMBER IS INVALID")}

            if(isNaN(arrayTwo[2])=== false){
                console.log("The number is valid!!")}
                
                else{alert("YOUR NUMBER IS INVALID")}

                if(isNaN(arrayTwo[3])=== false){
                    console.log("The number is valid!!")}
                    
                    else{alert("YOUR NUMBER IS INVALID")}

                    if(isNaN(arrayTwo[4])=== false){
                        console.log("The number is valid!!")}
                        
                        else{alert("YOUR NUMBER IS INVALID")}
    
}

validateNumber(arrayOfFiveNumbers)

//Reusing the function  with array that has NaN in order to test ELSE statement

let arrayWithNan = [15,59,6,'ivan',6336]
validateNumber(arrayWithNan)