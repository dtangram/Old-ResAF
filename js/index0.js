//cached element variables

//product view
const elproductlegend = document.querySelector("#productlegend");
const elproductimage = document.querySelector("#productimage");

//radio buttons
const elcolorselect = document.querySelector("#colorselect");
const elradbtnblack = document.querySelector("#black");
const elradbtnorange = document.querySelector("#orange");
const elradbtngrey = document.querySelector("#grey");
const elradbtncalico = document.querySelector("#calico");

const elsizeselect = document.querySelector("#sizeselect");
const elradbtnsmall = document.querySelector("#size_small");
const elradbtnmeduim = document.querySelector("#size_medium");
const elradbtnlarge = document.querySelector("#size_large");
//shipping fields

const elname = document.querySelector("#name");
const elemail = document.querySelector("#email");
const eladdress1 = document.querySelector("#address1");
const eladdress2 = document.querySelector("#address2");
const elcity = document.querySelector("#city");
const elstate = document.querySelector("#state");
const elzipcode = document.querySelector("#zipcode");
const elcountry = document.querySelector("#country");

//order summary fields

const elsumproductname = document.querySelector("#sumproductname");

const elusername = document.querySelector("#username");
const eluseraddress = document.querySelector("#useraddress");
const eluseraddress2 = document.querySelector("#useraddress2");
const elcitystatezip = document.querySelector("#citystatezip");
const elshipcountry = document.querySelector("#shipcountry");

//submit button

const elsubmit = document.querySelector("#submit");





/*
Begin updating Product Choice
*/

function changeProduct() {
    let size = document.querySelector('input[name="size"]:checked').value;
    let color = document.querySelector('input[name="color"]:checked').value;
    
    elproductlegend.innerHTML = size +" "+ color + " Cat";
    elproductimage.src = "images/Cat" + color + ".jpg";
    elproductimage.alt = "Picture of a " + color + " cat"
    elsumproductname.innerHTML = size +" "+ color + " Cat";

}
//cat type event listeners
elradbtnblack.addEventListener('change', function () {
    changeProduct();
    document.querySelector("#blacklabel").setAttribute('aria-checked','true');
    document.querySelector("#orangelabel").setAttribute('aria-checked','false');
    document.querySelector("#greylabel").setAttribute('aria-checked','false');
    document.querySelector("#calicolabel").setAttribute('aria-checked','false');
}, false);

elradbtnorange.addEventListener('change', function () {
    changeProduct();
    document.querySelector("#blacklabel").setAttribute('aria-checked','false');
    document.querySelector("#orangelabel").setAttribute('aria-checked','true');
    document.querySelector("#greylabel").setAttribute('aria-checked','false');
    document.querySelector("#calicolabel").setAttribute('aria-checked','false');
}, false);

elradbtngrey.addEventListener('change', function () {
    changeProduct();
    document.querySelector("#blacklabel").setAttribute('aria-checked','false');
    document.querySelector("#orangelabel").setAttribute('aria-checked','false');
    document.querySelector("#greylabel").setAttribute('aria-checked','true');
    document.querySelector("#calicolabel").setAttribute('aria-checked','false');
}, false);

elradbtncalico.addEventListener('change', function () {
    changeProduct();
    document.querySelector("#blacklabel").setAttribute('aria-checked','false');
    document.querySelector("#orangelabel").setAttribute('aria-checked','false');
    document.querySelector("#greylabel").setAttribute('aria-checked','false');
    document.querySelector("#calicolabel").setAttribute('aria-checked','true');
}, false);

elradbtnsmall.addEventListener('change', function () {
    changeProduct();
    document.querySelector("#smallrdlbl").setAttribute('aria-checked','true');
    document.querySelector("#medrdlbl").setAttribute('aria-checked','false');
    document.querySelector("#largerdlbl").setAttribute('aria-checked','false');
}, false);

elradbtnmeduim.addEventListener('change', function () {
    changeProduct();
    document.querySelector("#smallrdlbl").setAttribute('aria-checked','false');
    document.querySelector("#medrdlbl").setAttribute('aria-checked','true');
    document.querySelector("#largerdlbl").setAttribute('aria-checked','false');
}, false);

elradbtnlarge.addEventListener('change', function () {
    changeProduct();
    document.querySelector("#smallrdlbl").setAttribute('aria-checked','false');
    document.querySelector("#medrdlbl").setAttribute('aria-checked','false');
    document.querySelector("#largerdlbl").setAttribute('aria-checked','true');
    
}, false);



/*
End updating Product Choice
*/

/*
Begin updating shipping information
*/

function cityStateZip() {
    elcitystatezip.innerHTML = elcity.value + ", " + elstate.value + " " + elzipcode.value;
}

function getCountryName() {
    let countryvalue = elcountry.value;
    if (countryvalue === "US") {
        return "";
    } else {
        return document.querySelector("option[value='" + countryvalue + "']").innerHTML
    }
}
/*
End updating shipping information
*/

