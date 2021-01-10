const num1 = prompt("Please enter the first integer")
const op = prompt("Please enter the operation")
const num2 = prompt("Please enter the second integer")

let x = null;

while(!(op==='*'||op==='-'||op==='+'||op==='/')) {
If(op==='*')
{
  x = num1*num2 
} 
elseif (op==='+'){
  x = num1+num2
} elseif(op==='-')
{
  x = num1-num2
} elseif(op==='/') {
  x = num1/num2
} else {
  op = prompt("Invalid opeation. Please input a valid operation to proceed.")
}
}
console.log('${num1}${op}${num2} = ${x} )
