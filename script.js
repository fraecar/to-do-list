let inputToDojs = document.getElementById("inputToDo")
let boutonADDjs = document.getElementById("boutonADD")


function suppAllListToDo() {
    let zoneASupprimer = document.getElementById('ListeToDo');
    if (zoneASupprimer) {
      zoneASupprimer.innerHTML = '';
      localStorage.clear()
    } else {
      console.error('Zone non trouvée');
    }
}

function addToListStart(){
    for(i = 1; i <= localStorage.length; i++) {
        let newli = document.createElement("li")
        newli.textContent = localStorage.getItem(i)
        newli.setAttribute("class", "ToDo")
        newli.setAttribute("id", i)
        document.getElementById("ListeToDo").appendChild(newli)
    }
}

function addTolist(){
    let texte = inputToDojs.value
    let newli = document.createElement('li')
    key = localStorage.length + 1
    if(texte == ''){
        alert("erreur le champs de texte que vous essayé de rentrer est vide")
    }
    else {
         localStorage.setItem(key, texte)
         newli.textContent = texte
         newli.setAttribute("class", "ToDo")
        newli.setAttribute("id", key)
        document.getElementById("ListeToDo").appendChild(newli)
     }
}

addToListStart()
addTolist()