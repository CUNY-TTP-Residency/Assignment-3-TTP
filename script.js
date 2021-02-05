// 1
document.getElementById("container");

// 2
document.querySelector("#container");

// 3
document.querySelectorAll(".second");

// 4
document.querySelector("ol").getElementsByClassName("third")

// 5
document.getElementsById("container").innerHTML = "Hello!."

// 6
document.getElementsByClassName("footer")[0].classList.add("main");

// 7
document.getElementsByClassName("footer")[0].classList.remove("main");

// 8
const newLI = document.createElement('li');

// 9
newLI.innerHTML = "four";

// 10
document.getElementsByTagName("ul")[0].appendChild(newLI);

// 11
let list = document.getElementsByTagName("ol");
for(let i = 0; i < list.length; i++)
    list[i].style.color = "green";

// 12
document.getElementsByClassName("footer")[0].remove();