// const curr=document.querySelector(".curr")
// const prev=document.querySelector(".prev")
// const clear=document.querySelector(".clear")
// const del=document.querySelector(".del")
// const equal=document.querySelector(".equal")
// const number=document.querySelectorAll(".num")
// const operator=document.querySelectorAll(".operator")
// let operation;
// function appendnum(number) {
//     if(number === "." && curr.innerText.includes(".")) return;
//     curr.innerText += number;
// }
// function chooseoper(operator) {
//     if (curr.innerText==="") return;
//     compute(operator);
//     operation=operator;
//     curr.innerText += operator;
//     prev.innerText=curr.innerText;
//     curr.innerText="";
// }
// function cleardisplay() {
//     curr.innerText="";
//     prev.innerText="";
// }
// function compute(operator) {
//     let result;
//     const prevvalue=parseFloat(prev.innerText);
//     const currvvalue=parseFloat(curr.innerText);
//     if (isNaN(prevvalue)||isNaN(currvvalue)) return;
//     switch (operator) {
//         case "+":
//             result=prevvalue+currvvalue;        
//             break;
//         case "-":
//             result=prevvalue-currvvalue;
//             break;
//         case "*":
//             result=prevvalue*currvvalue;
//             break;
//         case "/":
//             result=prevvalue/currvvalue;
//             break;
//         default:
//             break;
//     }
//     curr.innerText=result;
// }
// number.forEach((number)=>{
//     number.addEventListener("click",()=>{
//         appendnum(number.innerText);
//         });
// });
// operator.forEach((operator)=>{
//     operator.addEventListener("click",()=>{
//         chooseoper(operator.innerText); 
//     });
// });
// clear.addEventListener("click",()=>{
//     cleardisplay();
// });
// equal.addEventListener("click",()=>{
//     compute();
//     prev.innerText="";
// });
// del.addEventListener("click",()=>{
//     curr.innerText=curr.innerText.slice(0,-1);
// });

const currDisplay = document.querySelector(".curr");
const prevDisplay = document.querySelector(".prev");
const numbers = document.querySelectorAll(".num");
const operands = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");
const delBtn = document.querySelector(".del");
const equalBtn = document.querySelector(".equal");
let operation;

function appendNumber(number) {
  if (number === "." && currDisplay.innerText.includes(".")) return;
  currDisplay.innerText += number;
}

function chooseOperation(operand) {
  if (currDisplay.innerText === "") return;
  compute(operand);
  operation = operand;
  currDisplay.innerText += operand;
  prevDisplay.innerText = currDisplay.innerText;
  currDisplay.innerText = "";
}

function clearDisplay() {
  currDisplay.innerText = "";
  prevDisplay.innerText = "";
}

function compute(operand) {
  let result;
  const previousValue = parseFloat(prevDisplay.innerText);
  const currentValue = parseFloat(currDisplay.innerText);

  if (isNaN(previousValue) || isNaN(currentValue)) return;

  switch (operation) {
    case "+":
      result = previousValue + currentValue;
      break;
    case "-":
      result = previousValue - currentValue;
      break;
    case "*":
      result = previousValue * currentValue;
      break;
    case "/":
      result = previousValue / currentValue;
      break;
    default:
      return;
  }
  currDisplay.innerText = result;
}

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    appendNumber(number.innerText);
  });
});

operands.forEach((operand) => {
  operand.addEventListener("click", () => {
    chooseOperation(operand.innerText);
  });
});

clearBtn.addEventListener("click", () => {
  clearDisplay();
});

equalBtn.addEventListener("click", () => {
  compute();
  prevDisplay.innerText = "";
});

delBtn.addEventListener("click", () => {
  currDisplay.innerText = currDisplay.innerText.slice(0, -1);
});