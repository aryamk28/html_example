//getElementByTagName

let a = document.getElementsByTagName("p");
a[0].innerHTML = "changed para";
a[0].style.color = "green";
console.log(a);

let b = document.getElementsByClassName("head1");
console.log(b);
b[0].innerHTML = "Good Night";
let c = document.getElementsByTagName("h2");
console.log(c);
c[0].innerHTML = "Hello";

