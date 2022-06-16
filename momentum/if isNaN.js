const age = parseInt(prompt('how old are you?'));

if (isNaN(age)) {
  //만약 age가 숫자가 아니면
  console.log('please write a number'); // 이걸 출력하고
} else {
  console.log('thank you for writing your age'); //숫자가 맞으면 이걸 출력한다
}
