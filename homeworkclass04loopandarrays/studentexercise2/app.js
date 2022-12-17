

function findNUmber(array,){

    let oddOrEvenNumers = ""

    for(let i = 0; i < array.length;i++){

        if(array[i] % 2===0){
            console.log(oddOrEvenNumers =`${array[i]} is a even number`)
            
        }
        
        else{
            console.log(oddOrEvenNumers = `${array[i]} is a odd nummber`)
        }
    }


}

findNUmber([6,5,1,2,6,5,4,7,8,5,6])