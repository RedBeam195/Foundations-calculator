const numberBtns = [...document.querySelectorAll(".numbers button")];
numberBtns.push(...[...document.querySelectorAll(".down-bar button")]);

let firstNumber = 0;
let operator = "";
let secondNumber = 0;

let resultPara = document.querySelector(".result p");

numberBtns.map((button) => {
    button.addEventListener("click", (e) => {
        document.querySelector(".result p").textContent != "0" ? document.querySelector(".result p").textContent += e.target.textContent : document.querySelector(".result p").textContent = "" + e.target.textContent;
    })
})
const registerOperator = (op) => {
    firstNumber = resultPara.textContent;
    operator = op;
    resultPara.textContent = "0";
}

let operators = [...document.querySelectorAll(".operator")]
operators.map((button) => {
    button.addEventListener("click", (e) => {
        registerOperator(e.target.textContent);
    });
})

let computeOperation = (a,b,operation)=>{
    a = parseFloat(a);
    b = parseFloat(b);
    switch(operation){
        case "/":
            resultPara.textContent = a/b;
            break;
        case "x":
            resultPara.textContent = a*b;
            break;
        case "-":
            resultPara.textContent = a-b;
            break;
        case "+":
            resultPara.textContent = a+b;
            break;
    }
}

const validateBtn = document.querySelector(".validate");
validateBtn.addEventListener("click",(e)=>{
    computeOperation(firstNumber,resultPara.textContent,operator);
})

const allClear = document.querySelector("#clear-all").addEventListener("click",(e)=>{
    firstNumber = 0;
    operator = "";
    secondNumber = 0;
    resultPara.textContent = "0";
})

const clear = document.querySelector("#clear-current").addEventListener("click",(e)=>{
    resultPara.textContent = "0";
})