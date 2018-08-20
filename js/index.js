"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var productName = document.querySelector(".container section:nth-child(1) h1");
var productImg = document.querySelector(".container section:nth-child(1) img");
var greenBTN = document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(1) input");
var redBTN = document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(2) input");
var blackBTN = document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(3) input");
var blueBTN = document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(4) input");
var smallBTN = document.querySelector(".container section:nth-child(1) div:nth-child(5) p:nth-child(1) input");
var mediumBTN = document.querySelector(".container section:nth-child(1) div:nth-child(5) p:nth-child(2) input");
var largeBTN = document.querySelector(".container section:nth-child(1) div:nth-child(5) p:nth-child(3) input");
var nameInput = document.querySelector("form input:nth-child(2)");
var emailInput = document.querySelector("form input:nth-child(4)");
var address1Input = document.querySelector("form div:nth-child(5) div:nth-child(1) input");
var address2Input = document.querySelector("form div:nth-child(5) div:nth-child(2) input");
var cityInput = document.querySelector("form div:nth-child(6) div:nth-child(1) input");
var stateInput = document.querySelector("form div:nth-child(6) div:nth-child(2) input");
var zipInput = document.querySelector("form div:nth-child(6) div:nth-child(3) input");
var countrySelect = document.querySelector("form fieldset select");
var productDesc = document.querySelector(".container section:nth-child(3) fieldset > div:nth-child(2) p:nth-child(1)");
var custName = document.querySelector(".container section:nth-child(3) fieldset ul:nth-child(6) li:nth-child(2)");
var custAddress1 = document.querySelector(".container section:nth-child(3) fieldset ul:nth-child(6) li:nth-child(3)");
var custAddress2 = document.querySelector(".container section:nth-child(3) fieldset ul:nth-child(6) li:nth-child(4)");
var custCityStateZip = document.querySelector(".container section:nth-child(3) fieldset ul:nth-child(6) li:nth-child(5)");
var custCountry = document.querySelector(".container section:nth-child(3) fieldset ul:nth-child(6) li:nth-child(6)");
var submitBTN = document.querySelector(".container section:nth-child(3) fieldset div:nth-child(7) input");

function changeProduct() {
    var size = document.querySelector('input[name="size"]:checked').value;
    var color = document.querySelector('input[name="color"]:checked').value;

    productName.innerHTML = size + " " + color + " JLA Shirt";
    productImg.src = "../img/" + color + ".jpg";
    productDesc.innerHTML = size + " " + color + " shirt";
}

greenBTN.addEventListener('change', function () {
    changeProduct();
    document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(1) input").setAttribute('aria-checked', 'true');
    document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(2) input").setAttribute('aria-checked', 'false');
    document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(3) input").setAttribute('aria-checked', 'false');
    document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(4) input").setAttribute('aria-checked', 'false');
}, false);

redBTN.addEventListener('change', function () {
    changeProduct();
    document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(1) input").setAttribute('aria-checked', 'false');
    document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(2) input").setAttribute('aria-checked', 'true');
    document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(3) input").setAttribute('aria-checked', 'false');
    document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(4) input").setAttribute('aria-checked', 'false');
}, false);

blackBTN.addEventListener('change', function () {
    changeProduct();
    document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(1) input").setAttribute('aria-checked', 'false');
    document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(2) input").setAttribute('aria-checked', 'false');
    document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(3) input").setAttribute('aria-checked', 'true');
    document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(4) input").setAttribute('aria-checked', 'false');
}, false);

blueBTN.addEventListener('change', function () {
    changeProduct();
    document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(1) input").setAttribute('aria-checked', 'false');
    document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(2) input").setAttribute('aria-checked', 'false');
    document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(3) input").setAttribute('aria-checked', 'false');
    document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(4) input").setAttribute('aria-checked', 'true');
}, false);

smallBTN.addEventListener('change', function () {
    changeProduct();
    document.querySelector(".container section:nth-child(1) div:nth-child(5) p:nth-child(1) input").setAttribute('aria-checked', 'true');
    document.querySelector(".container section:nth-child(1) div:nth-child(5) p:nth-child(2) input").setAttribute('aria-checked', 'false');
    document.querySelector(".container section:nth-child(1) div:nth-child(5) p:nth-child(3) input").setAttribute('aria-checked', 'false');
}, false);

mediumBTN.addEventListener('change', function () {
    changeProduct();
    document.querySelector(".container section:nth-child(1) div:nth-child(5) p:nth-child(1) input").setAttribute('aria-checked', 'false');
    document.querySelector(".container section:nth-child(1) div:nth-child(5) p:nth-child(2) input").setAttribute('aria-checked', 'true');
    document.querySelector(".container section:nth-child(1) div:nth-child(5) p:nth-child(3) input").setAttribute('aria-checked', 'false');
}, false);

