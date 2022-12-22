console.log("CONNECTED")


//selecting button
let buttonTable = document.getElementById("buttonTable")

//creating function for dynamic table
function createTableDynamical(){
    //declare prompts, convert input to number
    let rows = Number(prompt("Insert number of rows"))
    let columns = Number(prompt("Insert number of columns"))
    let myTable = document.getElementById("myTable")

    //iterate from 0 to inputed number from user
    for(let r=0;r<rows;r++){
        //select table from html and add row with position r
         let addRow=myTable.insertRow(r)

        for(let c=0; c<columns;c++){
             let addColumn = addRow.insertCell(c)
             addColumn.innerHTML=`Row ${r+1} Column ${c+1}`
        }
    }
}

buttonTable.addEventListener("click",createTableDynamical)










