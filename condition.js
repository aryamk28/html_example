//conditional operators

console.log("CONDITIONAL OPERATORS");
//if statement
console.log("IF-STATEMENT");
console.log("Age=20");
console.log("if age>18 : Adult");
let age = 20;
if (age >= 18) {
    console.log("You are an Adult");
}
//if-else statement
console.log("IF-ELSE STATEMENT");
console.log("Age=10");
console.log("if age>18 : Adult else : Minor");
let Age = 10;
if (Age >= 18) {
    console.log("You are an Adult");
} else {
    console.log("You are a Minor")
}
//if-else statement
console.log("IF-ELSE- IF-ELSE STATEMENT");

console.log("if Marks>=90 : GRADE-A else-if Marks>=75 : GRADE-B else : GRADE-C");
console.log("Marks=85");
let Mark = 85;
if (Mark >= 90) {
    console.log("GRADE-A");
} else if (Mark >= 75) {
    console.log("GRADE-B");
}
else {
    console.log("GRADE-C");
}
//SWITCH statement
console.log("SWITCH STATEMENT");

console.log("1: SUNDAY 2: MONDAY 3: TUESDAY 4: WEDNESDAY 5: THURSDAY 6: FRIDAY 7: SATURDAY OTHER: INVALID INPUT");
console.log("DAY=3");
let day = 3;
switch (day) {
    case 1: console.log("SUNDAY");
        break;
    case 2: console.log("MONDAY");
        break;
    case 3: console.log("TUESDAY");
        break;
    case 4: console.log("WEDNESDAY");
        break;
    case 5: console.log("THURSDAY");
        break;
    case 6: console.log("FRIDAY");
        break;
    case 7: console.log("SATURDAY");
        break;
    default: console.log("INVALID INPUT")
}