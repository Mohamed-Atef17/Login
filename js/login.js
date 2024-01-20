let emailLoginInput=document.getElementById("emailLoginInput");
let passwordLoginInput=document.getElementById("passwordLoginInput");
let loginBtn=document.getElementById("loginBtn");
let alertMassage=document.getElementById("alertMassage");
let usercontainer=[];

if(localStorage.getItem('users'!=null)){

    usercontainer=JSON.parse(localStorage.getItem('users'))
}


function login(){
    if(checkinput()==true){
       getAlertMassage('All inputs required', 'red')
    }
    else{

        if(chekemailpassworod()==true){

            window.location.href= './home.html';
        
           }
           else{
            getAlertMassage('email or password notcorrect', 'red')
           }

    }

  
}

function chekemailpassworod(){

    for (let index = 0; index < usercontainer.length; index++) {
          if(usercontainer[index].email==emailLoginInput.value && usercontainer[index].password==passwordLoginInput.value){
            localStorage.setItem('userName' , usercontainer[index].userName)
            return true;
          }        
    }
}

function getAlertMassage(text , color){
    alertMassage.classList.replace("d-none","d-block");
    alertMassage.innerHTML=text;
    alertMassage.style.color=color;
} 



function checkinput(){
    if(emailLoginInput.value == "" || passwordLoginInput.value==""){
        return true;
    }
    else{
        return false;
    }
}


loginBtn.addEventListener('click' , login)