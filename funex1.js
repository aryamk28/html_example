//function qa

//Q1:

function welcomeMessage() {
    console.log("Welcome to our Website!");
}
welcomeMessage();
welcomeMessage();

console.log("-----------------------------------------------")

// function printDate() {
//     const today = new Date();
//     const day = today.getDate();
//     const month = today.getMonth();
//     const year = today.getFullYear();
//     console.log(`${day}/${month}/${year}`)
// }
// printDate();

//Q2:

console.log((new Date));

console.log("-----------------------------------------------")

//Q3:

function greetUser(name) {
    console.log("Hello, " + name + "!");

}
greetUser("Arya");
greetUser("Vismaya");
greetUser("Rahul");

console.log("-----------------------------------------------")

//Q4:

function calculateArea(length, width) {
    area = length * width;
    console.log("area= " + area);
}
calculateArea(10, 5);

console.log("-----------------------------------------------")

//Q5:

function displayMarks(marks, subject) {
    console.log("You scored, " + marks + " in " + subject + " !");
}
displayMarks(32, "English");


console.log("-----------------------------------------------")

//Q6:

function add(a, b) {
    return a + b;
};
const result = add(4, 5);
console.log(result);

console.log("-----------------------------------------------")

//Q7:

function findSquare(num) {
    return num * num;
};
const square = findSquare(4);
console.log(square);

console.log("-----------------------------------------------")

//Q8:

function isAdult(age) {
    if (age >= 18)
        return true
    else
        return false

};
const person = isAdult(11);
console.log(person);

console.log("-----------------------------------------------")

//Q11

const substract = (n1, n2) => {
    return n1 - n2;
}
console.log(substract(3, 2));

console.log("-----------------------------------------------")

//Q11



//Q17:

function calculateGrade(marks) {
    if (marks >= 40)
        return true
    else
        return false

}
const grade = calculateGrade(41);
if (true)
    console.log("Passed");
else
    console.log("Failed");

console.log("-----------------------------------------------")

//Q18