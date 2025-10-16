//abstraction  -- need not know what is happening inside private methods are used

class CoffeMachine {
    constructor(brand) {
        this.brand = brand;
    }
    start() {
        this.#boilWater();
        this.#brewCoffee();
        console.log(`${this.brand} coffee is ready..!`);
    }
    #boilWater() {
        console.log("Water Boiling");
    }
    #brewCoffee() {
        console.log("Brewing Coffee");
    }
}
const myCoffee = new CoffeMachine("Nespresso");
myCoffee.start();

