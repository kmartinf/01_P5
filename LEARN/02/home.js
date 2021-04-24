/*
//print something in the Browser Console
console.log('hello');


//Alert message in the Browser 
alert('hello this is Martin');


//print a variable/string in the Browser Console
var b = 'smoothie';
console.log(b);


//print a variable/number in the Browswer Console
var someNumber = 45;
console.log(someNumber);


//Prompt a question to the user and save it in "age"
var age = prompt('what is your age?');
//Access a DOM element in HTML and assigns it the "age"
document.getElementById('someText').innerHTML = age;


//number in javascript
var num1 = 5.7;
console.log(5*10);


//declare variable
var num1;


//assign value to variable
num1 = 1;


//increment and decrement number by one 
num1++;
num1--;


//increment by 10
num1 += 10;


//how to create and call Functions
//create function
function fun() {}
//call function
fun();


//function with Prompt and Concatinating strings
function greetings(yourName){
    var welcome = 'hello' + ' ' + yourName;
    console.log(welcome); }
//prompt questions, save it, and pass it into the function
var name = prompt ('what is your name?');
greetings(name);


//While loops
var num = 0;
while (num < 100){
    num +=1;
    console.log(num);
}


// For loops
var num = 0;
for (let num = 0; num <= 100; num++){
    console.log(num);
}


//Variables type
var old;  // old way
let temp; // temporary
const pi; // not changeable


//Data types
let yourAge = 19;                                   //number
let yourName = 'Martin';                            //string
let name = {first: 'Martin', last: 'Fernandez'};    //object
let truth = false;                                  //boolean
let groceries = ['apple', 'banana', 'oranges'];     //array
let random;                                         //undefined
let nothing = null;                                 //value null


//Strings in Javascripts (common methods)
let fruit = 'banana';
let moreFruits = 'banana\napple';           //new line "/n"

console.log(fruit.length);                  //string length
console.log(fruit.indexOf('n'));            //string index
console.log(fruit.slice(2,6));              //string divide
console.log(fruit.replace('ban','123'));    //string replace
console.log(fruit.toLocaleUpperCase());     //string uppercase
console.log(fruit.toLocaleLowerCase());     //string lowercase
console.log(fruit.charAt(2));               //string char index 2 "n"
console.log(fruit[2]);                      //string object index 2 "n"
console.log(fruit.split(''));               //split at char gives array
console.log(fruit.split(','));              //split at comma gives array
*/

//Array
let fruits = ['banana', 'apple', 'orange','pinapples']; //common way
/*let*/ fruits = new Array ('banana', 'apple', 'orange','pinapples'); //another way

console.log(fruits[2]);     //access array value at index 2nd

fruits[0] = 'pear';         //changes index 0 to pear

//FOR loops for displaying each index in the array
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}





