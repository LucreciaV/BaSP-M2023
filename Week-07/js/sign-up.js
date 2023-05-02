window.onload = function () {
  var nameInput = document.getElementById("nameInput");
  var errorNameClass = document.getElementById("nameError");

  function letterValidation(a) {
    if (typeof a !== "string") {
      return false;
    }
    return a.toLowerCase() !== a.toUpperCase();
  }

  function nameValidation(word) {
    if (word.length > 3) {
      for (i = 0; i < word.length; i++) {
        if (!letterValidation(word[i])) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  nameInput.addEventListener("blur", function (event) {
    if (!nameValidation(event.target.value)) {
      nameInput.classList.add("red-border");
      errorNameClass.classList.remove("none");
    }
  });

  nameInput.addEventListener("focus", function (event) {
    nameInput.classList.remove("red-border");
    errorNameClass.classList.add("none");
  });

  var surnameInput = document.getElementById("surnameInput");
  var errorSurnameClass = document.getElementById("surnameError");

  surnameInput.addEventListener("blur", function (event) {
    if (!nameValidation(event.target.value)) {
      surnameInput.classList.add("red-border");
      errorSurnameClass.classList.remove("none");
    }
  });

  surnameInput.addEventListener("focus", function (event) {
    surnameInput.classList.remove("red-border");
    errorSurnameClass.classList.add("none");
  });

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
    if (myId.length >= 7) {
      for (var x = 0; x < myId.length; x++) {
        if (!hasNumbers(myId[x])) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  idInput.addEventListener("blur", function (event) {
    if (!validateId(event.target.value)) {
      idInput.classList.add("red-border");
      errorIdClass.classList.remove("none");
    }
  });

  idInput.addEventListener("focus", function (event) {
    idInput.classList.remove("red-border");
    errorIdClass.classList.add("none");
  });

  var birthdayInput = document.getElementById("birthdayInput");
  var errorBirthdayClass = document.getElementById("birthdayError");

  function validateDate(birthdayInput) {
    var birthdayInput = new Date(birthdayInput);
    var currentDate = new Date();
    if (birthdayInput.getTime() <= currentDate.getTime()) {
      return true;
    }
    return false;
  }

  function changeDateFormat(birthdayError) {
    var dateArray = date.split("-");

    year = dateArray[0];
    month = dateArray[1];
    day = dateArray[2];

    dateArray = month + "/" + day + "/" + year;
    return dateArray;
  }
  birthdayInput.addEventListener("blur", function (event) {
    if (!validateDate(event.target.value)) {
      birthdayInput.classList.add("red-border");
      errorBirthdayClass.classList.remove("none");
    }
  });
  birthdayInput.addEventListener("focus", function (event) {
    birthdayInput.classList.remove("red-border");
    errorBirthdayClass.classList.add("none");
  });

  var phoneInput = document.getElementById("phoneInput");
  var errorPhoneClass = document.getElementById("phoneError");

  function validatePhone(myPhone) {
    if (myPhone.length == 10) {
      for (var x = 10; x < myPhone.length; x++) {
        if (!hasNumbers(myPhone[x])) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  phoneInput.addEventListener("blur", function (event) {
    if (!validatePhone(event.target.value)) {
      phoneInput.classList.add("red-border");
      errorPhoneClass.classList.remove("none");
    }
  });

  phoneInput.addEventListener("focus", function (event) {
    phoneInput.classList.remove("red-border");
    errorPhoneClass.classList.add("none");
  });

  var addressInput = document.getElementById("addressInput");
  var errorAddressClass = document.getElementById("addressError");

  addressInput.addEventListener("blur", function (event) {
    if (!validateAddress(event.target.value)) {
      addressInput.classList.add("red-border");
      errorAddressClass.classList.remove("none");
    }
  });

  addressInput.addEventListener("focus", function (event) {
    addressInput.classList.remove("red-border");
    errorAddressClass.classList.add("none");
  });

  function hasSpace(myString) {
    if (myString == " ") {
      return true;
    }
    return false;
  }

  function validateAddress(myString) {
    var num = 0;
    var char = 0;
    var space = 0;
    if (myString.length >= 5) {
      for (var i = 0; i < myString.length; i++) {
        if (letterValidation(myString[i])) {
          num++;
        }
        if (hasNumbers(myString[i])) {
          char++;
        }
        if (hasSpace(myString[i])) {
          space++;
        }
      }
      if (num > 0 && char > 0 && space > 0) {
        return true;
      }
    }
    return false;
  }

  var cityInput = document.getElementById("cityInput");
  var errorCity = document.getElementById("cityError");

  function validateCity(c) {
    if (c.length >= 3) {
      for (var x = 0; x < c.length; x++) {
        if (!hasNumbers(c[x])) {
            num ++;
        }else{
            char ++;
        }
        if(num>0 && char>0){

        }
          return true;
        }
      }
      return false;
    }


  cityInput.addEventListener("blur", function (event) {
    if (!validateCity(event.target.value)) {
      cityInput.classList.add("red-border");
      errorCity.classList.remove("none");
    }
  });
  console.log(cityInput);

  cityInput.addEventListener("focus", function (event) {
    cityInput.classList.remove("red-border");
    errorCity.classList.add("none");
  });

  var zipInput = document.getElementById("zipInput");
  var errorZipClass = document.getElementById("zipError");

  function validateZip(myZip) {
    if (myZip.length >= 4 && myZip.length <= 5) {
      for (var x = 0; x < myZip.length; x++) {
        if (!hasNumbers(myZip[x])) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  zipInput.addEventListener("blur", function (event) {
    if (!validateZip(event.target.value)) {
      zipInput.classList.add("red-border");
      errorZipClass.classList.remove("none");
    }
  });

  zipInput.addEventListener("focus", function (event) {
    zipInput.classList.remove("red-border");
    errorZipClass.classList.add("none");
  });

  var emailInput = document.getElementById("emailInput");
  var emailExpression = /^[^@]+@[^@]+.[a-zA-Z]{2,}$/;
  var errorEmailClass = document.getElementById("emailError");

  function validateEmail(emailInput) {
    if (emailExpression.test(emailInput)) {
      return true;
    }
    return false;
  }

  emailInput.addEventListener("blur", function (event) {
    if (!validateEmail(event.target.value)) {
      emailInput.classList.add("red-border");
      errorEmailClass.classList.remove("none");
    }
  });

  emailInput.addEventListener("focus", function (event) {
    emailInput.classList.remove("red-border");
    errorEmailClass.classList.add("none");
  });

  var passwordInput = document.getElementById('password');
  var errorMessage = document.querySelectorAll('.error');
   
 passwordInput.addEventListener('blur', function(event){
  if(!validatePassword(event.target.value)){
      passwordInput.classList.add('red-border');
      errorMessage[9].classList.remove('none');
  }
});

  passwordInput.addEventListener('focus', function(event){
      passwordInput.classList.remove('red-border');
      errorMessage[9].classList.add('none');
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
        var specialCharacter=false;
        var number=false;
        var cont=0;
        while((cont<password.length) && (lowLetter==false ||
             upLetter==false || specialCharacter==false || number==false)){
            if(isLowLetter(password[cont])){
                lowLetter=true;
            }else if(isUpLetter(password[cont])){
                upLetter=true;
            }else if(isSpecialCharacter(password[cont])){
                specialCharacter=true;
            }else if(isNumber(password[cont])){
                number=true;
            }
            cont++;
        }
        if(!(lowLetter==false || upLetter==false || specialCharacter==false || number==false)){
            return true;
        }
        return false;
    }
    return false;
  }

  var passwordRepeatInput = document.getElementById("passwordRepeat");
  var dontMatchClass = document.getElementById("dontMatch");

  function matchPassword(p1, p2) {
    if (p1 == p2) {
      return true;
    }
    return false;
  }

  passwordRepeatInput.addEventListener("blur", function (event) {
    if (!matchPassword(event.target.value, passwordInput.value)) {
      passwordRepeatInput.classList.add("red-border");
      dontMatchClass.classList.remove("none");
    }
  });

  passwordRepeatInput.addEventListener("focus", function (event) {
    passwordRepeatInput.classList.remove("red-border");
    dontMatchClass.classList.add("none");
  });

  var buttonform = document.getElementById("continue");
  buttonform.onclick = function button(event) {
    if (
      validateEmail(emailInput.value) &&
      validatePassword(passwordInput.value)
    ) {
      alert("email" + emailInput.value + "password" + passwordInput.value);
    } else {
      if (!validateEmail(emailInput.value)) {
        alert("ERROR =" + emailInput.value);
      }
      if (!validatePassword(passwordInput.value)) {
        alert("ERROR =" + passwordInput.value);
      }
    }

    if (nameValidation(nameInput.value) && nameValidation(surnameInput.value)) {
      alert("name=" + nameInput.value + "lastname=" + surnameInput.value);
    } else {
      if (!nameValidation(nameInput.value)) {
        alert("ERROR=" + nameInput.value);
      }
      if (!nameValidation(surnameInput.value)) {
        alert("ERROR=" + surnameInput.value);
      }
    }

    if (validateId(idInput.value) && validateDate(birthdayInput.value)) {
      alert("Id=" + idInput.value + "date=" + birthdayInput.value);
    } else {
      if (!validateId(idInput.value)) {
        alert("ERROR=" + idInput.value);
      }
      if (!validateDate(birthdayInput.value)) {
        alert("ERROR=" + birthdayInput.value);
      }
    }
    if (validatePhone(phoneInput.value) && validateAddress(addressInput.value)) {
      alert("phone=" + phoneInput.value + "address" + addressInput.value);
    } else {
      if (!validatePhone(phoneInput.value)) {
        alert("ERROR=" + phoneInput.value);
      }
      if (!validateAddress(addressInput.value)) {
        alert("ERROR=" + addressInput.value);
      }
    }
    if (
      validateCity(cityInput.value) &&
      validateZip(zipInput.value) &&
      matchPassword(passwordRepeatInput.value)
    ) {
      alert("city=" + cityInput.value + "postal" + zipInput.value);
    } else {
      if (!validateCity(cityInput.value) && validateCity(cityInput.value)) {
        alert("ERROR=" + cityInput.value);
      }
      if (!validateZip(zipInput.value)) {
        alert("ERROR=" + zipInput.value);
      }
      if (!matchPassword(passwordRepeatInput.value)) {
        alert("ERROR=" + passwordRepeatInput.value);
      }
    }
  };
 var button = document.getElementById("continue");
  button.addEventListener("click", function (event) {
    urlSignUp =
    "name=" +
    nameInput.value +
    "&lastName=" +
    surnameInput.value +
    "&dni=" +
    idInput.value +
    "&dob=" +
    birthdayInput.value +
    "&phone=" +
    phoneInput.value +
    "&address=" +
    addressInput.value +
    "&zip=" +
    zipInput.value +
    "&city=" +
    cityInput.value +
    "&email=" +
    emailInput.value +
    "&password=" +
    passwordInput.value +
    "&password=" +
    passwordRepeatInput.value +
    event.preventDefault();
    if(
      nameValidation(nameInput.value) &&
      nameValidation(surnameInput.value) &&
      validateEmail(emailInput.value) &&
      validateDate(birthdayInput.value) &&
      validatePhone(passwordInput.value) &&
      validateAddress(addressInput.value) &&
      validateZip(zipInput.value) &&
      validateCity(cityInput.value) &&
      validateEmail(emailInput.value) &&
      validatePassword(passwordInput.value) &&
      matchPassword(passwordRepeatInput.value)
){
  fetch(urlSignUp)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.hasOwnProperty("data")) {
        var keys = Object.keys(data.data);
        for (var i = 1; i < keys.length; i++) {
          var key = keys[i];
          if (data.data.hasOwnProperty(key)) {
            var value = data.data[key];
            localStorage.setItem(key, value);
            alert(key + ": " + value);
          }
        }
      } else if (data.hasOwnProperty("errors")) {
        for (var i = 0; i < data.errors.length; i++) {
          var error = data.errors[i];
          if (error.hasOwnProperty("msg")) {
            alert(error.msg);
          }
        }
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", ReloadInfo());
function ReloadInfo() {
  nameInput.value = localStorage.getItem("name");
  surnameInput.value = localStorage.getItem("lastName");
  addressInput.value = localStorage.getItem("address");
  zipInput.value = localStorage.getItem("zip");
  birthdayInput.value = localStorage.getItem("dob");
  phoneInput.value = localStorage.getItem("phone");
  idInput.value = localStorage.getItem("dni");
  cityInput.value = localStorage.getItem("city");
  emailInput.value = localStorage.getItem("email");
  passwordInput.value = localStorage.getItem("password");
  passwordRepeatInput.value = localStorage.getItem("password");
}



  









































}