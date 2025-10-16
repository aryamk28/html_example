//ex1 of creating classes

class Person { //class creation
    constructor(name, age) { //constructor : special function that automatically runs ; object within class
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello... I am ${this.name} and I am ${this.age} years old..!`);
    }

}

//object creation
const person1 = new Person("Arya", 21);
const person2 = new Person("Vismaya", 20);

//calling method
person1.greet();
person2.greet();
person1.name = "John";
person1.age = 23;
person1.greet();



//ex2

class Car {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    showDetails() {
        console.log(`${this.brand} was made in ${this.year}`);
    }
}


const myCar = new Car("Toyota", 2020);

myCar.showDetails();

//ex3 : Adding methods

class Calculator {

    add(a, b) {
        return a + b;
    }
    multiply(a, b) {
        return a * b;
    }
}

const calc = new Calculator();
console.log(calc.add(10, 5));
console.log(calc.multiply(2, 4));



class Calculator1 {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    add() {
        this.a + this.b;
    }
    multiply() {
        this.a * this.b;
    }
}

const calc1 = new Calculator1(10, 5);
console.log(calc1.add());
console.log(calc1.multiply());
calc1.a = 20;
calc1.b = 10;
console.log(calc1.add());
console.log(calc1.multiply());



