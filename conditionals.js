const raining = true;
const cold = false;
const temperature = 19;

/* if (raining) {
  console.log("Don't forget your umbrella!");
}
if (cold) {
  console.log("Make sure you pick out a carf!");
}

console.log("Now you're ready to go outsdie!");

 */

/* if (cold){
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
} */

if (temperature < 0){
  console.log("Make sure you pick out a scarf!");
} else if(temperature < 15){
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to out outside");

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18){
  console.log("You are eligible to vote.");
}

if (temperature < -40 || temperature > 40){
  console.log("Maybe going outsdie isn't such a great idea...");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}