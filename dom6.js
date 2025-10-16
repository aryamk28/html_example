//inheritance

//parent class

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise`);
    }
}

//child class

class Dog extends Animal {
    bark() {
        console.log(`${this.name} barks`);
    }
}

const dog = new Dog("Tommy");
dog.speak();
dog.bark();





//using super()   -- To call parent class's constructor

class Vehicle {
    constructor(type) {
        this.type = type;
    }
    start() {
        console.log(`${this.type} is starting`);
    }
}

class Car extends Vehicle {
    constructor(type, brand) {
        super(type);
        this.brand = brand;
    }
    details() {
        console.log(`This is a ${this.brand} ${this.type}`);
    }
    start() {
        super.start();
        console.log(`${this.brand} is ready to go.`);
    }
}
const car = new Car("Car", "Toyota");
car.details();
car.start();





//single inheitance

class Animals { //parent class
    eat() {
        console.log("Eating....");
    }
}
class Dogs extends Animals { //child class
    bark() {
        console.log("Barking.....")
    }
}
const dogs = new Dogs();
dogs.eat();//inherited
dogs.bark();//owned





//Multilevel Inheritance

class LivingThing {  //class 1
    breathing() {
        console.log("Breathing...");
    }
}
class Dog1 extends LivingThing {   //class 2
    barks() {
        console.log("Barking.....");
    }

}
class birds extends Dog1 {   //class3
    chirp() {
        console.log("Chirping...");
    }
}
const bird = new birds();
bird.breathing();  //inherited from living beings
bird.barks;  //inherited from animal
bird.chirp();  //own method 




//heirarchical inheritance

class veh {     //parent class
    start() {
        console.log("Vehicle started");
    }
}
class cars extends veh {  //child class 1
    drive() {
        console.log("Car is driving");
    }
}
class bike extends veh {  //child class 2
    ride() {
        console.log("Bike is riding");
    }
}
const car1 = new cars();
car1.start();
car1.drive();

const bike1 = new bike();
bike1.start();
bike1.ride();


