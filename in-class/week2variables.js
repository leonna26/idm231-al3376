// you can comment on javascript using double slash 
/* or you can comment with slash asterisk */

const firstName = 'Anna';
const lastName = 'Leong';
const fullName = firstName + '' + lastName;
// you can do const fullName = `${firstName} ${lastName}`;

console.group('My Name Info');
console.log(firstName);
console.log(lastName);
console.log(fullName);
console.groupEnd('My Name Info');

const mySwitch = null;

let i = 1;
i ++;
console.log(i);

const myArray = ['one', 2, 'shells'];
console.log(myArray);
console.log(myArray.length);

const name = 'Anna';
console.log(name.length);

console.log(myArray[2]);
myArray[2] = 'something long like this';

myArray.push('hot dogs');
console.log('myArray:'.myArray);

let arrayOne = ['1','2','3'];


const colors = ['red', 'yellow','blue', 'green', 'purple'];
//log the third color in the list: blue
console.log(colors[3]);

//log the total number of items in the array
console.log(colors.length);

const idm = 'idm231';
console.log(idm);

const a = 13;
const b = 22;
const c = a * b;
console.log(c);

//two options:  
console.log('const a = '+ a + 'and const b = ' + b); 
//is the same as:
console.log(`const a = ${a} and const b = ${b}`);





