
function register(){
    var first_name=document.getElementById('first_name').value
    var last_name=document.getElementById('last_name').value
    var email=document.getElementById('email').value
    var password=document.getElementById('password').value
    var confirm_password=document.getElementById('confirm_Password').value
    if(password===confirm_password){
    fetch('http://localhost:3000/registeruser',{
        method:"POST",
        body:JSON.stringify({
            First_Name:first_name,
            last_name:last_name,
            email:email,
            password:password,
            confirm_password:confirm_password
        }),
        headers:{
            "content-Type":"application/json"
        }
    })
    var tag=document.getElementsByClassName('span');
    for(var i=0;i<tag.length;i++){
        tag[i].innerText=``
        tag[i].style.color=``
    }
    setTimeout(delays,2000)
    function delays(){
        window.location.href='../hmtlfiles/login.html';
    }

}else{
    var tag=document.getElementsByClassName('span');
    for(var i=0;i<tag.length;i++){
        tag[i].innerText=`Miss match Password!!`
        tag[i].style.color=`red`
    }
}
    event.preventDefault();
   
}
