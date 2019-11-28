const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


// var signupbutton = document.getElementById('signupbtn');
var form1 = document.getElementById('myform');
form1.addEventListener('submit', () => {
    document.querySelectorAll('.error').forEach(function(el){
        el.style.display = 'block';
        el.classList.add("block");
    });
    return checkValidity();
    
});

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function checkValidity() {
    var name=document.myform.name.value;  
    var password=document.myform.password.value;
    var emailtest = document.getElementById('email').value;
    emailtest.value = '';
    document.getElementById('email-error').innerText=""; 

    if(name.length < 2 && name.length != ''){
        document.getElementById('name-error').innerHTML = 'Name should contain atleast 2 letters';
        return false; 
    }else if(password.length < 8 && password.length != ''){  
        document.getElementById('password-error').innerHTML = 'Password should contain atleast 8 letters';
        return false;  
    }else if (validateEmail(email)){
        document.getElementById('email-error').innerText = 'Please enter a valid mail address'; 
        return false;
    }else{
        return true;
    }
}