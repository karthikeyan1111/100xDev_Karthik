/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let charDict1 = {};
  let charDict2 = {};
  let nstr1 = str1.toLowerCase();
  let nstr2 = str2.toLowerCase();
  if(str1 === str2){
    return true;
  }
  
  else if(nstr1.length !== nstr2.length){
    return false;
  }
  else{
    for(let i=0;i<nstr1.length; i++){
      if(!charDict1[nstr1[i]]){
        charDict1[nstr1[i]]=1;
      }
      else{
        charDict1[nstr1[i]]+=1;
      }
    }
    for(let i=0;i<nstr2.length; i++){
      if(!charDict2[nstr2[i]]){
        charDict2[nstr2[i]]=1;
      }
      else{
        charDict2[nstr2[i]]+=1;
      }
    }
    for(let char in charDict1){
      if(charDict1[char]!= charDict2[char]){
          return false;
      }
      else{
          return true;
      }
    }
  }
}



module.exports = isAnagram;
