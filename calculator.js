const topScreen = document.querySelector("#screen-top");
const bottomScreen = document.querySelector("#screen-bottom");

let lastInput = []; 
let num1 = 0;
let num2 = 0;
let operator = "";
let result = 0;
let summed = false;

const add = function (a, b) {
    return a + b;
};

const substract = function (a, b) {
    return a - b;
}

const divide = function (a, b) {
    return a / b;
}

const multiply = function (a, b) {
    return a * b;
}

const operate = function () {
    num2 = Number(lastInput.join("").toString());
    console.log(num1, num2);

    if (operator === "") return;
    if (operator === "+") result = add(num1, num2);
    if (operator === "-") result = substract(num1, num2);
    if (operator === "x") result = multiply(num1, num2);
    if (operator === "/") result = divide(num1, num2);

    topScreen.textContent = `${checkIfFloat(num1)} ${operator} ${checkIfFloat(num2)} =`;
    bottomScreen.textContent = checkIfFloat(result);
        num1 = result
        summed = true;
 }

const display = (btn) => {
    if (bottomScreen.textContent === "0") num2 = 0; //clear num2 if prev equation resulted in 0;

    if (result) {
        lastInput = [];
        result = "";
    } if (lastInput.includes(".") && this.textContent === ".") return;
      if (lastInput.length === 8) {
         return;
      } else {
        lastInput.push(this.textContent);
        bottomScreen.textContent = lastInput.concatjoin("").toString();
      }
}

const chainOperators = (btn) => {
    num2 = Number(bottomScreen.textContent);
    
    if (operator === "+") result = add(num1, num2);
    if (operator === "-") result = substract(num1, num2);
    if (operator === "x") result = multiply(num1, num2);
    if (operator === "/") result = divide(num1, num2);

    num1 = checkIfFloat(result);
    num2 = 0;
    lastInput = [];
 }

 const selectOperator = (btn) => {
    if (bottomScreen.textContent === "0") return;
    if (num1 === 0 || summed === true) {
       operator = btn.target.textContent;
       num1 = Number(bottomScreen.textContent);
       num1.toFixed(2);
       lastInput = [];
       topScreen.textContent = `${checkIfFloat(num1)} ${operator}`;
       summed = false;
    
     } else if (num1) {
        chainOperators();
        operator = btn.target.textContent;
        topScreen.textContent = `${checkIfFloat(result)} ${operator}`; 
     }
 }

const checkIfFloat = (btn) => {
    return Number.isInteger(num) ? Number(num) : Number(num.toFixed(2)); // will turn to integer if it's not
};

const clearData = (btn) => {
    topScreen.textContent = "";
    bottomScreen.textContent = 0;
    operator = "";
    num1 = 0;
    num2 = 0;
    lastInput = [];
    result = 0;
};

const clearEntry = (btn) => {
    bottomScreen.textContent = "0";
    num2 = 0;
    lastInput = [];
};

const changeNumberSign = () => {
    let num = Number(bottomScreen.textContent);
    num = num - (num*2);
    lastInput = [num];
    bottomScreen.textContent = num;
}