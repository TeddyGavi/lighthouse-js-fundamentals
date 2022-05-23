function concat(arrayOne, arrayTwo){
  for (let i = 0; i <= arrayTwo.length - 1; i++){
    arrayOne.push(arrayTwo[i]);
  }
  return arrayOne;
}

console.log(concat([19, 20, 45, 50], [56, 80, 79, 100]));