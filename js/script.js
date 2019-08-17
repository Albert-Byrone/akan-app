var nameList = [
    {
        "Sunday": "Kwasi",
        "Monday": "Kwadwo",
        "Tuesday": "Kwabena",
        "Wednesday": "Kwaku",
        "Thursday": "Yaw",
        "Friday": "Kofi",
        "Saturday": "Kwame"
    },
    {
        "Sunday": "Akosua",
        "Monday": "Adwoa",
        "Tuesday": "Abenaa",
        "Wednesday": "Akua",
        "Thursday": "Yaa",
        "Friday": "Afua",
        "Saturday": "Ama"
    }]

    var weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];



//validate the inputs
function validateForm() {
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var gender = document.getElementsByName("gender");
    var i = 0;
    var formValid = false;

    if (day == "" || day == null) {

        document.getElementById("inputError").innerHTML = "Day is required";
        document.getElementById("inputError").style.color = "red";
        return false;

    } else {
        if (!isNaN(day)) {
            if (day <= 0 || day > 31) {
                document.getElementById("inputError").innerHTML = "Day is Invalid";
                document.getElementById("inputError").style.color = "red";
                return false;
            }
        } else {
            document.getElementById("inputError").innerHTML = "Day is Empty";
            document.getElementById("inputError").style.color = "red";
            return false;
        }
    }
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

    //validate year
    if (year == "" || year == null) {
        document.getElementById("inputError").innerHTML = "Year is Empty";
        document.getElementById("inputError").style.color = "red";
        return false;

    } else {
        if (!isNaN(year)) {
            if (year <= 0 || year > 2020) {

                document.getElementById("inputError").innerHTML = "Year is empty";
                document.getElementById("inputError").style.color = "red";
                return false;
            }
        } else {

            document.getElementById("inputError").innerHTML = "Year is Invalid";
            document.getElementById("inputError").style.color = "red";
            return false;
        }
    }
    //check for gender
    while (!formValid && i < gender.length) {
        if (gender[i].checked)
            formValid = true;
        var genderValue = gender[i].value;
        i++;
    }
    if (!formValid) {
        document.getElementById("the-gender").style.color = 'red';
        return false;
    }

    var userDetails = {
        myDate: day,
        myMonth: month,
        myYear: year,
        myGender: genderValue
    };

    var details = {
        userDetails: userDetails,
        formValid: formValid
    }
    return details;
}