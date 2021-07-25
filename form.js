var user = document.querySelector('#user');
var password = document.querySelector('#password');
var button = document.querySelector('#submit');
user.addEventListener('keyup',function(){
    var u_times  = document.querySelector('.u-times');
    var u_check  = document.querySelector('.u-check');
    if (user.value.length == 0 || user.value.length < 6 ){
        user.style.border='1px solid red'
        u_times.style.display='block'
         u_check.style.display='none'
         return false;
    }else{
        user.style.border='1px solid green';
        u_check.style.display = "block"
        u_times.style.display = "none"
    }
})
password.addEventListener('keyup',function(){
    var u_times  = document.querySelector('.u-times');
    var u_check  = document.querySelector('.u-check');
    var user_invalid = document.querySelector('.user-invalid')
    var password_invalid = document.querySelector('.password-invalid')
    if (password.value.length == 0 || password.value.length < 8){
        password.style.border='1px solid red'
        p_times.style.display='block'
        p_check.style.display='none'

    }else{
        password.style.border='1px solid green';
        p_check.style.display = "block"
        p_times.style.display = "none"
 
    }
})

function validate(){
    var user_invalid = document.querySelector('.user-invalid')
    var password_invalid = document.querySelector('.password-invalid')
    if (user.value.length == 0 || user.value.length < 6 ){
        user_invalid.style.display ="block";
        password_invalid.style.display ="none";
         return false;
    }else if (password.value.length == 0 || password.value.length < 8){
        password_invalid.style.display ="block";
        user_invalid.style.display ="none";
          return false;
        
    }else{

        alert('SUCCESSFULLY LOGGED IN')
    }
   
}
