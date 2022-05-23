function merge(arrayOne, arrayTwo){
  for (let i = 0; i <= arrayTwo.length - 1; i++){
    arrayOne.push(arrayTwo[i]);
  }
  for (let x = 0; x <= arrayOne.length - 1; x++){
    for (let y = 0; y <= arrayOne.length - 1; y++){
      if (arrayOne[y] > arrayOne[y+ 1]){
      let tmp = arrayOne[y];
      arrayOne[y] = arrayOne[y + 1]
      arrayOne[ y+ 1] = tmp;
      }
    }
  }
  return arrayOne;
}


console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
