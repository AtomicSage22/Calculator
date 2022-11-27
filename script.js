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

const populateDisplay = (value) =>{
    if (tempOp === ""){
        initValue = initValue.concat(value); 
        displayValue.textContent = initValue;
    }
    else{
        nextValue = nextValue.concat(value);
        displayValue.textContent = nextValue;
    }
};  

buttons.forEach((b)=>{
    b.addEventListener("click",()=> populateDisplay(b.getAttribute("data-value")));
});

operator.forEach((op)=>{
    op.addEventListener("click",()=>{
        tempOp = op.getAttribute("data-value");
        displayValue.textContent = `${op.getAttribute("data-value")}`;
    });
})

allClear.addEventListener("click", ()=> {
    initValue = "";
    tempOp = "";
    displayValue.textContent = initValue;
});

clearBtn.addEventListener("click", ()=> {
    initValue = initValue.slice(0, -1);
    displayValue.textContent = initValue;
});

equals.addEventListener("click", ()=>{
    displayValue.textContent =  operate(Number(initValue), tempOp, Number(nextValue)); 
    initValue = "";
    nextValue = "";
    tempOp = "";
})

const operate = (a, op, b) =>{
    switch (op){
        case "+":
            {
                return a + b;
            }
        case "-":
            {
                return a - b;
            }
        case "*":
            {
                return a * b;
            }
        case "/":
            {
                return a / b;
            }
        default:
            {
                return "Enter valid operator";
            }
    }
}