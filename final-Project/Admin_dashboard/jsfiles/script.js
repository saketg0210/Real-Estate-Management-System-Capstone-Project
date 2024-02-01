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