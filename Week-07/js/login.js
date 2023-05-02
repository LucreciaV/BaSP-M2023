window.onload = function(){
var emailExpression = /^[^@]+@[^@]+.[a-zA-Z]{2,}$/;
    var emailInput = document.getElementById('email');
    var errorE = document.querySelector('.error');

    function validateEmail(email){
    if (emailExpression.test(email)){
            return true;
        }
        return false;
    }
    emailInput.addEventListener('blur', function(event){
        console.log('blur', event.target.value);
        if(!validateEmail(event.target.value)){
            emailInput.classList.add('red-border');
            errorE.classList.remove('none');
        }
    });

    emailInput.addEventListener('focus', function(event){
        emailInput.classList.remove('red-border');
        errorE.classList.add('none');
    });

    var passwordInput = document.getElementById('password');
    var errorMessage = document.querySelectorAll('.error');
     
   passwordInput.addEventListener('blur', function(event){
    console.log('blur', event.target.value);
    if(!validatePassword(event.target.value)){
        passwordInput.classList.add('red-border');
        errorMessage[1].classList.remove('none');
    }
});

    passwordInput.addEventListener('focus', function(event){
        passwordInput.classList.remove('red-border');
        errorMessage[1].classList.add('none');
    });

    function isUpLetter(c){
      for (var i=65; i<=90; i++){
          if (c.charCodeAt(0) == i){
              return true;
          }
      }
      return false;
    }

  function isLowLetter(c){
      for (var i=97; i<=122; i++){
          if (c.charCodeAt(0) == i){
              return true;
          }
      }
      return false;
    }

  function isNumber(c){
      for (var i=0; i<10; i++){
          if (c == i){
              return true;
          }
      }
      return false;
    }

  function isSpecialCharacter(c){
      if(!(isUpLetter(c) || isLowLetter(c) || isNumber(c))){
          return true;
      }
      return false;
    }

  function validatePassword(password){
      if ((password.length>=8) && (password.length<=20)){
          var lowLetter=false;
          var upLetter=false;
          var number=false;
          var cont=0;
          while((cont<password.length) && (lowLetter==false ||
               upLetter==false || number==false)){
              if(isLowLetter(password[cont])){
                  lowLetter=true;
              }else if(isUpLetter(password[cont])){
                  upLetter=true;
              }else if(isNumber(password[cont])){
                  number=true;
              }
              cont++;
          }
          if(!(lowLetter==false || upLetter==false ||  number==false)){
              return true;
          }
          return false;
      }
      return false;
    }
    
    var logIn = document.getElementById('form-alert');
        logIn.onsubmit = function button (event){
        event.preventDefault();
        if (validateEmail(emailInput.value) && validatePassword(passwordInput.value)){
            alert(emailInput.value + passwordInput.value + 'email and password valid'); 
        }else {
            if(!validateEmail(emailInput.value)){
                alert ('Email invalid' + emailInput.value);
        }
        if (!validatePassword(passwordInput.value)){
            alert('Password invalid' + passwordInput)
        }}
    }

var button = document.getElementById("button-form");
button.addEventListener('click', function (event) {
  var url = `https://api-rest-server.vercel.app/login?email=${emailInput.value}&password=${passwordInput.value}`;
  event.preventDefault();
  if (
    validateEmail(emailInput.value) &&
    validatePassword(passwordInput.value)
  ) {
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        alert(data.msg);
      })
      .catch(function (error) {
        alert(data.msg);
      });
  } else {
    if (!validateEmail(emailInput.value)) {
      alert("ERROR =" + emailInput.value);
    }
    if (!validatePassword(passwordInput.value)) {
      alert("ERROR =" + passwordInput.value);
    }
  }
});
};