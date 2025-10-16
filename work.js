//encapsulation 1

class student {
    #marks;
    constructor(marks) {
        this.#marks = marks;
    }
    setMarks(m) {
        if (m <= 0) {
            console.log("Marks cannot be negative")
        }
    }
    getmarks() {
        return this.#marks;
    }
}
const student1 = new student(10);
student1.setMarks(-1);
student1.getmarks();


//abstraction 2

class Vehicle {

    start() {
        console.log("Start method should be implemented by subclass")
    }
}
class Car extends Vehicle {
    start() {
        console.log("Car is starting..");
    }

}
class Bike extends Vehicle {
    start() {
        console.log("Bike is starting..");
    }

}
const myCar = new Car();
const myBike = new Bike();
myCar.start();
myBike.start();




// 3
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    work() {
        console.log("Employee is working")
    }
}
class Manager extends Employee {
    manage() {
        console.log("Manager is managing the team")
    }
}
const employee = new Employee("Jomon", 30000);
const manager = new Manager("Sumesh", 500000)
employee.work();
manager.work();
manager.manage();



//  4

class animal {
    speak() {
        console.log("This makes a noise");
    }
}
class dog extends animal {
    speak() {
        console.log("Dog Barks");
    }
}
class cat extends animal {
    speak() {
        console.log("Cat Meows")
    }
}

const d = new dog();
const c = new cat();
d.speak();
c.speak();