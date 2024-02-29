let inputToDojs = document.getElementById("inputToDo");
let boutonADDjs = document.getElementById("boutonADD");


boutonADDjs.addEventListener("click", function(){
    let texte = inputToDojs.value
    let newli = document.createElement('li')
    newli.textContent = texte
    document.getElementById("ListeToDo").appendChild(newli)
})