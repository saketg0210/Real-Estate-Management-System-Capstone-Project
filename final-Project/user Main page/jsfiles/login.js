
function login() {
    var username = document.getElementById('Username1').value;
    var Password1 = document.getElementById('Password1').value;
    var mobile=document.getElementById('mobile').value
    var users = fetch('http://localhost:3000/registeruser');
    users.then(res => res.json()).then(res => {
        var count=0;
        for (let i = 0; i < res.length; i++) {
            let vs = res[i].email;
            let xs = res[i].password;
            if (vs == username && xs == Password1) {
                count = 1;
                window.localStorage.setItem('name',username)
                window.localStorage.setItem('phone',mobile)
                window.location.href = '../hmtlfiles/index.html';

            }
        }
        if (count != 1) {
            document.getElementById('span').innerText = `Enter Valid Credentials!!`;
        }
    
    });
    event.preventDefault();
}
function removes(){
    localStorage.clear()
}
document.getElementById('urs').innerText=localStorage.getItem('name')
document.getElementById('phone').innerText=localStorage.getItem('phone')


// document.getElementById('urs').innerText=dashusername;
