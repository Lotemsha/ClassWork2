"use strict"
// תרגילי כיתה

// let answer = prompt ("What is JS official name?") 

// if (answer === 'ECMAScript')
//   alert('correct!')

// else
//   alert("Dont know? ECMAScript")

// let score = 90;

// let grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F';

// console.log("הציון הוא:", grade);

// let day = prompt("What day is today?")
// // let dayIndex = 
// let infoArray = [
//   "יום ראשון - חזרה לשגרה",
//   "יום שני - ישיבת צוות",
//   "יום שלישי - עבודה על פרויקט",
//   "יום רביעי - ספורט בערב",
//   "יום חמישי - סיום משימות",
//   "יום שישי - קניות לשבת",
//   "שבת - מנוחה"
// ];

// switch (day.toLowerCase()) {
//   case '1':
//   case 'Sunday':
//   case 'ראשון':
//   case 'יום ראשון':
//     console.log(infoArray[0]);
//     break;
//   case '2':
//   case 'Monday':
//   case 'שני':
//   case 'יום שני':
//     console.log(infoArray[1]);
//     break;
//   case '3':
//   case 'Tuesday':
//   case 'שלישי':
//   case 'יום שלישי':
//     console.log(infoArray[2]);
//     break;
//   case '4':
//   case 'Wednesday ':
//   case 'רביעי':
//   case 'יום רביעי':
//     console.log(infoArray[3]);
//     break;
//   case '5':
//   case 'Thursday':
//   case 'חמישי':
//   case 'יום חמישי':
//     console.log(infoArray[4]);
//     break;
//   case '6':
//   case 'Friday ':
//   case 'שישי':
//   case 'יום שישי':
//     console.log(infoArray[5]);
//     break;
//   case '7':
//   case 'Saturday ':
//   case 'שבת':
//   case 'יום שבת':
//     console.log(infoArray[6]);
//     break;
//   default:
//     alert("Wrong input");
// }

// if (day !== undefined) {
//   alert(infoArray[day])
// }

// let i = 1
// let sum = 0
// while (i <= 100) {
//   sum += i++
// }
// console.log(sum)

// let num

// do {
//     num = prompt("Enter a number")
// } while (num <= 0 || isNaN(num));
// console.log(num)

// let i
// let num = 7
// for (i = 1; i <= 10; i++)
// {
//     console.log(`${num} * ${i} = ${num * i}`)
// }

// const secret = '7'
// let answer
// for (; ;) {
//   answer = prompt("Guess the number:")
//   if (answer === secret) {
//     alert("Correct!")
//     break
//   }
// }

// let i
// for (i = 1; i <= 30; i++) {
//   if (i % 3 === 0)
//     continue
//   console.log(i)
// }

// for (i = 1; i <= 10; i++)
//   if (i % 2 === 0)
//     console.log(i)

// for (let i = 0; i < 3; i++) {
//   alert(`number ${i}!`);
// }
// let i = 0
// while (i < 3) {
//   alert(`in ${i}!`)
//   i--
// }

// תרגילי בית
/* Ex 4:
let answer = prompt("Enter a number:")
if (answer > 0)
  alert(1)
else 
  if (answer < 0)
    alert (-1)
  else 
  alert (0)
*/
/*
 // Ex 5:
let result;
let a = 2
let b = 1

// if (a + b < 4) {
//   result = 'Not enough';
// }
// else {
//   result = 'A lot';
// }

a + b < 4 ? result = 'Not enough' : result = 'A lot'
console.log(result)
*/
/*
Ex 6:
let message;
let login = ''

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Hello';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

login == 'Employee' ? message = 'Hello' : login == 'Director' ? message = 'Hello' : login == '' ? message = 'No login' : message = ''

console.log(message)
*/

// Ex 7:
console.log(false || 'sdf') // 'sdf'
console.log(false && ' ') // false
console.log(true || ' ') // true
console.log(true && ' ')
console.log(undefined || null) // null
console.log(undefined || 0 || null) // null
console.log(undefined && 0 && null) // undefined
console.log(1 || 0) // 1
console.log(null || 1) // 1
console.log(null || 0 || 1) //1
