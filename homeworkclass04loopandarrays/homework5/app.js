console.log("TEST")

//Declare function

function findSmallestAndLargestNumberSum(arrayOfnumbers){

    // declare smallest and largest let so that we can compare while we iterate thru given array
    let smallestNumber = arrayOfnumbers[0]
    let largestNumber = arrayOfnumbers[0]
     
    //the first item in an array does not have to compare with itself thats why i=1
    for(let i = 1; i<arrayOfnumbers.length;i++){
        if(arrayOfnumbers[i]<smallestNumber){
        smallestNumber=arrayOfnumbers[i]}

        if(arrayOfnumbers[i]>largestNumber){
            largestNumber=arrayOfnumbers[i]
        }
    }
// I did not declare var for result/sum in order to save RAM memory :))))
console.log(`Output: Max:${largestNumber}, Min:${smallestNumber}, Sum:${largestNumber+smallestNumber}`)
}
// First test, It works.
let arrayOfSomeNumber=[5,6,8,9,2]
findSmallestAndLargestNumberSum(arrayOfSomeNumber)


// Second test, It works.
let arrayTest = [5,22,33,66,99,88,77,44]

findSmallestAndLargestNumberSum(arrayTest)