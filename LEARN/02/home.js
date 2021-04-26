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


//Array
let fruits1 = ['banana', 'apple', 'orange','pinapples']; //common way
let fruits = new Array ('banana', 'apple', 'orange','pinapples'); //another way

console.log(fruits[2]);     //access array value at index 2nd

fruits[0] = 'pear';         //changes index 0 to pear

//FOR loops for displaying each index in the array
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//array common methods
console.log('to string', fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits.pop(), fruits);                  //remove last items
console.log(fruits.push('blackberries'), fruits);   //appends new items

//another way to add a new item
//4th location is empty or undefined
fruits[4] = 'new fruit'; //however we can change 4 for "length"
fruits[fruits.length] = 'new fruit2';
console.log(fruits);

//another way to remove is to shift the list, but it is EXPENSIVE
fruits.shift(); //took out first item "pear"
console.log(fruits);

//another way to add but to the fist place item
fruits.unshift('kiwi'); //add item to first place of array
console.log(fruits);

//join two array
let vegetables = ['asparagus', 'tomato', 'brocoli']; //create array
let allGroceries //create array bucket to place multiple array
allGroceries = fruits.concat(vegetables); //join vegetables to fruits
console.log(allGroceries); //display allGroceries in console

//slice array
let sliceArray = allGroceries.slice(1, 4); //at 1st place until 3rd place
console.log(sliceArray);

//reverse array
let reverseArray = allGroceries.reverse();
console.log(reverseArray);

//sort array char
let sortArray = allGroceries.sort(); //alphabetical sort
console.log(sortArray);

//sort array numbers
let someNumbers = [15 , 10, 30, 20, 24, 405, 56, 60, 59]; //create number array
//acending order
let sortArray2 = someNumbers.sort(function (a,b){return a-b}); //compare a to b sort acending
console.log(sortArray2)
//decending order
let sortArray3 = someNumbers.sort(function (a,b){return b-a}); //compare a to b sort decending
console.log(sortArray3) 

//create empty array and use for loop to populated it
let emptyArray = new Array(); //create empty array
for (let num = 0; num <10; num++) //num is index, loop 10 times
{ 
emptyArray.push('item ' + num);   // create new item 
};
console.log(emptyArray) // show new fullArray



//object in Javascript

let student = { 
        first: 'martin', 
        last: 'Fernandez', 
        age: 30, 
        height:180,
        //gives first and last in new lines
        studentInfo: function(){ 
                return this.first + '\n' + this.last; 
                }
        };
console.log(student.first); //method one
console.log(student['first']); //method two
console.log(student.last);
student.first = 'Martini'; //change value
console.log(student.first);
student.age++ //increment
console.log(student.age);
console.log(student.studentInfo());



//conditionals, control flows (if else)
// 18-35 is my target demographic
// && = AND
// || = OR

let age = prompt('what is your age?');

if ( (age >= 18) && (age <= 35) ) {
    status = 'target demo';
    console.log(status);
} else {
    status = 'not my audience';
    console.log(status);
};

*/


// Switch statements
// differentiate between weekday vs. weekend
// day 0 --> Sunday    --> weekend
// day 1 --> Monday    --> weekday
// day 2 --> Tuesday   --> weekday
// day 3 --> Wednesday --> weekday
// day 4 --> Thrusday  --> weekday
// day 5 --> Friday    --> weekday
// day 6 --> Saturday  --> weekend


switch (6){
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        
    default:
        text = 'weekday';
        break;
}

console.log(text);










