let num1= +prompt(`Please enter the Number1:`);
let operator= prompt(`Please enter the operator:`);
let num2= +prompt(`Please enter the Number2:`);

let calculate;
switch (operator){
  case "+":
    calculate=num1+num2
    break;
  case "-":
    calculate =num1-num2
    break;
  case "*":
    calculate = num1*num2
    break;
  case "/":
    calculate = num1/num2
    break;
  default:
  	calculate="Invalid operator";
    break;
}
console.log(calculate);
