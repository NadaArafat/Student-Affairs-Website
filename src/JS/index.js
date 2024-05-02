const form = document.querySelector("#signin-form");
const errorMsg = document.querySelector(".msg.error");
const usernameInput = document.querySelector("#user");
const passwordInput = document.querySelector("#pass");

const validateUsername = () => {
  //valid if the user entered any value in username (!! for boolean casting)
  return !!usernameInput.value;
};

const validatePassword = () => {
  //valid if the user entered any value in username (!! for boolean casting)
  return !!passwordInput.value;
};

form.addEventListener("submit", (e) => {
  //Stop the browser default behavior (navigating to action)
  e.preventDefault();
  //error message if any
  let err = "";
  //validate input
  const isValidUsername = validateUsername();
  const isValidPassword = validatePassword();
  const isValid = isValidUsername && isValidPassword;
  if (isValid) {
    /*Submit an AJAX request*/
  } else {
    //Show error message based on missing input
    if (!isValidUsername) err = "Username field is required!";
    else if (!isValidPassword) err = "Password field is required!";
  }
  errorMsg.textContent = err;
});
