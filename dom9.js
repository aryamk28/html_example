//array destructuring--unpacking arrays and assigning the values to seperate variables

const colors = ["Red", "Green", "Blue"];
const [third, second, first] = colors;
console.log(third);
console.log(second);
console.log(first);
const [third3, first1, second2] = colors;
console.log(first1);
console.log(second2);
console.log(third3);

//how to skip an element(uses coma to skip)

const number = [10, 20, 30, 40];
const [a, , c] = number;
console.log(a);
console.log(c);
// console.log(b);--error will be displayed because "b" is not defined

//default values

const fruit = ["Apple"];
const [fruit1, fruit2 = "Orange"] = fruit;
console.log(fruit1);
console.log(fruit2);

//swap variable

let x = 10;
let y = 20;
[x, y] = [y, x];
console.log(x, y);

//nested array destructing

const arr = [1, [2, 3]];
const [p, [q, r]] = arr;
console.log(p, q, r);

//default parameter

function greet(name = "Guest") {
    console.log("Hello " + name);
}
greet();
greet("Rahul");

//spread operator(...)--used to expand array variables

//combined array

const arr1 = [1, 2];
console.log(arr1);
const arr2 = [3, 4];
console.log(arr2);
const combined = [...arr1, ...arr2];
console.log(combined);

//copy array

const original = [10, 20, 30, 40];
const copy = [...original];
console.log(copy);

//function call - spread

const num = [5, 10, 30];
console.log(Math.max(...num));

//rest parameters(...)

function sum(...numbers) {
    return numbers.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3));
console.log(sum(4, 5, 6));

//array methods

//1. forEach()
const fruits = ["Apple", "Orange", "Mango"];
fruits.forEach(fruit => console.log(fruits));

//2. Map()
const numbers1 = [1, 2, 3];
console.log(numbers1);
const doubled = numbers1.map(num => num * 2);
console.log(doubled);

//3. filter()
const age = [15, 22, 37, 10];
const adult = age.filter(age => age >= 18);
console.log(adult);

//4. reduce()
const numb = [10, 20, 30];
const total = numb.reduce((sum, numb) => sum + numb);
console.log(total);

//5. find()
const users = [
    { id: 1, name1: "Rahul" },
    { id: 2, name1: "Riya" }
];
console.log(users);
const user = users.find(u => u.id == 2);
console.log(user.name1);

//6. findIndex()
const number2 = [10, 20, 30, 40, 50];
const index = number2.findIndex(n => n === 30);
console.log(index);

//7. some()
const marks = [35, 57, 75];
console.log(marks.some(m => m > 70));

//8. every()
const mark = [50, 70, 75];
console.log(mark.every(m => m >= 60));

//9. includes()
const fruits1 = ["Apple", "Orange", "Mango"];
console.log(fruits1.includes("Banana"));



