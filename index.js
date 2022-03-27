const email = document.getElementById("email");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
let validPhone = false;
let validEmail = false;
let validName = false;

name.addEventListener("blur", ()=>{
    console.log("name is blurred.");
//validate the name here
let regex = /^[A-Za-z]([0-9a-zA-Z]){2,10}$/;
let str = name.value;
console.log(regex, str)
console.log(regex.test(str));
if(regex.test(str)){
    console.log("matched")
    name.classList.remove("is-invalid");
    validName = true
}
else{
    console.log("Not matched.");
    name.classList.add("is-invalid");
}
})


email.addEventListener("blur", ()=>{
    console.log("email is blurred.");
    //validate the name here
let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.[a-zA-Z]{2,7}$/;
let str = email.value;
console.log(regex, str)
if(regex.test(str)){
    console.log("matched")
    email.classList.remove("is-invalid");
    validEmail = true
}
else{
    console.log("Not matched.");
    email.classList.add("is-invalid");
}
})


phone.addEventListener("blur", ()=>{
    console.log("phone is blurred.");
    //validate the name here
let regex = /[0-9]{10}/;
let str = phone.value;
console.log(regex, str)
if(regex.test(str)){
    console.log("matched")
    email.classList.remove("is-invalid");
    validPhone = true;
}
else{
    console.log("Not matched.");
    email.classList.add("is-invalid");
}
})


let submit = document.getElementById("submit")
submit.addEventListener("click", (e)=>{
    console.log("You have clicked the submit button")
    e.preventDefault();
if(validEmail&&validPhone&&validName){
    console.log('all are valid and submitting the form');
    let success = document.getElementById("success");
    success.classList.add("show");
}
else{
    console.log(`one out of all form is not valid so couldn't submit the form`);
    let failure = document.getElementById("failure");
    failure.classList.add("show");
}
    
})