var sidebar = document.querySelector("#sidebar-wrapper-div");

var page=document.querySelector("#page");

console.log(page);


console.log(sidebar);

var isClicked = false;

function togglesidebar() {
    isClicked = !isClicked; 

    if (isClicked) {
    
        sidebar.style.width="0px";
        // page.style.width="100%";
        page.style.marginLeft="0";
        
        console.log("Sidebar Hidden");
    } else {
        console.log("Sidebar visible");
        
        page.style.marginLeft="210px";
        // page.style.width="calc(100% - 260px)";
        sidebar.style.width="210px";
    }
}


// Login Creds

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "admin@admin.com" && password === "1234") {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid email or password !  Please enter demo credentials email as: admin@admin.com and Password : 1234");
    }
});



// Alert Fx Bootstrap

const alertList = document.querySelectorAll('.alert')
const alerts = [...alertList].map(element => new bootstrap.Alert(element))