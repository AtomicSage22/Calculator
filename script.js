let initValue = "";
let firstValue;
let tempOp;
const displayValue = document.querySelector("p");
const buttons = document.querySelectorAll(".number");
const allClear = document.querySelector(".AC");
const clearBtn = document.querySelector(".C");
const operator = document.querySelectorAll(".operator");


const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    return a / b;
};

const operate = (a, op, b) =>{
    switch (op){
        case "+":
            {
                return add(a, b);
            }
        case "-":
            {
                return subtract(a, b);
            }
        case "*":
            {
                return multiply(a, b);
            }
        case "/":
            {
                return divide(a, b);
            }
        default:
            {
                return "Enter valid operator";
            }
    }
}

const populateDisplay = (value) =>{
    initValue = initValue.concat(value); 
    displayValue.textContent = initValue;
};

const postOperator = (value) =>{

}

buttons.forEach((b)=>{
    b.addEventListener("click",()=> populateDisplay(b.getAttribute("data-value")));
});

operator.forEach((op)=>{
    op.addEventListener("click",()=>{
        firstValue = initValue;
        tempOp = op.getAttribute("data-value");
        initValue = "";
        displayValue.textContent = initValue;
    });
})

allClear.addEventListener("click", ()=> {
    initValue = "";
    displayValue.textContent = initValue;
});

clearBtn.addEventListener("click", ()=> {
    initValue = initValue.slice(0, -1);
    displayValue.textContent = initValue;
});