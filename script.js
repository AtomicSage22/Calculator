let initValue = "";
let nextValue = "";
let tempOp = "";
let result;
const displayValue = document.querySelector("p");
const buttons = document.querySelectorAll(".number");
const allClear = document.querySelector(".AC");
const clearBtn = document.querySelector(".C");
const operator = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");

document.addEventListener("keydown", (ev) => {
  switch (ev.key) {
    case "1":
      populateDisplay(ev.key);
      break;
    case "2":
      populateDisplay(ev.key);
      break;
    case "3":
      populateDisplay(ev.key);
      break;
    case "4":
      populateDisplay(ev.key);
      break;
    case "5":
      populateDisplay(ev.key);
      break;
    case "6":
      populateDisplay(ev.key);
      break;
    case "7":
      populateDisplay(ev.key);
      break;
    case "8":
      populateDisplay(ev.key);
      break;
    case "9":
      populateDisplay(ev.key);
      break;
    case "0":
      populateDisplay(ev.key);
      break;
    case "+":
      if (tempOp === "") {
        tempOp = ev.key;
        displayValue.textContent = ev.key;
      } 
      else {
        initValue = operate(Number(initValue), tempOp, Number(nextValue));
        console.log(initValue);
        tempOp = ev.key;
        displayValue.textContent = ev.key;
      }
      break;
    case "-":
      if (tempOp === "") {
        tempOp = ev.key;
        displayValue.textContent = ev.key;
      } 
      else {
        initValue = operate(Number(initValue), tempOp, Number(nextValue));
        console.log(initValue);
        tempOp = ev.key;
        displayValue.textContent = ev.key;
      }
      break;
    case "*":
      if (tempOp === "") {
        tempOp = ev.key;
        displayValue.textContent = ev.key;
      } 
      else {
        initValue = operate(Number(initValue), tempOp, Number(nextValue));
        console.log(initValue);
        tempOp = ev.key;
        displayValue.textContent = ev.key;
      }
      break;
    case "/":
      if (tempOp === "") {
        tempOp = ev.key;
        displayValue.textContent = ev.key;
      } else {
        initValue = operate(Number(initValue), tempOp, Number(nextValue));
        console.log(initValue);
        tempOp = ev.key;
        displayValue.textContent = ev.key;
      }
      break;
    case "Enter":
      displayValue.textContent = operate(
        Number(initValue),
        tempOp,
        Number(nextValue)
      );
      initValue = "";
      nextValue = "";
      tempOp = "";
      break;
    case "Backspace":
      initValue = initValue.slice(0, -1);
      displayValue.textContent = initValue;
      break;
  }
});

buttons.forEach((b) => {
  b.addEventListener("click", () =>
    populateDisplay(b.getAttribute("data-value"))
  );
});

operator.forEach((op) => {
  op.addEventListener("click", () => {
    if (tempOp === "") {
      tempOp = op.getAttribute("data-value");
      displayValue.textContent = `${op.getAttribute("data-value")}`;
    } else {
      initValue = operate(Number(initValue), tempOp, Number(nextValue));
      console.log(initValue);
      tempOp = op.getAttribute("data-value");
      displayValue.textContent = `${op.getAttribute("data-value")}`;
    }
  });
});

allClear.addEventListener("click", () => {
  initValue = "";
  tempOp = "";
  nextValue = "";
  displayValue.textContent = initValue;
});

clearBtn.addEventListener("click", () => {
  initValue = initValue.slice(0, -1);
  displayValue.textContent = initValue;
});

equals.addEventListener("click", () => {
  displayValue.textContent = operate(
    Number(initValue),
    tempOp,
    Number(nextValue)
  );
  initValue = "";
  nextValue = "";
  tempOp = "";
});

const populateDisplay = (value) => {
  if (tempOp === "") {
    initValue = initValue.concat(value);
    displayValue.textContent = initValue;
  } else {
    nextValue = "";
    nextValue = nextValue.concat(value);
    displayValue.textContent = nextValue;
  }
};

const operate = (a, op, b) => {
  switch (op) {
    case "+": {
      return a + b;
    }
    case "-": {
      return a - b;
    }
    case "*": {
      return a * b;
    }
    case "/": {
      return a / b;
    }
    default: {
      return "Enter valid operator";
    }
  }
};
