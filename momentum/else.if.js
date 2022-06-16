const age = parseInt(prompt('how old are you?'));

if (isNaN(age)) {
  //만약 age가 숫자가 아니면
  console.log('please write a number'); // 이걸 출력하고
} else if (age < 18) {
  console.log('you are too young');
} else {
  console.log('you can drink ');
}
