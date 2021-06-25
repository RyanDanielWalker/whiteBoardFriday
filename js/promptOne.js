function promptOne(string) {
  //string = "Jasmine Ann Jones"
  const stringArray = string.split(" ")
  // [
  //   "Jasmine",
  //   "Ann",
  //   "Jones"
  // ]
  const newString = stringArray.join("%20")
  // "Jasmine" + "20%" + "Ann" + "20%" + "Jones"
  return newString
  // "Jasmine20%Ann20%Jones"
}

const promptOne = (str) => {
  const newString = str.split(" ").join("%20")
  newString
}

//The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.  
//The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.