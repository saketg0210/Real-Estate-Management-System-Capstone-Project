function removeRow(button) {
    console.log(button);
    var row = button.parentNode.parentNode;
    document.getElementById("tb-data").deleteRow(row.rowIndex);
}
function submitForm() {
    // Get form data
    var image = document.getElementById("image").value;
    var title = document.getElementById("title1").value;
    var price = document.getElementById("price1").value;
    var details = document.getElementById("details").value;
    var location = document.getElementById("location").value;
    //append data to table
    if (image == "" || title === "" || price === "" || details === "" || location === "") {
        alert("kindly fill the form");
    } else {
        var html = "";
        html = `<tr>
<td>`+ image + `</td>
<td>`+ title + `</td>
<td>`+ price + `</td>
<td>`+ details + `</td>
<td>`+ location + `<td><button class="btn btn-danger" onclick="removeRow(this)">Remove</button></td>
</tr>`;
        var table = document.getElementById('result').innerHTML += html;
        document.getElementById("image").value = "";
        document.getElementById("title1").value = "";
        document.getElementById("price1").value = "";
        document.getElementById("details").value = "";
        document.getElementById("location").value = "";

    }
    // preview
    var preview = document.getElementById('preview');
    console.log(preview);
    preview.style.display = 'block';
    var preview_image = document.getElementById("p-image");
    var preview_title = document.getElementById("p-title");
    var preview_price = document.getElementById("p-price");
    var preview_details = document.getElementById("p-details");
    var preview_location = document.getElementById("p-location");
    // set preview values
    preview_image.src = image;
    preview_title.innerHTML = title;
    preview_price.innerHTML = price;
    preview_details.innerHTML = details;
    preview_location.innerHTML = location;
    //json object
    var formData = {
        image: image,
        title: title,
        price: price,
        details: details,
        locnation: location
    };
    // Send data to a JSON API (replace URL with your actual API endpoint)
    // var apiUrl = "http://localhost:3000/data";
    // fetch(apiUrl, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    // })
    //     .then(response => response.json())
    //     .then(data => {
    // Handle the API response if needed
    //             console.log('Success:', data);
    //         })
    //         .catch((error) => {
    //             console.error('Error:', error);
    //         });
}
// show table data
function showData() {
    var adminSection = document.getElementById('admin-section');
    if (adminSection.className === 'admin-class') {
        adminSection.className = 'active';
    } else {
        adminSection.className = 'admin-class';
    }
};

// navbar
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
// aside button
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction1() };

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
// Async 
async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {
                user: [
                    {
                        "Name": "Raj pal",
                        "userId": "Raj@pal",
                        "Plots Buyed": 2,
                        "Plots rented": 5
                    }, {
                        "Name": "Mohan",
                        "userId": "Moha123",
                        "Plots Buyed": 4,
                        "Plots rented": 2
                    }, {
                        "Name": "Raju",
                        "userId": "Raju@32",
                        "Plots Buyed": 6,
                        "Plots rented": 8
                    }],
                    Agents:[
                        {
                        name:"John",
                        email:"john420@gmail.com"
                        },
                        {
                        name:"Alice",
                        email:"alisa@gmail.com"
                        },
                        {
                        name:"Bob",
                        email:"Marley@gmail.com"
                        }
                    ]
            };
            resolve(data);
        }, 2000);
    })
}

// handling the getdata 
document.getElementById('getData').addEventListener("click",async ()=>{
    try {
       
       const uname= document.getElementById('u-name');
       uname.textContent='Fetching data...';
        const u_id=document.getElementById('u-id');
        const u_buyed =document.getElementById('u-buyed');
        const u_rented=document.getElementById('u-rented');
        const res= await fetchData();
        console.log(res);
        const data=await res;
        console.log(data);
        uname.textContent = data.user[0].Name;
u_id.innerHTML =`<p>` +data.user[0].userId+`</p>`;
u_buyed.textContent = "Plots Buyed: " + data.user[0]["Plots Buyed"];
u_rented.textContent = "Plots Rented: " + data.user[0]["Plots rented"];
    } catch (error) {
        console.log(error);
    }
})