var myList = document.getElementById("myList");
function addList(){
    var text = document.getElementById("newList").value;
    document.getElementById("newList").value = ""
    var list = document.createElement("li");
    var span = document.createElement("span");
    list.innerHTML=text;
    list.className = "l";
    list.addEventListener('click', function(){
        list.classList.toggle('completed');
    })
    myList.appendChild(list);
    
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
