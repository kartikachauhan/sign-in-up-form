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
    emailtest = '';
    document.getElementById('email-error').innerText=""; 

    console.log(name, password, emailtest);

    if(name.length == '' || password.length == '' || emailtest == ''){
        document.querySelectorAll('.error').forEach(function(el){
            el.style.display = 'block';
            el.classList.add("block");
        });
    }

    if(name.length < 2 && name.length != ''){
        document.getElementById('name-error').innerHTML = 'Name should contain atleast 2 letters';
        document.getElementById('name-error').style.color = '#ff0000';
        return false; 
    }else if(password.length < 8 && password.length != ''){  
        document.getElementById('password-error').innerHTML = 'Password should contain atleast 8 letters';
        document.getElementById('password-error').style.color = '#ff0000';
        return false;  
    }else if (validateEmail(email)){
        document.getElementById('email-error').innerText = 'Please enter a valid mail address'; 
        document.getElementById('email-error').style.color = '#ff0000';
        return false;
    }else{
        return true;
    }
    
}