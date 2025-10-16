// console.log("DOM");//javascript document object model - used to access html elements
// let a = document.getElementById("head1");
// console.log(a);
// a.innerHTML = "Learning Javascript";
// a.style.color = "Pink";
// a.style.fontFamily = "Arial";

//getElementById

const decreasebtn = document.getElementById("decreasebtn");


const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");

const countLabel = document.getElementById("countLabel");
let count = 0;

increasebtn.onclick = function () {
    count++;
    countLabel.textContent = count;
}
decreasebtn.onclick = function () {
    count--;
    countLabel.textContent = count;
}
resetbtn.onclick = function () {
    count = 0;
    countLabel.textContent = count;
}