/*
Begin validating user input
*/

//validator class

function removeErrors() {
    let allErrors = document.getElementsByClassName("error");
    while (allErrors[0]) {
        allErrors[0].parentElement.removeChild(allErrors[0]);
    }
}

class Validator {
    constructor(input, type) {
        this.input = input;
        this.type = type;
        this.errors = [];
    }

    addError(message) {
        this.errors.push(message);
    }

    getMessages() {
        const status = this.input.validity;
        const fieldValue = this.input.value;
        if (status.typeMismatch && this.type === "email") {
            this.addError("Please use a valid email address.");
        }

        if (status.patternMismatch && this.type === "name") {
            this.addError("Please use a valid name with only letters and spaces.");
        }

        if (fieldValue.length < 2 && this.type === "name") {
            this.addError("Please use a valid name with at least two letters.");
        }

        if (fieldValue.length === 0) {
            this.addError("This is a required field.");
        }

        if (status.patternMismatch && this.type === "state") {
            this.addError("Please use your 2 or 3 letter state or province abbreviation.");
        }

        if (status.patternMismatch && this.type === "zip") {
            this.addError("Please use your 5 or 9 digit zip code");
        }

        return this.errors;
    }
}



elsubmit.addEventListener("click", (event) => {

    //reset error count and displays
    let errorcount = 0;
    event.preventDefault();
    removeErrors();

    //check email for errors
    let validateEmail = new Validator(elemail, "email");
    let emailErrors = validateEmail.getMessages();

    if (emailErrors.length > 0) {
        errorcount++;
        emailErrors.forEach((err) => {
            elemail.insertAdjacentHTML('afterend', "<p class='error'>" + err + "</p>")
        })
    }

    //check name for errors
    let validateName = new Validator(elname, "name");
    let nameErrors = validateName.getMessages();

    if (nameErrors.length > 0) {
        errorcount++;
        nameErrors.forEach((err) => {
            elname.insertAdjacentHTML('afterend', "<p class='error'>" + err + "</p>")
        })
    }

    //checking address line 1
    let validateAddress = new Validator(eladdress1, "address");
    let addressErrors = validateAddress.getMessages();

    if (addressErrors.length > 0) {
        errorcount++;
        addressErrors.forEach((err) => {
            eladdress1.insertAdjacentHTML('afterend', "<p class='error'>" + err + "</p>")
        })
    }

    //checking city 
    let validateCity = new Validator(elcity, "city");
    let cityErrors = validateCity.getMessages();

    if (cityErrors.length > 0) {
        errorcount++;
        cityErrors.forEach((err) => {
            elcity.insertAdjacentHTML('afterend', "<p class='error'>" + err + "</p>")
        })
    }

    //checking state 
    let validateState = new Validator(elstate, "state");
    let stateErrors = validateState.getMessages();

    if (stateErrors.length > 0) {
        errorcount++;
        stateErrors.forEach((err) => {
            elstate.insertAdjacentHTML('afterend', "<p class='error'>" + err + "</p>")
        })
    }

    //checking state 
    let validateZip = new Validator(elzipcode, "zip");
    let zipErrors = validateZip.getMessages();

    if (zipErrors.length > 0) {
        errorcount++;
        zipErrors.forEach((err) => {
            elzipcode.insertAdjacentHTML('afterend', "<p class='error'>" + err + "</p>")
        })
    }
    if(errorcount === 0){
        completeOrder();

    }
});

function completeOrder(){
    document.querySelector("#section1").classList.add("disappear");
    document.querySelector("#section2").classList.add("disappear");
    document.querySelector("#submit").classList.add("disappear");
    document.querySelector("#section3").classList.add("ordercomplete");
    document.querySelector("body").classList.add("ordercomplete");
    document.querySelector("#checkmark").classList.add("ordercomplete");
    document.querySelector("#summary").classList.add("ordercomplete");
    document.querySelector("#hiddenheader").classList.add("ordercomplete");
}

/*
End validating user input
*/


/*
Begin event listeners for Shipping Details
*/
elname.addEventListener('keyup', function () {
    elusername.innerHTML = elname.value;
}, false);

eladdress1.addEventListener('keyup', function () {
    eluseraddress.innerHTML = eladdress1.value;
}, false);

eladdress2.addEventListener('keyup', function () {
    eluseraddress2.innerHTML = eladdress2.value;
}, false);

elcity.addEventListener('keyup', function () {
    cityStateZip();
}, false);

elstate.addEventListener('keyup', function () {
    cityStateZip();
}, false);

elzipcode.addEventListener('keyup', function () {
    cityStateZip();
}, false);

elcountry.addEventListener('change', function () {
    elshipcountry.innerHTML = getCountryName();
}, false);
/*
End event listeners for Shipping Details
*/

console.log("JS Loaded")