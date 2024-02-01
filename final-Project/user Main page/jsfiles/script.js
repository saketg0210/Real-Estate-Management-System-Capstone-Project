
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
// profile starts


var inner_element=document.getElementsByClassName('profile')[0];
var element = document.getElementById('profilepic');
element.addEventListener('click',()=>{
    var displays=inner_element.classList.toggle('check')
   if(!displays){
    inner_element.style.display='none'
   }else{
    inner_element.style.display='block';
   }
});


// profile ends


// favurite starts
var count=1;
 function addtofavurite(msz1,msz2,msz3){
  let row=document.getElementById('fav-table')
    row.innerHTML+=`
    <tr>
    <td>${count++}</td>
    <td>${msz1}</td>
    <td>${msz2}</td>
    <td>${msz3}</td>
    </tr>
    `
  alert(`${msz1} is added successfully to the favourite.`)
 } 

// favurite ends

// feedback
function feddback(){
 var feedback= document.getElementsByTagName('textarea')[0].value
    alert('feedback Submited successfully..')
    document.getElementById('feed').innerText=feedback;
    document.getElementById('thnx').innerText='Thank you for your feedback'
}

// scrollbtn
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