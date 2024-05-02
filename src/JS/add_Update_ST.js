function confirmation() {
    var result = confirm("Do you want to add student?");
    if (result == true) {
        return true;
    } else {
        event.preventDefault();
    }
}

function checkform() {
    let st_name = document.getElementById("name").value;
    let st_id = document.getElementById("id").value;
    let st_mail = document.getElementById("mail").value;
    let st_gpa = document.getElementById("gpa").value;
    let st_date = document.getElementById("date").value;
    let st_mob = document.getElementById("mob").value;
    let flag = true;


    if (st_name == "") {
        alert("You must fill the Student name field");
        document.getElementById("name").focus;
        flag = false;
        event.preventDefault();
    }
    var regularExpression = /[1-9]/;
    if (regularExpression.test(st_name)) {
        alert("The Student Name can not have numbers in it");
        document.getElementById("name").focus;
        flag = false;
        event.preventDefault();
    }
    if (st_id != "") {
        if (st_id.length < 8) {
            alert("The id must be 8 numbers or more")
            document.getElementById("id").focus;
            flag = false;
            event.preventDefault();
        }
        var regularExpression = /[a-z]/;
        if (regularExpression.test(st_id)) {
            alert("The id can not have characters in it");
            document.getElementById("id").focus;
            flag = false;
            event.preventDefault();

        }
    } else {
        alert("You must fill the ID field");
        document.getElementById("id").focus;
        flag = false;
        event.preventDefault();

    }
    if (st_mail == "") {
        alert("You must fill the Email field");
        document.getElementById("mail").focus;
        flag = false;
        event.preventDefault();
    }
    if (st_date == "") {
        alert("You must fill the Date field");
        document.getElementById("date").focus;
        flag = false;
        event.preventDefault();
    }
    if (st_mob == "") {
        alert("You must fill the Mobile Number field");
        document.getElementById("mob").focus;
        flag = false;
        event.preventDefault();
    }
    var regularExpression = /[a-z]/;
    if (regularExpression.test(st_mob)) {
        alert("The Mobile Number can not have characters in it");
        document.getElementById("mob").focus;
        flag = false;
        event.preventDefault();
    }
    if (st_gpa > 4) {
        alert("GPA can not be greater than 4")
        document.getElementById("gpa").focus;
        flag = false;
        event.preventDefault();
    }
    var regularExpression = /[a-z]/;
    if (regularExpression.test(st_gpa)) {
        alert("The GPA can not have characters in it");
        document.getElementById("gpa").focus;
        flag = false;
        event.preventDefault();
    }
    if (st_gpa < 1) {
        alert("GPA can not be less than 1")
        document.getElementById("gpa").focus;
        flag = false;
        event.preventDefault();
    }
    if (document.getElementById('act').checked == false && document.getElementById('inact').checked == false) {
        alert("please ckeck your activity option");
        flag = false;
        event.preventDefault();
    }
    if (document.getElementById('male').checked == false && document.getElementById('female').checked == false) {
        alert("please ckeck your gender option");
        flag = false;
        event.preventDefault();
    }

    if (flag) {
        confirmation()
    }

}