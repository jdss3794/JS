const calculator = {
  add: function (a, b) {
    return a + b;
  },
  min: function (a, b) {
    return a - b;
  },
  div: function (a, b) {
    return a / b;
  },
  mul: function (a, b) {
    return a * b;
  },
  powerof: function (a, b) {
    return a ** b;
  },
};

const plusResult = calculator.add(2, 4);
const minusResult = calculator.min(plusResult, 4);
const divResult = calculator.div(10, minusResult);
const mulResult = calculator.mul(divResult, plusResult);
const powerofResult = calculator.powerof(divResult, minusResult);

console.log(plusResult);
console.log(minusResult);
console.log(divResult);
console.log(mulResult);
console.log(powerofResult);
