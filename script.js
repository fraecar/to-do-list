let inputToDojs = document.getElementById("inputToDo");
let boutonADDjs = document.getElementById("boutonADD");
let suppButtonjs = document.getElementsByClassName("suppButton")

function addToListStart(){
    for(i = 1; i <= localStorage.length; i++) {
        let newli = document.createElement("li")
        newli.textContent = localStorage.getItem(i)
        newli.setAttribute("id", i)
        document.getElementById("ListeToDo").appendChild(newli)
    }
}

function addTolist(){
    boutonADDjs.addEventListener("click", function(){
        let texte = inputToDojs.value
        let newli = document.createElement('li')
        key = localStorage.length + 1
        localStorage.setItem(key, texte)
        newli.textContent = texte
        newli.setAttribute("id", key)
        document.getElementById("ListeToDo").appendChild(newli)
    });
}

function boucle(){
    addToListStart()
    addTolist()
}

boucle()