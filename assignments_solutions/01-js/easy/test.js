function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9 ]/g, '');
  str = str.toLowerCase().replace(/ /g,'');
  
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

console.log(isPalindrome('Eva, can I see bees in a cave?'))