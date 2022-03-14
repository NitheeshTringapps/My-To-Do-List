const i = 0;
var myList = document.getElementById("myList");
function addList(){
    var text = document.getElementById("newList").value;
    var list = document.createElement("li");
    list.innerHTML=text;
    list.className = "l";
    myList.appendChild(list);

    // var liArray = document.querySelectorAll("li");
    // console.log(liArray);
    let liArray = document.getElementsByClassName("l");
    for(let i = 0; i < liArray.length; i++){
        liArray[i].addEventListener('click', function(){
            this.classList.toggle('active');
            // liArray[i].classList.toggle('active');
        })
    }

    
}

// var liArray = document.querySelectorAll("li");
let liArray = document.getElementsByClassName("l");
for(let i = 0; i < liArray.length; i++){
    liArray[i].addEventListener('click', function(){
        this.classList.toggle('active');
        // liArray[i].classList.toggle('active');
    })
}

// var liArray = document.querySelector('ol');
// liArray.addEventListener('click', function(ev) {
//    if (ev.target.tagName === 'li') {
//    ev.target.classList.toggle('checked');
// }
// }, false);