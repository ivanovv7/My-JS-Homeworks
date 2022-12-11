console.log("---ATM Homework Part 3---")
//Hardcoded amount of money in account before making withdrawal
let moneyInYourAccount = 1000

function atmWithdrawal( accountBalance, withdrawalrequest){
    //Amount left in account after the money is withdrawn
    let amountLeftAfterWithdrawal = accountBalance-withdrawalrequest
   
    //checking if you have enough money
    if(accountBalance < withdrawalrequest || withdrawalrequest <= 0 ){
        console.log("You do not have enough money or you have entered invalid number")
        alert ("You do not have enough money or you have entered invalid number")
         }

        /*Prints in console: 
        1.Money left in account after withdrawal
        2.Money that are payed/isplateni to the user*/
    else if(accountBalance > withdrawalrequest || withdrawalrequest > 0){
        console.log(`Please take your requested : ${withdrawalrequest}  $`)
        console.log(`You have ${amountLeftAfterWithdrawal} $ left`)
        alert(`You have ${amountLeftAfterWithdrawal} $ left`)
    }
            
    
}


atmWithdrawal(moneyInYourAccount, Number(prompt("Please enter the amount you would like to withdrawal")))

