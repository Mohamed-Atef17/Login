
let userNameInput=document.getElementById("userNameInput");
let EmailInput=document.getElementById("EmailInput");
let PasswordInput=document.getElementById("PasswordInput");
let signUpBtn=document.getElementById("signUpBtn");
let alertMassage=document.getElementById("alertMassage");
let userContainer=[];

if(localStorage.getItem("users") !=null){
    userContainer= JSON.parse(localStorage.getItem("usres"));
}


function signUP(){
  
    let data={
        username:userNameInput.value,
        email:EmailInput.value,
        password:PasswordInput.value
    }
      
    if(checkinput()==true){

        getAlertMassage('All inputs required', 'red');

        } 
        else{
        if(checkEmail==true){
            getAlertMassage('email already at input', 'red');

        } else{
    
            userContainer.push(data);
            localStorage.setItem("users" , JSON.stringify(userContainer));
            clearform();
            getAlertMassage('success' , 'green');
            window.location.href='./index.html'
    
        }
       
    }
   
}

 
function getAlertMassage(text , color){
    alertMassage.classList.replace("d-none","d-block");
    alertMassage.innerHTML=text;
    alertMassage.style.color=color;
} 


function clearform(){

    userNameInput.value="";
    EmailInput.value="";
    PasswordInput.value="";

}

function checkinput(){
    if(userNameInput.value=="" || EmailInput.value == "" || PasswordInput.value==""){
        return true;
    }
    else{
        return false;
    }
}

function checkEmail(){
    for( let i=0 ; i<userContainer.length ; i++){
        if(userContainer[i].email==EmailInput.value)
            return true;
        
    }
}



signUpBtn.addEventListener("click" , signUP)