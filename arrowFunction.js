const printName = (name) => `Hello, ${name}!`;
console.log(greeting("Hamad"));

const performMath = (operation, firstNum, secondNum) =>
  operation(firstNum, secondNum);

const addition = (firstNum, secondNum) => firstNum + secondNum;
console.log(performMath(addition, 3, 6));

const square = (num) => num ** 2;
console.log(square(7));

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arraySquared = (num) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = num[i] ** 2;
  }
  return newArray;
};
console.log(arraySquared(array));
