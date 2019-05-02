function animatedForm(){
const  arrow= document.querySelectorAll(".fa-arrow-down");

arrow.forEach(arrow=>{
  arrow.addEventListener('click',()=>{
     const input = arrow.previousElementSibling;
     const parent = arrow.parentElement;
     const nextForm = parent.nextElementSibling;


     //check for validation

     if(input.type==="text" && validateUser(input)){
         console.log("Every thing is ok");
         nextSlice(parent,nextForm);
     }else if(input.type==='email' && validateEmail(input)){
         nextSlice(parent, nextForm);
     }else if(input.type==='password' && validateUser(input))
     {nextSlice(parent,nextForm);}
     else{
         parent.style.animation="shake 0.5s ease";
     }
     //get rid of animation
parent.addEventListener('animationend',()=>{
    parent.style.animation ="";
});

});
});
}
function validateUser(user){
    if(user.value.length<6){
        console.log('not enough characters');
        error("rgb(189,87,87)");
    }else{
        error("rgb(87,189,130)");
        return true;
    }
}
function validateEmail(email){
const validation =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
if(validation.test(email.value)){
    return true;
}else{
    error("rgb(189,87,87)");
    console.log("Enter a Valid Email");
}

}

function nextSlice(parent,nextForm){
    parent.classList.add("innactive");
    parent.classList.remove("innactive");
    nextForm.classList.add("active");
}

function error(color){
    document.body.style.backgroundColor=color;
}
animatedForm();