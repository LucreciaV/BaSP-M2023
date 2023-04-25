window.onload = function(){

var nameText = document.getElementById("nameText");
var nameInput = document.getElementById("nameInput");
var errorNameClass = document.getElementById("nameError");

function letterValidation(a) {
    if (typeof(a) !== 'string') {
      return false;
    }
    return a.toLowerCase() !== a.toUpperCase();
  }

  function nameValidation(word){
    if(word.length>3){
        for(i=0; i<word.length; i++){
            if(!letterValidation(word[i])){
                return false;
            }
        }
        return true;
    }
    return false;
  }

  nameInput.addEventListener('blur', function(event){
    if(!nameValidation(event.target.value)){
        nameInput.classList.add('red-border');
        errorE.classList.remove('none');
    }
});

nameInput.addEventListener('focus', function(event){
    nameInput.classList.remove('red-border');
    errorE.classList.add('none');
})

var surnameText = document.getElementById("surnameText");
var surnameInput = document.getElementById("surnameInput");
var errorSurnameClass = document.getElementById("surnameError");



    surnameInput.addEventListener('blur', function(event){
    if(!nameValidation(event.target.value)){
        surnameInput.classList.add('red-border');
        errorSurnameClass.classList.remove('none');
    }
});

surnameInput.addEventListener('focus', function(event){
    surnameInput.classList.remove('red-border');
    errorSurnameClass.classList.add('none');
});

var idText = document.getElementById("idText");
var idInput = document.getElementById("idInput");
var errorIdClass = document.getElementById("idError");

function hasNumbers(myString) {
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  
    for (var x = 0; x < myString.length; x++) {
      if (numbers.includes(myString[x])) {
        return true;
      }
    }
    return false;
  }
  
  function validateId(myId) {
    if (myId.length>=7){
        for (var x = 0; x < myId.length; x++){
            if (!hasNumbers(myId[x])){
                return false;
            }
        }return true;
        } return false;
}

idInput.addEventListener('blur', function(event){
    if(!validateId(event.target.value)){
        idInput.classList.add('red-border');
        errorIdClass.classList.remove('none');
    }
});

idInput.addEventListener('focus', function(event){
    idInput.classList.remove('red-border');
    errorIdClass.classList.add('none');
});



var birthdayText = document.getElementById("birthdayText");
var birthdayInput = document.getElementById("birthdayInput");
var errorBirthdayClass = document.getElementById("birthdayError");

var phoneText = document.getElementById("phoneText");
var phoneInput = document.getElementById("phoneInput");
var errorPhoneClass = document.getElementById("phoneError")

var adrressInput = document.getElementById("adressInput");

var cityInput = document.getElementById("cityInput");

var zipInput = document.getElementById("zipInput");

var emailText = document.getElementById("emailText");
var emailInput = document.getElementById("emailInput");


var passwordInput = document.getElementById('passwordInput');
var errorMessage = document.querySelectorAll('.error');
     

var passwordRepaetInput = document.getElementById("passwordRepeatInput");

passwordInput.addEventListener('blur', function(event){
    if(!hasNumbersAndChar(event.target.value)){
        passwordInput.classList.add('red-border');
        errorMessage[9].classList.remove('none');
    }
});

    passwordInput.addEventListener('focus', function(event){
        passwordInput.classList.remove('red-border');
        errorMessage[9].classList.add('none');
    });

function hasNumbers(myString) {
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  
    for (var x = 0; x < myString.length; x++) {
      if (numbers.includes(myString[x])) {
        return true;
      }
    }
    return false;
  }
  
  function hasNumbersAndChar(myString) {
    var num = 0;
    var char = 0;
    if (myString.length>=8){
    for (var x = 0; x < myString.length; x++) {
      if (hasNumbers(myString[x])) {
        num++;
      } else {
        char++;
      }
      if (num > 0 && char > 0) {
        return true;
      }
    }
    return false;
  }
    return false;
}


var emailExpression = /^[^@]+@[^@]+.[a-zA-Z]{2,}$/;
var errorE = document.querySelector('.error');

function validateEmail(email){
    if (emailExpression.test(email)){
            return true;
        }
        return false;
    }
    emailInput.addEventListener('blur', function(event){
        if(!validateEmail(event.target.value)){
            emailInput.classList.add('red-border');
            errorE.classList.remove('none');
        }
    });

    emailInput.addEventListener('focus', function(event){
        emailInput.classList.remove('red-border');
        errorE.classList.add('none');
    })

    var passwordInput = document.getElementById('password');
    var errorMessage = document.querySelectorAll('.error');
     
   passwordInput.addEventListener('blur', function(event){
    if(!hasNumbersAndChar(event.target.value)){
        passwordInput.classList.add('red-border');
        errorMessage[1].classList.remove('none');
    }
});

    passwordInput.addEventListener('focus', function(event){
        passwordInput.classList.remove('red-border');
        errorMessage[1].classList.add('none');
    });

function hasNumbers(myString) {
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  
    for (var x = 0; x < myString.length; x++) {
      if (numbers.includes(myString[x])) {
        return true;
      }
    }
    return false;
  }
  
  function hasNumbersAndChar(myString) {
    var num = 0;
    var char = 0;
    if (myString.length>=8){
    for (var x = 0; x < myString.length; x++) {
      if (hasNumbers(myString[x])) {
        num++;
      } else {
        char++;
      }
      if (num > 0 && char > 0) {
        return true;
      }
    }
    return false;
  }
    return false;
}









































































































































































    
}