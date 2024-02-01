const navbar = document.getElementById("myTopnav");

function setColor() {
 if (window.scrollY > 20) {
    navbar.style.backgroundColor = 'rgba(9, 23, 44, 0.8)';
 } else {
    navbar.style.backgroundColor = "black";
 }
}

window.addEventListener("scroll", setColor);

function myFunction() {
  var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  