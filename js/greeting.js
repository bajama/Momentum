const nameContainer = document.querySelector(".nameContainer")

USER_LS = "currentName"

function handleSubmit(event){
 event.preventDefault()
 const input = document.querySelector(".myName")
 const value = input.value
 localStorage.setItem("currentName",value)
 updateName(value)
}

function createName(){
const input = document.createElement("input")
    input.placeholder = "what is your name"
    input.type = "text"
    input.className = "myName"
const form = document.createElement("form")
    form.addEventListener("submit",handleSubmit)
    form.appendChild(input)
    nameContainer.appendChild(form)
}

function readName(){
 const currentName = localStorage.getItem(USER_LS)
 if(currentName === null){
    createName()
 }else{
    nameContainer.innerHTML = `Hello ${currentName}`;
 }
}

function updateName(name){
  nameContainer.innerHTML = `Hello ${name}`;
}

function init(){
readName()
}
init()