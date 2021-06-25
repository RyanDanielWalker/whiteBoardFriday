//determines if all the elements in a string are unique
//cannot convert the string to an array OR use array methods to solve this problem
//should return TRUE or FALSE
//input "hello"
//output false (there are two l's)
//input "copyright"
//output true (no two elements are the same)
//Are uppercase and lowercase letters considered different elements?
//Will the string ever have white space?

//if whitespace string = string.replace(/\s+/g, '')
//if uppercase and lowercase are not considered unique string = string.toLowerCase()
function promptFour(string) {
  for (let i = 0; i < string.length; i++) {
    for (let e = i + 1; e < string.length; e++) {
      if (string[i] === string[e])
        return false
    }
  }
  return true
}

function promptFour(string) {
  //string = "hello"
  for (let i = 0; i < string.length; i++) {
    //string[0] = "h"
    for (let e = i + 1; e < string.length; e++) {
      //i = 0
      //e = 0 +1
      //e = 1
      //string[1] = "e"
      if (string[i] === string[e])
        //(string[0] = "h") === (string[1] = "e")
        //(string[0] = "h") === (string[2] = "l")
        //(string[0] = "h") === (string[3] = "l")
        //(string[0] = "h") === (string[4] = "o")
        //restart first for loop where i++
        //i = 1 
        //(string[1] = "e") === (string[2] = "l")
        //(string[1] = "e") === (string[3] = "l")
        //(string[1] = "e") === (string[4] = "o")
        //restart first for loop where i++
        //i = 2
        //(string[2] = "l") === (string[3] = "l")
        //return false
        return false
    }
  }
  return true
}