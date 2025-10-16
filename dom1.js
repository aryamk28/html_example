//get element by class name

var a = document.getElementsByClassName("head1");
console.log(a);
a[0].innerText = "Good Morning Learn JavaScript";
a[1].style.color = "blue";

var b = document.getElementsByClassName("head2");
console.log(b);
b[0].textContent = "Welcome";
b[1].style.color = "green";