

console.log('LOOPS');
//for loop
console.log("FOR LOOP");

for (let i = 1; i <= 5; i++) {
    console.log("Number=" + i);
};

console.log("---------------------------------------------------------------");

//while loop
console.log("WHILE LOOP");

let count = 0;
while (count <= 9) {
    console.log("Count=" + count);
    count++;
};

console.log("---------------------------------------------------------------");

//do..while loop

console.log("DO WHILE LOOP (TRUE CASE)");

let num = 1;
do {
    console.log("Number is:" + num);
    num++;
} while (num <= 3);

console.log("---------------------------------------------------------------");


console.log("DO WHILE LOOP (FALSE CASE)");

let Num = 5;
do {
    console.log("Number is:" + Num);
    Num++;
} while (Num <= 3);//only 5 is printed because the while condition becomes false

console.log("---------------------------------------------------------------");

//string

let str = "Arya";
console.log("String : " + str);//printing the string
console.log("Length : " + str.length);//printing the length of the string
console.log("First Letter : " + str[0]);//printing charactes at a particular position
console.log("Second Letter : " + str[1]);
console.log("Third Letter : " + str[2]);
console.log("Fourth Letter : " + str[3]);

console.log("---------------------------------------------------------------");

let mes = "JaVaScRiPt ";
console.log("Original form : " + mes);
console.log("Uppercase form : " + mes.toUpperCase());
console.log("Uppercase form : " + mes.toLowerCase());
console.log("Does it include 'is' : " + mes.includes("is"));//check whether the given letters are included in the word 
console.log("Trimmed version : " + mes.trim());//to remove the space at the beginning and at the end
console.log("Sliced version(0,4) : " + mes.slice(0, 4));
console.log("Sliced version(4,10) : " + mes.slice(4, 10));//remove the letters except the ones between the given limit 
console.log("CharAt 0: " + mes.charAt(0));//prints the character at the given position
console.log("CharAt 1: " + mes.charAt(1));
console.log("CharAt 2: " + mes.charAt(2));
console.log("CharAt 3: " + mes.charAt(3));
console.log("CharAt 4: " + mes.charAt(4));
console.log("CharAt 5: " + mes.charAt(5));
console.log("CharAt 6: " + mes.charAt(6));
console.log("CharAt 7: " + mes.charAt(7));
console.log("CharAt 8: " + mes.charAt(8));
console.log("CharAt 9: " + mes.charAt(9));
let a = "Java";
let b = "Script";
console.log("a=Java");
console.log("b=Script")
let Concatenation = a + " " + b;
console.log("Concatenation(a+b):" + Concatenation);

console.log("---------------------------------------------------------------");

//template iterals-given within back ticks

console.log("TEMPLATE ITERALS");
let x = "Arya";
let y = "Java";
console.log(`Hello my name is ${x} and I am learing ${y}`);

console.log("---------------------------------------------------------------");

let poem = `Roses are Red,
Violets are Blue,
JavaScript is Fun,
And so are You`;
console.log(poem);

console.log("---------------------------------------------------------------");

console.log("ARRAYS");

let fruits = ["Apple", "Orange", "Grapes", "Banana"]
console.log("Fruits: " + fruits);
console.log("Fruit at 0: " + fruits[0]);
console.log("Fruit at 1: " + fruits[1]);
console.log("Fruit at 2: " + fruits[2]);
console.log("Fruit at 3: " + fruits[3]);
console.log("Length: " + fruits.length);
console.log("Position of Grapes : " + fruits.indexOf("Grapes"));

console.log("---------------------------------------------------------------");

let number = [1, 2, 3];
console.log("Number: " + number);
number.push(4);//push - to add a number at the end
console.log("After push: " + number);
number.pop();//pop - to remove a number from the end
console.log("After pop: " + number);
number.shift();//shift - to remove the number at the beginning
console.log("After shift: " + number);
number.unshift(4);//unshift - to add a number at the beginning
console.log("After unshift: " + number);
let double = number.map(n => n * 2);
console.log("2 Times: " + double);
let triple = number.map(n => n * 3);
console.log("3 Times: " + triple);
let found = number.find(n => n > 1);
console.log(found);

let p = [1, 2, 3];
let q = [4, 5];
console.log("Concatenation of array : " + p.concat(q));

let fruit = ["Kiwi", "Mango", "Pear", "Watermelon"];
let newfruit = fruit.slice(1, 3);//slice in array remove the element at the given position in the bracket
console.log(newfruit);
console.log(fruit);
fruit.splice(1, 1, "Muskmelon");//from index 1 remove one element and add the element given within the bracket
console.log(fruit);
fruit.splice(2, 2, "Mango");//from index 2 remove two element and add the element given within the bracket
console.log(fruit);
fruit.reverse();//to reverse the order of the array given
console.log(fruit);
fruit.sort();//to sort the elements in alphabetical order
console.log(fruit);
console.log(fruit.join(","));//to convert array to string

console.log("---------------------------------------------------------------");


//question answers

//q1

let arr = ["Red", "Green", "Blue"];
console.log(arr);
arr.push("Yellow");
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift("Black");
console.log(arr);
arr.shift();
console.log(arr);

console.log("---------------------------------------------------------------");

//q2

let arr1 = [2, 4, 6, 8];
console.log(arr1);
let four = arr1.map(n => n * 4);
console.log(four);
let greater = arr1.find(n => n > 5);
console.log(greater);

console.log("---------------------------------------------------------------");

//q3

let arr2 = [10, 20];
console.log(arr2);
let arr3 = [30, 40];
console.log(arr3);
let arr4 = arr2.concat(arr3);
console.log(arr4);
let new1 = arr4.slice(0, 2);
console.log(new1);

console.log("---------------------------------------------------------------");

//q4

let arr6 = ["Apple", "Mango", "Orange"];
console.log(arr6);
arr6.splice(1, 1, "Grapes");
console.log(arr6);
arr6.reverse();
console.log(arr6);
arr6.sort();
console.log(arr6);

console.log("---------------------------------------------------------------");

//q5

let arr7 = ["HTML", "CSS", "Javascript"];
console.log(arr7);
console.log(arr7.join("-"));
arr7.push("React");
console.log(arr7);
arr7.sort();
console.log(arr7);