/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9 ]/g, '');
  str = str.toLowerCase().replace(/ /g,''); // This part is jank i know XD
  
  let ptr = str.length-1;
  for(let i=0; i< str.length; i++){
    if(str[i]!==str[ptr]){
      return false;
    }
    else{
      ptr -= 1;
    }
  }
  return true;
}

module.exports = isPalindrome;
