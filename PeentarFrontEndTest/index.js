// general form validate

$(document).ready(function (){
    validateGeneralForm();
    $('#firstName, #lastName').change(validateGeneralForm);
});

function validateGeneralForm(){
    if ($('#firstName').val().length        > 0  &&
        $('#lastName').val().length         > 0 )  {
        $("#generalInformationButton").prop("disabled", false);
    }
    else {
        $("#generalInformationButton").prop("disabled", true);
    }
}

// contact validate

$(document).ready(function (){
    validateContact();
    $('#inputEmail').change(validateContact);
});

function validateContact(){
    if ($('#inputEmail').val().length        > 0 )  {
        $("#contactButton").prop("disabled", false);
    }
    else {
        $("#contactButton").prop("disabled", true);
    }
}

// button next function

var next = true;
function goContact(){
    if(next == true) {
        document.getElementById("page1").style.display = "none";
        document.getElementById("active1").style.borderBottom = "3px solid transparent";
        document.getElementById("active2").style.borderBottom = "3px solid whitesmoke";
        document.getElementById("page2").style.display = "flex";
        event.preventDefault();
        next = true;
    }
}

var cont = true;
function goPassword(){
    if(cont == true) {
        document.getElementById("page2").style.display = "none";
        document.getElementById("page3").style.display = "flex";
        document.getElementById("active2").style.borderBottom = "3px solid transparent";
        document.getElementById("active3").style.borderBottom = "3px solid whitesmoke";
        event.preventDefault();
        cont = true;
    }
}


// password validate

function complete() {
    var a = password.pass.value;
    var b = password.confirmPass.value;
    if (a == b) {
        document.getElementById("active3").style.borderBottom = "3px solid transparent";
        document.getElementById("active4").style.borderBottom = "3px solid whitesmoke";
        document.getElementById("page3").style.display = "none";
        document.getElementById("page4").style.display = "flex";
        event.preventDefault();
        return true;
    }
    else {
        document.getElementById("warning").innerHTML = "password did not match";
        event.preventDefault();
        return false;
    }
}

