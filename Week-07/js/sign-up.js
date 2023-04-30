window.onload = function () {
  var nameText = document.getElementById("nameText");
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

  var surnameText = document.getElementById("surnameText");
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

  var birthdayText = document.getElementById("birthdayText");
  var birthdayInput = document.getElementById("birthdayInput");
  var errorBirthdayClass = document.getElementById("birthdayError");

  function validateBirthDate(a) {
    var birthDate = new Date(a);
    var currentDate = new Date();
    var diference = currentDate.getTime() - birthDate.getTime();
    var age = Math.floor(diference / 1000606024365);
    if (age >= 12) {
      return true;
    }
    return false;
  }

  var phoneText = document.getElementById("phoneText");
  var phoneInput = document.getElementById("phoneInput");
  var errorPhoneClass = document.getElementById("phoneError");

  function hasNumbers(myString) {
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    for (var x = 0; x < myString.length; x++) {
      if (numbers.includes(myString[x])) {
        return true;
      }
    }
    return false;
  }

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

  var addrressInput = document.getElementById("addressInput");
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

  function hasNumbers(myString) {
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    for (var x = 0; x < myString.length; x++) {
      if (numbers.includes(myString[x])) {
        return true;
      }
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

  var errorCity = document.getElementById("cityError");

  function hasNumbers(myString) {
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    for (var x = 0; x < myString.length; x++) {
      if (numbers.includes(myString[x])) {
        return true;
      }
    }
    return false;
  }

  function validateCity(hasNumbersAndChar) {
    if (hasNumbersAndChar.length >= 3) {
      for (var x = 0; x < hasNumbersAndChar.length; x++) {
        if (!hasNumbers(hasNumbersAndChar[x])) {
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
    return false;
  }

 
  var cityInput = document.getElementById("cityInput");
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

  function hasNumbers(myString) {
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    for (var x = 0; x < myString.length; x++) {
      if (numbers.includes(myString[x])) {
        return true;
      }
    }
    return false;
  }

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

  var passwordInput = document.getElementById("password");
  var errorPasswordClass = document.getElementById("passwordError");

  passwordInput.addEventListener("blur", function (event) {
    if (!hasNumbersAndChar(event.target.value)) {
      passwordInput.classList.add("red-border");
      errorPasswordClass.classList.remove("none");
    }
  });

  passwordInput.addEventListener("focus", function (event) {
    passwordInput.classList.remove("red-border");
    errorPasswordClass.classList.add("none");
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
    if (myString.length >= 8) {
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
