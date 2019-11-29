const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
document.getElementsByClassName('sign-in-container')[0].classList.add('mobile-sign-in-active');


signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
    document.getElementsByClassName('sign-in-container')[0].classList.remove('mobile-sign-in-active');
    document.getElementsByClassName('sign-up-container')[0].classList.add('mobile-sign-up-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
    document.getElementsByClassName('sign-in-container')[0].classList.add('mobile-sign-in-active');
    document.getElementsByClassName('sign-up-container')[0].classList.remove('mobile-sign-up-active');
});

document.getElementById('mobile-sign-up').addEventListener('click', () => {
    document.getElementsByClassName('sign-in-container')[0].classList.remove('mobile-sign-in-active');
    document.getElementsByClassName('sign-up-container')[0].classList.add('mobile-sign-up-active');
    container.classList.add("right-panel-active");
});

document.getElementById('mobile-sign-in').addEventListener('click', () => {
    document.getElementsByClassName('sign-in-container')[0].classList.add('mobile-sign-in-active');
    document.getElementsByClassName('sign-up-container')[0].classList.remove('mobile-sign-up-active');
    container.classList.remove("right-panel-active");
});

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

document.getElementById('newSignIn').onsubmit = function() {
    return checkInput();
}

function checkInput() {
    var inputEmail = document.getElementById('signin_email').value;
    var inputPwd = document.getElementById('signin_pwd').value;

    var errorMsg = '';

    document.querySelectorAll('.signin_error').forEach(function(el){
        el.classList.remove("signin_block");
    });

    if(inputEmail == '') {
        errorMsg = 'Please enter an email address.';
        document.getElementById('signin_email-error').innerText = errorMsg;
        document.getElementById('signin_email-error').classList.add("signin_block");
    } else if(inputEmail.length < 10) {
        errorMsg = 'Email id is incorrect';
        document.getElementById('signin_email-error').innerText = errorMsg;
        document.getElementById('signin_email-error').classList.add("signin_block");
    } else if(inputPwd == '') {
        errorMsg = 'Please enter a password';
        document.getElementById('signin_password-error').innerHTML = errorMsg;
        document.getElementById('signin_password-error').classList.add("signin_block");
    } else if(inputPwd.length < 8) {
        errorMsg = 'Incorrect password';
        document.getElementById('signin_password-error').innerHTML = errorMsg;
        document.getElementById('signin_password-error').classList.add("signin_block");
    } else {
        errorMsg = '';
        inputEmail.value = '';
        inputPwd.value = '';
    }

    if(errorMsg != '') {
        return false;
    } else {
        return true;
    }
}

document.getElementById('signUpform').onsubmit = function() {
    return checkInputSignUp();
}

function checkInputSignUp() {
    var inputNmae = document.getElementById('signup_name').value;
    var inputEmail = document.getElementById('signup_email').value;
    var inputPwd = document.getElementById('signup_pwd').value;

    var errMsg = '';

    document.querySelectorAll('.error').forEach(function(el){
        el.classList.remove("block");
    });

    if(inputNmae == '') {
        errMsg = 'This field is required.';
        document.getElementById('name-error').innerHTML = errMsg;
        document.getElementById('name-error').classList.add("block");
    } else if(inputNmae.length < 3) {
        errMsg = 'Name should contain atleast 3 letters';
        document.getElementById('name-error').innerHTML = errMsg;
        document.getElementById('name-error').classList.add("block");
    } else if(inputEmail == '') {
        errMsg = 'This field is required.';
        document.getElementById('email-error').innerText = errMsg;
        document.getElementById('email-error').classList.add("block");
    } else if(!validateEmail(inputEmail)) {
        errMsg = 'Please enter a valid mail address';
        document.getElementById('email-error').innerText = errMsg;
        document.getElementById('email-error').classList.add("block");
    } else if(inputPwd == '') {
        errMsg = 'This field is required.';
        document.getElementById('password-error').innerHTML = errMsg;
        document.getElementById('password-error').classList.add("block");
    } else if(inputPwd.length < 8) {
        errMsg = 'Password should contain atleast 8 characters.';
        document.getElementById('password-error').innerHTML = errMsg;
        document.getElementById('password-error').classList.add("block");
    } else {
        errMsg = '';
        document.getElementById('signup_name').value = '';
        document.getElementById('signup_email').value = '';
        document.getElementById('signup_pwd').value = '';
    }

    if(errMsg != '') {
        return false;
    } else {
        return true;
    }
}