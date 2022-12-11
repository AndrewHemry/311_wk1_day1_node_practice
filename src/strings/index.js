const split = (str, delim) => {
  // write code for strings.split
  const splitArray = str.split(delim)
  return splitArray
}

const pairs = (str) => {
  // write code for strings.pairs
  let stringPairs = str.match(/.{1,2}/g)  
  return stringPairs
}

const reverse = (str) => {
  // write code for strings.reverse
  let splitString = str.split("")
  let reverseArray = splitString.reverse()
  let joinArray = reverseArray.join("")

  return joinArray
}

module.exports = {
  split,
  pairs,
  reverse
}