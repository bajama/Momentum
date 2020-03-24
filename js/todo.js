
const toDoForm = document.querySelector(".toDoForm"),
    toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector(".toDoList")

let toDos = []

function createToDo(value){
    const li = document.createElement("li")
    li.className = "toDo"
    li.id = toDos.length + 1;
    const deletBtn = document.createElement("button")
    deletBtn.innerText = "❌"
    deletBtn.className = "toDo_button"
    deletBtn.addEventListener("click",deleteToDo)
    const span = document.createElement("span")
    span.innerText = value
    li.appendChild(deletBtn)
    li.appendChild(span)
    toDoList.appendChild(li)
    updateToDo(value)
}

function readToDo(){
    const currentToDo = localStorage.getItem("toDos")
    if(currentToDo !== null){
        const parsedToDo = JSON.parse(currentToDo)
        parsedToDo.forEach(function(toDo) {
            createToDo(toDo.text)
        });
      }
    }

function localSet(){
    const stringToDo = JSON.stringify(toDos)
localStorage.setItem("toDos",stringToDo)
}

function updateToDo(value){
const toDoObj = {
    id : toDos.length + 1,
    text : value
}
toDos.push(toDoObj)
localSet()
}

function deleteToDo(event){
    const li = event.target.parentElement
    li.remove(li.id)
    toDos =toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id)
    })
    localSet()
}

function onsummit(event){
    event.preventDefault();
    const value = toDoInput.value
    createToDo(value)
    toDoInput.value = ""
}

function init(){
    readToDo()
    toDoForm.addEventListener("submit",onsummit)
}

init()