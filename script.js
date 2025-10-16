//variable
//var functionally scoped
var a = 10;
console.log(a);

var fullname = "Rahul";
fullname = "Arun";
console.log(fullname);

// let globally scoped
let fullName = "Sneha";
fullName = "Sneha K";
console.log(fullName);

//const globally scoped
const isStudent = true;
console.log(isStudent);

let city = "Banglore";
console.log(city);

city = "Chennai";//updated value
console.log(city);

//Datatype

//String
let name = "Rahul";

//number
let age = 25;

//Boolean
let isPassed = true;

//Undefined
let address;

//Null (absense of object and since typeof null is object)
let mark = null;

//BigInt
let x = BigInt("123");

let person = {
    Name: "Rahul",
    Age: 35,
};

//Array
let fruits = ["apple", "mango"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);

let phone = {
    Brand: "Samsung",
    Model: "S24",
    Price: 50000,
    Rating: 4,
}

let student = {
    studentname: "Arya",
    age: 21,
    grade: "A",
    isPassed: true,
}
console.log(student.age);


