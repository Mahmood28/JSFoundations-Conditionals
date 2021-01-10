const num1 = parseInt(prompt('Please enter the first integer'));
var op = prompt('Please enter the operation');
const num2 = parseInt(prompt('Please enter the second integer'));

while(!(op==='*'||op==='-'||op==='+'||op==='/'))  
{
op = prompt('Invalid opeation. Please input a valid operation to proceed.')
}

if(op==='*') console.log(`${num1}${op}${num2} = ${num1*num2}`);
else if (op==='+') console.log(`${num1}${op}${num2} = ${num1+num2}`);
else if(op==='-') console.log(`${num1}${op}${num2} = ${num1 - num2}`);
else  console.log(`${num1}${op}${num2} = ${num1/num2}`);

