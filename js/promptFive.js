//sort an array without using sort()
//will the inputs always be integers?

//Bubble sort compares two adjacent elements and swaps them if they are not in the intended order
//input = [3, 1, 8, 7, 5, 9, 4, 6, 2]
//output = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]
//compare element in i[0] to i[1]
//if i[0] > i[1], swap elements
//if i[0] < i[1], move to next element
//when the element reaches the end of the array, it will be considered sorted and the loop will restart
//promptFive([3, 1, 8, 7, 5, 9, 4, 6, 2])

//FIRST LOOP
//start with i = 0 
function promptFive(array) {
  for (let i = 0; i < array.length; i++) {
    for (let e = 0; e < (array.length - i - 1); e++) {
      //e = 0
      if (array[e] > array[e + 1]) {
        //array[0] > array[1]
        //[3, 1] 
        //3 > 1 is true, swap elements
        let holdVariable = array[e]//currently holds 3 to access later
        array[e] = array[e + 1]//reassign array[0] as the value for array[1]
        array[e + 1] = holdVariable//reassign array[1] as the held value in heldValue variable
        // array in current condition = [1, 3, 8, 7, 5, 9, 4, 6, 2]
        //repeat second for loop with e++
      }
    }
  }
  return array
}

//SECOND LOOP
function promptFive(array) {
  for (let i = 0; i < array.length; i++) {
    for (let e = 0; e < (array.length - i - 1); e++) {
      //e = 1
      if (array[e] > array[e + 1]) {
        //array[1] > array[2]
        //[3, 8] 
        //3 > 8 is false, do nothing
        // array in current condition = [1, 3, 8, 7, 5, 9, 4, 6, 2]
        //next loop with e++
        let holdVariable = array[e]
        array[e] = array[e + 1]
        array[e + 1] = holdVariable
      }
    }
  }
  return array
}

//THIRD LOOP
function promptFive(array) {
  for (let i = 0; i < array.length; i++) {
    for (let e = 0; e < (array.length - i - 1); e++) {
      //e = 2
      if (array[e] > array[e + 1]) {
        //array[2] > array[3]
        //[8, 7]
        //8 > 7 is true, swap elements
        let holdVariable = array[e]//currently holds 8 to access later
        array[e] = array[e + 1]//reassign array[0] as the value for array[1]
        array[e + 1] = holdVariable//reassign array[1] as the held value in heldValue variable
        // array in current condition = [1, 3, 7, 8, 5, 9, 4, 6, 2]
        //repeat second for loop with e++
      }
    }
  }
  return array
}

//FOURTH LOOP
function promptFive(array) {
  for (let i = 0; i < array.length; i++) {
    for (let e = 0; e < (array.length - i - 1); e++) {
      //e = 3
      if (array[e] > array[e + 1]) {
        //array[3] > array[4]
        //[8, 5]
        //8 > 5 is true, swap elements
        let holdVariable = array[e]//currently holds 8 to access later
        array[e] = array[e + 1]//reassign array[0] as the value for array[1]
        array[e + 1] = holdVariable//reassign array[1] as the held value in heldValue variable
        // array in current condition = [1, 3, 7, 5, 8, 9, 4, 6, 2]
        //repeat second for loop with e++
      }
    }
  }
  return array
}

//FIFTH LOOP
function promptFive(array) {
  for (let i = 0; i < array.length; i++) {
    for (let e = 0; e < (array.length - i - 1); e++) {
      //e = 4
      if (array[e] > array[e + 1]) {
        //array[4] > array[5]
        //[8, 9] 
        //8 > 9 is false, do nothing
        // array in current condition = [1, 3, 7, 5, 8, 9, 4, 6, 2]
        //next loop with e++
        let holdVariable = array[e]
        array[e] = array[e + 1]
        array[e + 1] = holdVariable
      }
    }
  }
  return array
}

