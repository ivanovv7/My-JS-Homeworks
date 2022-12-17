

function findNUmber(number, array){
 
    let repetitions = 0;
    for(let i = 0; i<array.length; i++){
        if(array[i]===number){
            repetitions++;
            
        }
        
    }
    console.log(`There are ${repetitions} repetitions of the number ${number} in this array`)
    
}

//First call
findNUmber(6,[6,5,2,1,8,9,7,4,5,8,7])
// Second call
findNUmber(7,[5,7,8,7,9,6,7,4,7])
//Third call
findNUmber(10,[5,6,16,10,10,10,25,66,128])


/* ALTERNATIVE WAY IF I DO NOT CONSOLE.LOG IN THE FUNCTION */ 
//let number = 6
//let array = [6,5,6,6,2,3,8,9,1,4,5,8,6]
//console.log(`There are ${findNUmber(number,array)} repeitions of the number ${number} in this array `)



