
function typeoffArguments(parametar="not set") {
  let typeoffvar = `The type of your parametar is ${typeof(parametar)}`
  console.log(typeoffvar)
  return typeoffvar
}

typeoffArguments(null)
typeoffArguments(true)
typeoffArguments(5)
typeoffArguments("Ivan")
// i could not figure out how to return undifined
typeoffArguments(swewe)