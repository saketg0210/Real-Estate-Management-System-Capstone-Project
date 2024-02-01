// Heart toggle
const colorChangeBtns= document.querySelectorAll('.svgs');
const cardbtn = document.querySelectorAll(".card-button");
colorChangeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Toggle the 'active' class to change color on click
      this.classList.toggle('active');
    });
});
cardbtn.forEach(btn => {
    btn.addEventListener('click', function() {
      // Toggle the 'active' class to change color on click
      this.classList.toggle('Onchange');
    });
});
// Navbar

//     window.onscroll = function() { scrollFunction() };
//     function scrollFunction() {
//       var navbar = document.getElementById("navbar");
//       // Add background color when scrolling down
//       if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//           navbar.style.backgroundImage = ' linear-gradient(4deg,white,blue)';
//       } else {
//         // Remove background color when scrolling up
//         navbar.style.backgroundImage = '';
//         navbar.style.backgroundColor = "transparent";
//       }
// };
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
    