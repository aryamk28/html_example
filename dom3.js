//getElementsByCSSSelector

let a = document.querySelectorAll(".hclass");
console.log(a);
a[0].innerHTML = "CSS";
a[1].style.color = "green";
a[2].style.background = "gray";
a[2].style.color = "white";

let b = document.querySelectorAll("#head2");//we must always give # or . while defining the class or id within the brackets
console.log(b);
b[0].style.color = "blue";