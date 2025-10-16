//getElementsByName

// a = document.getElementsByName("text")[0];
// console.log(a);

// let b = document.getElementsByClassName("head");
// console.log(b);


var c = document.getElementsByName("text")[0];
var d = document.getElementById("head");

function message() {
    d.innerText = "Hello " + c.value;
}