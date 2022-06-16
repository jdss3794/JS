const age = parseInt(prompt('how old are you?'));

/* true || true === true
true || false === true
false || true === true
false || false === false */

if (isNaN(age) || age < 0) {
  //만약 age가 숫자가 아니거나 음수면
  console.log('please write a real positive number'); // 이걸 출력하고
} else if (age < 18) {
  console.log('you are too young');
} else if (age >= 18 && age <= 50) {
  console.log('you can drink');
} else if (age > 50 && age <= 80) {
  console.log('you should exercise');
} else if (age === 100) {
  console.log('wow, you are wise');
} else if (age > 80) {
  console.log('you can do whatever you want');
} else {
  console.log("you can't drink"); //false여야 작동함
}
