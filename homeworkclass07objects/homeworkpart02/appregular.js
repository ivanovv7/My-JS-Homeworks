function Books(title,author,readingStatus){
    this.title = title
    this.author = author
    this.readingStatus = readingStatus

    this.readOrUnreadbook = function(status){
        status= this.readingStatus

        if(this.readingStatus===true){
            return `The book "${this.title}" is already read`
        }

        else{
            return `You still need to read: "${this.title}"`
        }
        
    }
}



// Instance number 1
let firstBook = new Books("Zlatan Ibrahimovic - Lion:", "Zlatan Ibrahimovic", true)

console.log(firstBook)

console.log(firstBook.readOrUnreadbook(true))

//Instance number 2
let secondBook = new Books("Of Mice and Men","John Steinbeck",false)

console.log(secondBook.readOrUnreadbook(false))