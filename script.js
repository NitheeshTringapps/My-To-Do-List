// Sign Up
function storeCredentials(){
    let name = document.getElementById("name").value;
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if(password === confirmPassword){
        var details = {
            "name": name,
            "userName": userName,
            "password": password
        }
        console.log(JSON.stringify(details));
        localStorage.setItem("details", JSON.stringify(details));
        alert("Account created Sucessfully!");
    }
    else{
        alert("Password and Confirm Password is not same");
        return false;
    }
}

// Sign In
function checkCredentials(){
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    var details = JSON.parse(localStorage.getItem("details"));
    console.log(details);
    if(!details){
        alert("No accounts found! Sign up a new account!");
        return false;
    }
    if(userName == details.userName && password == details.password){
        return true;
    }
    else{
        alert("Invalid User Name or Password!");
        return false;
    }
}

// To Do List
function addList(){
    if(document.getElementById("newList").value != ""){
        var myList = document.getElementById("myList");
        var text = document.getElementById("newList").value;
        document.getElementById("newList").value = "";
        var list = document.createElement("li");
        list.innerHTML=text;
        list.className = "l";
        list.addEventListener('click', function(){
            list.classList.toggle('completed');
        })
        myList.appendChild(list);
    }
}

function empty(){
    var elements = document.querySelectorAll(".l");
    for(var x of elements){
        x.remove();
    }
}

function clearComplete(){
    var elements = document.querySelectorAll(".completed");
    for(var x of elements){
        x.remove();
    }
}

function save(){
    var saveList = document.getElementById("myList").innerHTML;
    localStorage.setItem("saveList", JSON.stringify(saveList));
    alert("Saved Successfully! Click Show Saved List to view your Saved List");
    document.getElementById("myList").innerHTML = "";
}

function showSavedList(){
    var savedList = localStorage.getItem("saveList");
    document.getElementById("myList").innerHTML = JSON.parse(savedList);
    var listObject = document.querySelectorAll("li");
    for(var li of listObject){
        li.addEventListener('click', function(){
            this.classList.toggle('completed');
        })
    }
}
