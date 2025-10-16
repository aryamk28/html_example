//EgmaScript2015

//var - function scope

function greet() {
    var message = "hello"
    console.log(message);
}
greet();
// console.log(message);

//Redeclaration

var city = "delhi";
var city = "mumbai";
city = "pune";   //Re-assign
console.log(city);

// let - block scoped
{
    let fruit = "mango";
    console.log(fruit);
}
// console.log(fruit);

//Re-Assign : we cannot Re-declare(using 'let') but we can re-assign

let name = "ram";
console.log(name);
name = "kumar";
console.log(name);

//const - block scoped

const country = "india";//in const once declared it cannot be re initialised
// country = "usa";
console.log(country);

const person = {
    name: "arya",
    age: 21,
}
person.age = 23; //we can modify the content by using object or array
console.log(person);


//Global scope - we can access them from anywhere in the program

var globalVar = "I am global";
function show() {
    console.log(globalVar);
}
show();
console.log(globalVar);// global scope - variable declared outside the function (Applicable to var, let, const)

//default parameters
//normal function

function greet() {//parameters are given here
    console.log("Hello");
}
greet();//arguments are given here

//default parameter
function greets(name1 = "guest") {
    console.log("hello " + name1)
}
greets();

//multiple parameters

function add(a = 5, b = 10, c = 20) {
    console.log(a + b + c);
}
add();

//traditional function
function add1(a, b) {
    return a + b;
}

//arrow function

const add2 = (a, b) => a + b;

//simple function

const sayHello = () => console.log("Good Morning");
sayHello();

//simple function with one parameter

const greeet = name3 => console.log("hi " + name3);
greeet("Arya");

//with multiple parameter

const multiply = (a, b, c) => a * b * c;
console.log(multiply(2, 3, 4));

//with multiple statements

const area = (l, b) => {
    let result = l * b;
    return result;
}
console.log(area(3, 4));


//template literals -- updated version of string -- we can create multiple line strings

//inserting variables
let name4 = "Arun";
console.log(`Hello ${name4}, welcome to this page..!`);

//expression inside ${}
let a = 10;
let b = 20;
console.log(`Sum of ${a} and ${b} is ${a + b}`);

//multi-line string
let mess = `Hello World,
Welcome to ES6 session...!
Let's learn TEMPLATE LITERALS`;
console.log(mess);

//ternary operator
let age = 12;
let message = age >= 18 ? "You are adult" : "You are minor";
console.log(message);

//nested ternary -- (if-else :shortform)
let marks = 85;
let grade = marks > 90 ? "A+" : marks > 75 ? "A" : "B";
console.log(grade);

//object destructing
const user6 = { name5: "rahul", age1: 22, city: "kochi" }
const { name5, age1 } = user6;
console.log(name5);
console.log(age1);



//rename variable
const user0 = { name9: "arya", age5: 21 }
const { name9: userName2, age5: DOB } = user0;
console.log(userName2);
console.log(DOB);


//default values
const user5 = { name8: "Arya", age: 24, city: "kannur" };
const { country1 = "india" } = user5;
console.log(country1);


//missing property wih default values
const student = { name7: "rahul", age6: 23 };
const { name7, course = "JAVA" } = student;
console.log(name7);
console.log(course);

//property present => default:ignored
const student1 = { name8: "arya", course1: "java" };
const { course1 = "mern" } = student1;//this is ignored
console.log(course1);

//muliple default values(together)
const user2 = { userName: "arjun" };
const { userName, role = "student", country3 = "india" } = user2;
console.log(userName);
console.log(role);
console.log(country3);

//nested object with default values
const user10 = { name7: "Riya", address2: { city7: "chennai" } };
const { address2: { city7, pin = 90756 } } = user10;
console.log(city7);
console.log(pin);


