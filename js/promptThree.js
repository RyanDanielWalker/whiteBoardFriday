//string = "aaabccdddda"
//return "3ab2c4da"
//cannot convert string to an array OR use array methods

function promptThree(string) {
  let newString = ""
  let counter = 1
  for (let i = 0; i < string.length; i++) {
    let currentCharacter = string[i]
    let nextCharacter = string[i + 1]
    if (currentCharacter === nextCharacter) {
      counter++
    } else {
      if (counter === 1) {
        newString += currentCharacter
      } else {
        newString += counter + character
        counter = 1
      }
    }
  }
  return newString
}

//We want to find the number of times a character is repeating in a string. In order to do that, we will need to compare each character to the character following it. If we loop through the string beginning at the 0th index for as long as the string has characters (The last index will only need to be compared to the index in front of it), we should be able to tell if the character at the current index matches the character in the next index position. 

function promptThree(string) {
  let newString = "" //empty string
  let counter = 1 //will keep track of number of repetitions
  for (let i = 0; i < string.length; i++) {
    let currentCharacter = string[i]
    //"aaabccdddda" string[0] = a
    let nextCharacter = string[i + 1]
    //"aaabccdddda" string[1] = a
    if (currentCharacter === nextCharacter) {
      counter++
      //"aaabccdddda" string[0 + 1 = 1] = a, counter would now = 2
      //"aaabccdddda" string[1 + 1 = 2] = a, counter would now = 3
      //"aaabccdddda" string[2 + 1 = 3] = b, a != b therefore move to else conditional
    } else {
      //newString += counter + character
      //does not account for 1 being printed in front of non-repeated numbers
      if (counter === 1) {
        //counter is currently at 3, move to else
        newString += currentCharacter
      } else {
        newString += counter + character
        //newString = 3a
        counter = 1
        //reset counter to one and move to i = 1 in loop
      }
    }
  }
  return newString
}

//ATTEMPT TO BEGIN SOLVING RECURSIVELY
// const recursiveThree = (string, i = 0, newString = "", counter = 1) => {
//   if (i < string.length) {
//     const currentCharacter = string[i]
//     //i = 0
//     //currentCharacter = "a"
//     //counter = 2
//     //i = 1
//     //currentCharacter = "a"
//     //counter = 3
//     //i = 2
//     //currentCharacter = "a" 
//     const nextCharacter = string[i + 1]
//     //nextCharacter = "a"
//     //nextCharacter = "a"
//     //nextCharacter = "b"
//     if (currentCharacter === nextCharacter) {
//       return recursiveThree(string, i + 1, newString = "", counter + 1)
//     } else {
//       if (counter === 1) {
//         const newString = newString.concat(currentCharacter)
//         return recursiveThree(string, i + 1, newString, counter = 1)
//       }
//       const newString = newString.concat(counter + currentCharacter)
//       return recursiveThree(string, i + 1, newString, counter = 1)
//     }
//   } else {
//     return newString
//   }
// }

