/* The function should return an empty array [] if given incorrect parameters, such as:

    start, end, or step being undefined
    start being greater than end
    step being 0, or negative
 */



function range(start, end, step){
  const range = [];
  if (start > end){
    return range;
  }
  if (step <= 0){
    return range;
  }
  if (start === undefined || end === undefined || step === undefined){
    return range;
  }
  for (let i = start; i <= end; i += step){
    range.push(i);
  }
  return range;
}

console.log(range(10,30,5));

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

console.log(range(15, 25,));