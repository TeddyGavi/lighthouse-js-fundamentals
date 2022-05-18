const ageCalculator = function(name, yearOfBirth, currentYear){
  let age;
  age = currentYear - yearOfBirth;
  return name + " is " + age + " years old."; 
}

console.log(ageCalculator("Suzie", 1983, 2015));