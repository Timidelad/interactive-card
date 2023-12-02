function cardNumber(input) {
    const maxLength = 15; // Set your desired maximum length
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
    }
}

function twoNumberLength(input) {
    const maxLength = 2; // Set your desired maximum length
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
    }
}

function threeNumberLength(input) {
    const maxLength = 3; // Set your desired maximum length
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let inputElement = document.getElementById('cardholder-name');

    inputElement.addEventListener('input', function () {
      let inputValue = inputElement.value;

      // Remove non-alphabetic characters and spaces
      let sanitizedValue = inputValue.replace(/[^A-Za-z ]/g, '');

      // Update the input value with the sanitized value
      inputElement.value = sanitizedValue;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let numberElement = document.getElementById('card-number');

    numberElement.addEventListener('input', function () {
      var numberValue = numberElement.value;

      // Remove non-alphabetic characters and spaces
      var sanitizedNumberValue = numberValue.replace(/[^0-9]/g, '');

      // Update the input value with the sanitized value
      numberElement.value = sanitizedNumberValue;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let monthElement = document.getElementById('mm-num');

    monthElement.addEventListener('input', function () {
      var monthValue = monthElement.value;

      // Remove non-alphabetic characters and spaces
      var sanitizedmonthValue = monthValue.replace(/[^0-9]/g, '');

      // Update the input value with the sanitized value
      monthElement.value = sanitizedmonthValue;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let yearElement = document.getElementById('yy-num');

    yearElement.addEventListener('input', function () {
      let yearValue = yearElement.value;

      // Remove non-alphabetic characters and spaces
      let sanitizedyearValue = yearValue.replace(/[^0-9]/g, '');

      // Update the input value with the sanitized value
      yearElement.value = sanitizedyearValue;
    });
});


document.addEventListener('DOMContentLoaded', function () {
    let cvcElement = document.getElementById('cvc-num');

    cvcElement.addEventListener('input', function () {
      let cvcValue = cvcElement.value;

      // Remove non-alphabetic characters and spaces
      let sanitizedcvcValue = cvcValue.replace(/[^0-9]/g, '');

      // Update the input value with the sanitized value
      cvcElement.value = sanitizedcvcValue;
    });
});


function validateForm() {
    let card = document.forms['myForm']['cardholder'].value;
    let cardholder = card.toUpperCase();
    
    let number = document.forms['myForm']['number'].value;
    let exp = document.forms['myForm']['exp'].value;
    let num = document.forms['myForm']['num'].value;
    let cvc = document.forms['myForm']['cvc-nu'].value;

    //small-div-container 
    let container = document.getElementById('small-div-container');

    // form container 
    let formContainer = document.getElementById('form-id');

    //wrapper element
    let wrapper = document.createElement("div");
    wrapper.setAttribute('id', 'wrapper-container')

    //create the first element
    let firstElement = document.createElement('img');
    firstElement.src ="./image/icon-complete.svg";
    firstElement.setAttribute('id', 'img-id')

    // create the second element
    let secondElement = document.createElement('div');
    secondElement.setAttribute('id', 'bold')
    secondElement.textContent = 'THANK YOU';

    // create the third element
    let thirdElement = document.createElement('div');
    thirdElement.setAttribute('id', 'light')
    thirdElement.textContent = "we've added your card details";

    // create fourth element
    let fourthElement = document.createElement('a');
    fourthElement.href = 'index.html';
    fourthElement.setAttribute('id', 'link')
    fourthElement.textContent = 'continue';

    // append the new element to the wrapper 
    wrapper.appendChild(firstElement);
    wrapper.appendChild(secondElement);
    wrapper.appendChild(thirdElement);
    wrapper.appendChild(fourthElement);

    // Replace the original element with the wrapper element
    // container.replaceChild(wrapper,formContainer);
    
    if (cardholder == "" || cardholder == " ") {
        document.getElementById('cardholderP').innerHTML = "input is blank";
        
    };

    if (number == "" || number == " ") {
        document.getElementById('numberP').innerHTML = "input is blank";
    };

    if (exp == "" || num == "") {
        document.getElementById('inputP').innerHTML = 'input is blank';
    };

    if (exp == " " || num == " ") {
        document.getElementById('inputP').innerHTML = 'input is blank';
    };

    if (cvc == "" || cvc == " ") {
        document.getElementById('cvcP').innerHTML = 'input is blank';
        return false
    };

    document.getElementById('name-front-card').innerHTML = cardholder;
    document.getElementById('num-front-card').innerHTML = number;
    document.getElementById('month-front-card').innerHTML = exp;
    document.getElementById('year-front-card').innerHTML = num;
    document.getElementById('back-cvc').innerHTML = cvc;

    container.replaceChild(wrapper,formContainer);
};