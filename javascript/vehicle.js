function validate()
{
    // var email = document.getElementById("mail");
    // var password = document.getElementById("pass");
    var firstName = document.getElementById("fname");
    var lastName = document.getElementById("lname");
    var vehicleManufacturer = document.getElementById("vmanufacturer");

    var vehicleYear = document.getElementById("vyear");
    var licensePlate = document.getElementById("lplate");
    var vehicleColor = document.getElementById("vcolor");

    if (firstName.value.trim() == "" || lastName.value == "" || vehicleManufacturer == "" || vehicleYear == "" || licensePlate == "" || vehicleColor == "")
    {
        alert("Please Input Your Details");
        return false;
    }
    else{   
        true;
    }


}