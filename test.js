var array = [1, 2, 3, 4, 5]
var x = function(array) {
  for(item in array) {
    if (item > 3) {
      console.log("above 3")
    }
    if (item > 2) {
      console.log("above 2")
    }
    if (item > 4) {
      console.log("above 4")
    }
  }
}


console.log(x(array));