"use strict"
console.log("ITS ALIVE!");

window.onload =()=>{

    let nameForm = document.querySelector("#fullNameForm");

    let radioForm = document.querySelector("#radioChoiceForm");

    let enterbutton = document.querySelector("#enterButton");

    enterbutton.addEventListener("click",saveInfo);


}

let saveInfo =(event)=>{

    event.preventDefault();

    let nameForm = document.querySelector("#fullName");
    let radioForm = document.querySelector("#radioChoiceForm");

    let name = nameForm.value
    let radio = radioForm.type.value

    // console.log(name);
    // console.log(radio)

    localStorage.setItem("username",name);
    localStorage.setItem("RadioValue", radio);


    location.href= "./information.html";
}