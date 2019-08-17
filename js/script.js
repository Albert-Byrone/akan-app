function validateForm (){
    var date = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var gender = document.getElementsByName("gender");

    //validate the date 
    if (date == "" || date == null) {

        document.getElementById("inputError").innerHTML = "date is required";
        document.getElementById("inputError").style.color = "red";
        return false;

    } else {
        if (!isNaN(date)) {
            if (date <= 0 || date > 31) {
                document.getElementById("inputError").innerHTML = "date is Invalid";
                document.getElementById("inputError").style.color = "red";
                return false;
            }
        } else {
            document.getElementById("inputError").innerHTML = "date is Empty";
            document.getElementById("inputError").style.color = "red";
            return false;
        }
    }
};

 //validate month
 if (month == "" || month == null) {
    document.getElementById("inputError").innerHTML = "Month is required";
    document.getElementById("inputError").style.color = "red";
    return false;
} else {
    if (!isNaN(month)) {
        if (month <= 0 || month > 31) {
            document.getElementById("inputError").innerHTML = "Month is Invalid";
            document.getElementById("inputError").style.color = "red";
            return false;
        }
    } else {

        document.getElementById("inputError").innerHTML = "Month is Empty";
        document.getElementById("inputError").style.color = "red";
        return false;
    }
}