//SIXTH LOOP
function promptFive(array) {
  for (let i = 0; i < array.length; i++) {
    for (let e = 0; e < (array.length - i - 1); e++) {
      //e = 5
      if (array[e] > array[e + 1]) {
        //array[5] > array[6]
        //[9, 4]
        //9 > 4 is true, swap elements
        let holdVariable = array[e]//currently holds 9 to access later
        array[e] = array[e + 1]//reassign array[0] as the value for array[1]
        array[e + 1] = holdVariable//reassign array[1] as the held value in heldValue variable
        // array in current condition = [1, 3, 7, 5, 8, 4, 9, 6, 2]
        //repeat second for loop with e++
      }
    }
  }
  return array
}

//SEVENTH LOOP
function promptFive(array) {
  for (let i = 0; i < array.length; i++) {
    for (let e = 0; e < (array.length - i - 1); e++) {
      //e = 6
      if (array[e] > array[e + 1]) {
        //array[6] > array[7]
        //[, 4]
        //9 > 4 is true, swap elements
        let holdVariable = array[e]//currently holds 9 to access later
        array[e] = array[e + 1]//reassign array[0] as the value for array[1]
        array[e + 1] = holdVariable//reassign array[1] as the held value in heldValue variable
        // array in current condition = [1, 3, 7, 5, 8, 4, 6, 9, 2]
        //repeat second for loop with e++
      }
    }
  }
  return array
}

//EIGHTH LOOP
function promptFive(array) {
  for (let i = 0; i < array.length; i++) {
    for (let e = 0; e < (array.length - i - 1); e++) {
      //e = 7
      if (array[e] > array[e + 1]) {
        //array[7] > array[8]
        //[9, 2]
        //9 > 2 is true, swap elements
        let holdVariable = array[e]//currently holds 9 to access later
        array[e] = array[e + 1]//reassign array[0] as the value for array[1]
        array[e + 1] = holdVariable//reassign array[1] as the held value in heldValue variable
        // array in current condition = [1, 3, 7, 5, 8, 4, 6, 2, 9]
        //The element in the last position should be considered sorted
        //We will only want e to ever be < array.length (9) - 1
        //Now we will move once more to our outer for loop and i++
      }
    }
  }
  return array
}

//SECOND OUTER LOOP
//i = 1
// array in current condition = [1, 3, 7, 5, 8, 4, 6, 2, 9]
//Because we will no longer need to compare the last index position of our array, e always be < array.length -i -1
function promptFive(array) {
  for (let i = 0; i < array.length; i++) {
    //i = 1
    for (let e = 0; e < (array.length - i - 1); e++) {
      //e = 0 
      if (array[e] > array[e + 1]) {
        //array[0] > array[1]
        //[1, 3] 
        //1 > 3 is false, do nothing
        // array in current condition = [1, 3, 7, 5, 8, 4, 6, 2, 9]
        //repeat second for loop with e++
        let holdVariable = array[e]
        array[e] = array[e + 1]
        array[e + 1] = holdVariable
      }
    }
  }
  return array
}

// ... (Jumping ahead until e = 2)

//i = 1
// array in current condition = [1, 3, 7, 5, 8, 4, 6, 2, 9]
function promptFive(array) {
  for (let i = 0; i < array.length; i++) {
    //i = 1
    for (let e = 0; e < (array.length - i - 1); e++) {
      //e = 2 
      if (array[e] > array[e + 1]) {
        //array[2] > array[3]
        //[7, 5] 
        //7 > 5 is true, swap elements
        let holdVariable = array[e]//currently holds 7 to access later
        array[e] = array[e + 1]//reassign array[0] as the value for array[1]
        array[e + 1] = holdVariable//reassign array[1] as the held value in heldValue variable
        // array in current condition = [1, 3, 5, 7, 8, 4, 6, 2, 9]
        //repeat second for loop with e++
      }
    }
  }
  return array
}

//This process will continue until the conditions for the loops are no longer met and will return the array in ascending order
//[1, 2, 3, 4, 5, 6, 7, 8, 9]







