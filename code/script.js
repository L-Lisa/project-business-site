/*// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
  this.classList.toggle("active")
}

Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle
*/


const btn = document.getElementById("menu_button");

function toggleDrinkMenu() {
    this
        .classList
        .toggle('open')
}
btn.onclick = toggleDrinkMenu;

// script for accordion

const accordion = document.getElementsByClassName("dropaccordion");
var i;

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        this
            .classList
            .toggle("active");
        var txt = this.nextElementSibling;
        if (txt.style.display === "block") {
            txt.style.display = "none";
        } else {
            txt.style.display = "block";
        }
    });
}