largeBTN.addEventListener('change', function () {
    changeProduct();
    document.querySelector(".container section:nth-child(1) div:nth-child(5) p:nth-child(1) input").setAttribute('aria-checked', 'false');
    document.querySelector(".container section:nth-child(1) div:nth-child(5) p:nth-child(2) input").setAttribute('aria-checked', 'true');
    document.querySelector(".container section:nth-child(1) div:nth-child(5) p:nth-child(3) input").setAttribute('aria-checked', 'false');
}, false);

function cityStateZip() {
    custCityStateZip.innerHTML = cityInput.value + ", " + stateInput.value + " " + zipInput.value;
}

function getCountryName() {
    var countryvalue = countrySelect.value;
    if (countryvalue === "US") {
        return "";
    } else {
        return document.querySelector("option[value='" + countryvalue + "']").innerHTML;
    }
}

function removeErrors() {
    var allErrors = document.getElementsByClassName("error");
    while (allErrors[0]) {
        allErrors[0].parentElement.removeChild(allErrors[0]);
    }
}

var Validator = function () {
    function Validator(input, type) {
        _classCallCheck(this, Validator);

        this.input = input;
        this.type = type;
        this.errors = [];
    }

    _createClass(Validator, [{
        key: "addError",
        value: function addError(message) {
            this.errors.push(message);
        }
    }, {
        key: "errorMessages",
        value: function errorMessages() {
            var status = this.input.validity;
            var fieldValue = this.input.value;
            if (status.typeMismatch && this.type === "email") {
                this.addError("Please use a valid email address.");
            }

            if (fieldValue.length === 0) {
                this.addError("This field is required.");
            }

            if (status.patternMismatch && this.type === "state") {
                this.addError("Please use 2 or 3 letter abbreviations for your state or province.");
            }

            if (status.patternMismatch && this.type === "zip") {
                this.addError("Your zipcode must be 5 or 9 digits.");
            }

            return this.errors;
        }
    }]);

    return Validator;
}();

submitBTN.addEventListener("click", function (event) {
    var errorcount = 0;
    event.preventDefault();
    removeErrors();
    var validateName = new Validator(nameInput, "name");
    var nameErrors = validateName.errorMessages();

    if (nameErrors.length > 0) {
        errorcount++;
        nameErrors.forEach(function (err) {
            nameInput.insertAdjacentHTML('afterend', "<p class='error'>" + err + "</p>");
        });
    }

    var validateEmail = new Validator(emailInput, "email");
    var emailErrors = validateEmail.errorMessages();

    if (emailErrors.length > 0) {
        errorcount++;
        emailErrors.forEach(function (err) {
            emailInput.insertAdjacentHTML('afterend', "<p class='error'>" + err + "</p>");
        });
    }

    var validateAddress = new Validator(address1Input, "address");
    var addressErrors = validateAddress.errorMessages();

    if (addressErrors.length > 0) {
        errorcount++;
        addressErrors.forEach(function (err) {
            address1Input.insertAdjacentHTML('afterend', "<p class='error'>" + err + "</p>");
        });
    }

    var validateCity = new Validator(cityInput, "city");
    var cityErrors = validateCity.errorMessages();

    if (cityErrors.length > 0) {
        errorcount++;
        cityErrors.forEach(function (err) {
            cityInput.insertAdjacentHTML('afterend', "<p class='error'>" + err + "</p>");
        });
    }

    var validateState = new Validator(stateInput, "state");
    var stateErrors = validateState.errorMessages();

    if (stateErrors.length > 0) {
        errorcount++;
        stateErrors.forEach(function (err) {
            stateInput.insertAdjacentHTML('afterend', "<p class='error'>" + err + "</p>");
        });
    }

    var validateZip = new Validator(zipInput, "zip");
    var zipErrors = validateZip.errorMessages();

    if (zipErrors.length > 0) {
        errorcount++;
        zipErrors.forEach(function (err) {
            zipInput.insertAdjacentHTML('afterend', "<p class='error'>" + err + "</p>");
        });
    }

    if (errorcount === 0) {
        completeOrder();
    }
});

function completeOrder() {
    document.querySelector(".container section:nth-child(3)").style.width = "100%";
    document.querySelector(".container section:nth-child(3)").style.zIndex = "999";
    document.querySelector(".container section:nth-child(3) fieldset ul:nth-child(6) div").style.visibility = "visible";
}

nameInput.addEventListener('keyup', function () {
    custName.innerHTML = nameInput.value;
}, false);

address1Input.addEventListener('keyup', function () {
    custAddress1.innerHTML = address1Input.value;
}, false);

address2Input.addEventListener('keyup', function () {
    custAddress2.innerHTML = address2Input.value;
}, false);

cityInput.addEventListener('keyup', function () {
    cityStateZip();
}, false);

stateInput.addEventListener('keyup', function () {
    cityStateZip();
}, false);

zipInput.addEventListener('keyup', function () {
    cityStateZip();
}, false);

countrySelect.addEventListener('change', function () {
    custCountry.innerHTML = getCountryName();
}, false);
