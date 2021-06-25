//Can I expect multiple data types?
//Am I only accounting for duplicate elements or should I account for ANY duplicate? ie: [51, 5] both have 5
function promptTwo(array) {
  //array = [7, 9, "hi", 12, "hi", 7, 53]
  let newArray = []
  array.forEach((element) => {
    if (!newArray.includes(element)) {
      newArray.push(element)
    }
  })
  return newArray
}

//The forEach() method executes a provided function once for each array element.
//The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
//The push() method adds one or more elements to the end of an array and returns the new length of the array.

function promptTwoFilter(array) {
  let newArray = array.filter((element, i) => {
    return array.indexOf(element) === i
  })
  return newArray
}
//[1, 2, 3, 4, 4, 4, 5]
//[1 = i(0), 2 = i(1), 3 = i(2), 4 = i(3), 5 = i(6)]

//The indexOf() method returns the index of the first occurrence of an element in an array. 
//The duplicate element is the element whose index is different from its indexOf() value.
//To remove the duplicates, you use the filter() method to include only elements whose indexes match their indexOf values.
//If you wanted only the duplicates, reverse the condition (return array.indexOf(element) !== i)

