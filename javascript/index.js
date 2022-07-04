// get elements in dom

const { text } = require("express");

let listDOM = document.querySelector("#list");
let taskDOM = document.querySelector("#task");
let btnDOM = document.querySelector("#liveToastBtn");
let successAlertDOM = document.querySelector("#successAlert");
let dangerAlertDOM = document.querySelector("#dangerAlert");
let ullength = document.getElementsByTagName("li");

//events
btnDOM.addEventListener('click', addElement);
listDOM.addEventListener('click', check);
document.addEventListener('DOMContentLoaded', getLocalStorage);


for(let i=0; i < ullength.length;i++){ 
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7"; 
    closeButton.classList.add("close"); 
    closeButton.onclick = removeButton; 
    ullength[i].append(closeButton); 
    ullength[i].onclick = check; 
}

function removeButton(){
    this.parentElement.remove(); 
  }
  

function addElement(){
    let isEmpty = text => text.trim.length > 0 ;
    //console.log(isEmpty(taskDOM.value));

    if(isEmpty(taskDOM.value)){
        saveToLocalStorage(taskDOM.value);

        let liDOM = document.createElement("li");
        liDOM.innerHTML = taskDOM.value;
        listDOM.append(liDOM);
        taskDOM.value="";

        let xButton = document.createElement("span");
        xButton.classList.add("close");
        liDOM.append(xButton);

        AlertSuccess();
    }else{
        AlertDanger();
    }

}

function check(){

}