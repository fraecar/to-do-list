let inputToDojs = document.getElementById("inputToDo");
let boutonADDjs = document.getElementById("boutonADD");
let i = Number(1)

function setI(KeyIs){
    testkeyIs = localStorage.getItem(KeyIs)
    if (testkeyIs == null) {
        localStorage.setItem(KeyIs, 1)
    }
    else {
        i = localStorage.getItem(KeyIs)
    }
}

function addTolist(){
    boutonADDjs.addEventListener("click", function(){
        let texte = inputToDojs.value
        let newli = document.createElement('li')
        i = i + 1
        localStorage.setItem(i, texte)
        newli.textContent = texte
        document.getElementById("ListeToDo").appendChild(newli)
    });
}

function boucle(){
    setI()
    addTolist()
}

boucle()


