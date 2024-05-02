function confirmation() {
    var result = confirm("Do you want to delete student?");
    if (result == true) {
        return true;
    } else {
        event.preventDefault();
    }
}

function checkValidation() {
    let st_id = document.getElementById("id").value;
    let flag = true;
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
    if (flag) {
        confirmation()
    }
}