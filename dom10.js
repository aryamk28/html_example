//synchronous--line by line
console.log("Task-1");
console.log("Task-2");
console.log("Task-3");

//asynchronous--runs in background--javascript code does not wait for this
console.log("Task-1");
setTimeout(() => {
    console.log("Task-2");//delayed by two seconds using setTimeout()
}, 2000);//2000 means 2 seconds delayed
console.log("Task-3");

//promise--it is an object--represent a future value--after sometime--3 states
const oredrPizza = new Promise((resolve, reject) => {
    let pizzaReady = false;
    if (pizzaReady) {
        resolve("Pizza is ready");
    } else {
        reject("Sorry, Pizza is not ready");
    }
});
oredrPizza
    .then((message) => console.log(message))//resolve
    .catch((error) => console.log(error));//reject
//pending--still waiting
//reject--something went wrong
//fulfilled--resolved

//async and await--keywords--promise is used to work--used to write code asychronously and looks like synchronous--makes debugging easy

//async--returns a promise
async function greet() {
    return "Hello!"
}
greet().then(msg => console.log(msg));

//await--written within async
async function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched sucessfully")
        }, 5000);
    })
}
async function fetchData() {
    console.log("Data fetching....");
    console.log("Task completed");
    const result = await getData();
    console.log(result);
}
fetchData();