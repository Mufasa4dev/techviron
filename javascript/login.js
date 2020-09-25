function validate()
{
    var email = document.getElementById("mail");
    var password = document.getElementById("pass");

    if (email.value.trim() == "" || password.value == "")
    {
        alert("Please Input Your Email and Password");
        return false;
    }
    else{   
        true;
    }


}