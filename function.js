//functions

console.log("FUNCTIONS");

//function definition

function greet() //anything given between the brackets are called parameters
{
    console.log("Hello Good Morning!");
};

//function call

greet();//anything given between the brackets are called arguments

//function with parameters and arguments

function greetByName(name) {
    console.log("Hello, " + name + " Good Morning!");
};
greetByName("Arya");
greetByName("Vismaya");

console.log("----------------------------------------------------------");

//method-function within an object

console.log("METHOD");

let student = {     //student=objet
    Name: "Arya",
    greet: function () {   //greet=method
        console.log("Hello, My name is " + this.Name)   //this.Name=used to refer to the name
    }
};
student.greet();

console.log("----------------------------------------------------------");


//arrow function


console.log("ARROW FUNCTION")
const greets = (Name) => {
    return "Hello " + Name;
}
console.log(greets("Arya"))

// const greeet = (name1) => {
//     return "Hello " + name1;
// }
// console.log(greeet("Arya"))

console.log("----------------------------------------------------------");


