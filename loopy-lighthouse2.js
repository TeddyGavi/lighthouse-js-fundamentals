function loopyLighthouse(range, multiples, words){
  const  start = range[0];
  const end = range[1]; 
  const oneDiv = multiples[0];
  const twoDiv = multiples[1];
  const word1 = words[0];
  const word2 = words[1];
  for(let i = start; i <= end; i++){
    if (i % oneDiv === 0 && i % twoDiv === 0){
      console.log(word1 + word2);
    } else if (i % oneDiv === 0)   {
      console.log(word1);
    } else if (i % twoDiv === 0) {
      console.log(word2);
    } else {
      console.log(i);
    }
  }
}



