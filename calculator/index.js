// // // made a onclick function to display my value of my button in my input space
// let b = document.getElementById('input1');
// let arr = [];
// function handleclick(a) {
//     b.value += a;
//     arr.push(b.value);
// }

// // made a function for remove button
// function handleremove() {
//     let c = document.getElementById('input1');
//     c.value = '';
// }

// // get input from arrays 
// for (let i = 0; i < arr.length; i++) {
//   var d  = arr[arr.length - i -1];
//   break;
// }

// function name(params) {
// let e =  d;
// let num = e.match(/\d+/g);

// let num1 = parseFloat(num[0]);
// let num2 = parseFloat(num[num.length - 1]);
// let op = e.match(/[+\-*/]/g)[0];

// }

// // let e =  d;
// // let num = e.match(/\d+/g);

// // let num1 = parseFloat(num[0]);
// // let num2 = parseFloat(num[num.length - 1]);


// // logic for calculation

// function add() {
//     const f = num1 + num2;
//     return f;
// }

// function sub() {
//     const f = num1 - num2;
//     return f;
//   }

// function mutli() {
//     const f = num1 * num2;
//     return f;
// }

// function divi() {
//     const f = num1 / num2;
//     return f;
// }

// // logic for showing result in input space 

// // catching the symbol of operators 
// // let op = e.match(/[+\-*/]/g)[0];

// function handleresult(op) {
//   if (op ===  '+') {
//     b.value = add();
//   } else if (op === '-') {
//     b.value = sub();
//   } else if (op === '*'){
//     b.value = mutli();
//   } else if( op === '/'){
//     b.value = divi();
//   }
// }

// // const a = '12 + 56';
// // const s = a.split('');
// // const b = parseFloat(s[0]);
// // const c = parseFloat(s[1]);
// // console.log(s);
// // console.log(b);
// // console.log(c);

// // const a = '12000 - 5678';

// // // Match all numbers in the string
// // const numbers = a.match(/\d+/g);  // returns ['12000', '5678']

// // // Extract first and last numbers
// // const firstNum = parseInt(numbers[0]);
// // const lastNum = parseInt(numbers[numbers.length - 1]);

// // console.log("First Number:", firstNum); // 12000
// // console.log("Last Number:", lastNum);   // 5678

// // let arr = [1 ,2 ,3 ,4 ,5 ,6, 7, 8,"1245541+4541548215"];
// // // console.log(arr.length);
// // // console.log(arr[8]);
// // for (let i = 0; i < arr.length; i++) {
// //     var a  = arr[arr.length - i - 1];
// //     break;
// // }
// // console.log(a);


let b = document.getElementById('input1');

// Click handler to display values in the input space
function handleclick(a) {
    b.value += a;
}

// Clear input
function handleremove() {
    b.value = '';
}

// Get the operator and numbers from input
function extractNumbersAndOperator(input) {
    let numbers = input.match(/\d+(\.\d+)?/g);  // Matches both integers and floats
    let operator = input.match(/[+\-*/]/g);
    
    if (numbers && operator) {
        return { num1: parseFloat(numbers[0]), num2: parseFloat(numbers[1]), operator: operator[0] };
    }
    return null;  // Invalid input
}

// Calculation functions
function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mutli(num1, num2) {
    return num1 * num2;
}

function divi(num1, num2) {
    return num2 === 0 ? 'Error: Div by 0' : num1 / num2;
}

// Result handler
function handleresult() {
    let input = b.value;
    let { num1, num2, operator } = extractNumbersAndOperator(input);
    
    if (operator) {
        let result;
        switch (operator) {
            case '+':
                result = add(num1, num2);
                break;
            case '-':
                result = sub(num1, num2);
                break;
            case '*':
                result = mutli(num1, num2);
                break;
            case '/':
                result = divi(num1, num2);
                break;
            default:
                result = 'Invalid operator';
        }
        b.value = result;
    }
}


// {/* <input type="text" id="input1" readonly> <!-- input space -->
// <button onclick="handleclick('1')">1</button>
// <button onclick="handleclick('2')">2</button>
// <button onclick="handleclick('+')">+</button>
// <button onclick="handleremove()">Clear</button>
// <button onclick="handleresult()">=</button> */}
