/* ---------- Get Element ---------- */

var s = function (id) {
    return document.getElementById(id);
}

/* ---------- Main Function ---------- */

// variable declaration
var reg = function () {
    var email1 = s("email_1").value;
    var email2 = s("email_2").value;
    var name = s("name").value;
    var isValid = true;


    // validate the first email address
    if (email1 == "") { 
        s("email_1_error").firstChild.nodeValue = "This field is required.";
        isValid = false;
    } else {
        s("email_1_error").firstChild.nodeValue = "";
    } 

    // validate the second email address
    if (email2 == "") { 
        s("email_2_error").firstChild.nodeValue = "This field is required.";
        isValid = false; 
    } else if (email1 !== email2) { 
        s("email_2_error").firstChild.nodeValue = "E-mails must match.";
        isValid = false;
    } else {
        s("email_2_error").firstChild.nodeValue = "";
    }

    // validate the name entry  
    if (name == "") {
        s("name_error").firstChild.nodeValue = "This field is required.";
        isValid = false;
    } 
    else {
        s("name_error").firstChild.nodeValue = "";
    }

    // submit the form if all entries are valid
    if (isValid) {
        alert("Thank you for joining our e-mail list!");
        s("reg").submit();
        s("reg").reset();
        
    }
}

window.onload = function () {
    s("join").onclick = reg;
}


