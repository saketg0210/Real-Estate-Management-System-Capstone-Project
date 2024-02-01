function myFunction() {
    var btn = document.getElementById("showbtn");
    btn.style.borderColor = "transparent"
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  //agents

  function flipCard(button) {
    var card = button.closest('.flip-card');
    card.classList.toggle('flipped');
}

//features

$(".slider").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000, 
  autoplayHoverPause: true,
});

function salefun()
{
  alert("Login or Sigin to access the Web-site")
}
function sub(){
  // var x=document.getElementById("sub");
  //  x.innerHTML="YOUR QUERY AS BEEN SUBMITTED THANKYOU"
  alert("your quer has been submitted")
}


// scroll starts
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction1()};

function scrollFunction1() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction1() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}