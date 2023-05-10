const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;

const qS = (element) => document.querySelector(element);
const userNum1 = qS(".user-num1");
const operationEl = qS(".operator");
const userNum2 = qS(".user-num2");
const calcBtn = qS(".calculator");
const result = qS(".result");

const calculate = (num1, num2, operation) => {
  switch (operationEl.value) {
    case "+":
      result.textContent = sum(
        parseInt(userNum1.value),
        parseInt(userNum2.value)
      );
      break;
    case "-":
      result.textContent = sub(
        parseInt(userNum1.value),
        parseInt(userNum2.value)
      );
      break;
    case "*":
      result.textContent = mult(
        parseInt(userNum1.value),
        parseInt(userNum2.value)
      );
      break;
    case "/":
      result.textContent = div(
        parseInt(userNum1.value),
        parseInt(userNum2.value)
      );
      break;
  }
};

calcBtn.addEventListener("click", (event) => {
  event.preventDefault();
  calculate();
});
