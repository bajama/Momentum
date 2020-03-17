
const toDoForm = document.querySelector(".toDoForm"),
    toDoinput = toDoForm.querySelector("input")

let toDos = []

function handleToDo(event){

}

function createToDo(toDo){
    const li = document.createElement("li")
    const delBtn = document.createElement("span")
    const label = document.createElement("label")
    const ul = document.querySelector(".toDoList")
    label.innerText = toDo
    label.appendChild(li)
    delBtn.appendChild(li)
    li.appendChild(ul)
}

function readToDo(load){
    const currentToDo = localStorage.getItem("toDos")
    if(currentToDo !== null){
    const parseToDo = JSON.parse(currentToDo)
        parseToDo.forEach(function(element){
            console.log(element)
        })
    }

}

function updateToDo(save){

}

function deleteToDo(){

}


function init(){
 readToDo()
}
init()