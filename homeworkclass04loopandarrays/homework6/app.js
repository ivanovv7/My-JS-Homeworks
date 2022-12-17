console.log("CONNECTED")

function fullNameMerge(firstName,Lastname){
    let fullname = []
    
    // i only specify i<firstName.length for this exercise since we assume the 2 arrays have the same # of items,
    // i can use i<firstName.length && i<lastName.length
    for(let i=0; i<firstName.length; i++){
          fullname.push( i+1+ " " +firstName[i] + " " +Lastname[i]);
          
          
    }
     
    console.log(fullname)
}


//Test number 1, it works
names = ['Ivan', 'Sara', 'Dragan']
surenames =['Ivanov', 'Markova', 'Stefanovski']

fullNameMerge(names,surenames)

namesTwo = ['Thomas','Bob','John','Jason','Ivan']
surnamesTwo=['Shelby','Bobski', 'Wick','Statham', 'Ivanov']

fullNameMerge(namesTwo,surnamesTwo)



