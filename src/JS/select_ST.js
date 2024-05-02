function confirmation() {
    var result = confirm("Do you want to search for this student?");
    if (result == true) {
        return true;
    } else {
        event.preventDefault();
    }
}

function checkValidation() {
    let st_name = document.getElementById("sname").value;
    let st_id = document.getElementById("ID").value;
    let flag = true;
    if (st_name == "") {
        alert("You must fill the Student name field");
        document.getElementById("sname").focus;
        flag = false;
        event.preventDefault();
    }
    var regularExpression = /[1-9]/;
    if (regularExpression.test(st_name)) {
        alert("The Student Name can not have numbers in it");
        document.getElementById("sname").focus;
        flag = false;
        event.preventDefault();
    }
    if (st_id != "") {
        if (st_id.length < 8) {
            alert("The id must be 8 numbers or more")
            document.getElementById("ID").focus;
            flag = false;
            event.preventDefault();
        }
        var regularExpression = /[a-z]/;
        if (regularExpression.test(st_id)) {
            alert("The id can not have characters in it");
            document.getElementById("ID").focus;
            flag = false;
            event.preventDefault();

        }
    } else {
        alert("You must fill the ID field");
        document.getElementById("ID").focus;
        flag = false;
        event.preventDefault();

    }
    if (flag) {
        confirmation()
    }
}