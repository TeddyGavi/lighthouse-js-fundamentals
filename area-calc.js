function calculateRectangleArea(length, width){
  if (Math.sign(length) === -1 || Math.sign(width) === -1){
    return undefined;
  }  
  let area = length * width;
  return area;
}
function calculateTriangleArea(base, height){
  if (Math.sign(base) === -1 || Math.sign(height) === -1){
    return undefined
  } 
  let area = (base * height) / 2;
  return area
}
function calculateCircleArea(radius){
    if (Math.sign(radius) === -1){
    return undefined
  }
  let area = Math.PI * (radius * radius);
  return area;
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined