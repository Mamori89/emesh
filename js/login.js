document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("rememberMe") === "true") {
    document.getElementById("rememberMe").checked = true;
  }
});

function lsRememberMe() {
  let rememberMeCheckbox = document.getElementById("rememberMe");
  localStorage.setItem("rememberMe", rememberMeCheckbox.checked);
}

function getGreetingMessage(name) {
  let now = new Date();
  let hours = now.getHours();
  let greeting;

  if (hours < 12) {
    greeting = "Good morning,";
  } else if (hours < 18) {
    greeting = "Good afternoon,";
  } else {
    greeting = "Good evening,";
  }

  return `${greeting} ${name}!`;
}

let loginButton = document.getElementById("loginButton");
let unameInput = document.getElementById("uname");
let pwdInput = document.getElementById("pwd");
let forgotPwdLink = document.getElementById("forgotPwd");
let rememberMe = document.getElementById("rememberMe");
let rLabel = document.getElementById("rlabel");

function hideFields() {
  unameInput.style.display = "none";
  rememberMe.style.display = "none";
  rLabel.style.display = "none";
  pwdInput.style.display = "none";
  forgotPwdLink.style.display = "none";
  loginButton.value = "Logout";
  loginButton.addEventListener("click", logout);
}

function logout() {
  headerText.textContent = "You are now logged out.";
  unameInput.style.display = "";
  pwdInput.style.display = "";
  forgotPwdLink.style.display = "";
  rLabel.style.display = "";
  rememberMe.style.display = "";
  loginButton.value = "Login";
  loginButton.removeEventListener("click", logout);
}

function login() {
  let username = unameInput.value;
  let password = pwdInput.value;
  let rememberMeCheckbox = document.getElementById("rememberMe").checked;
  let headerText = document.getElementById("headerText");
  if (username === "mvogl" && password === "123456") {
    headerText.textContent = getGreetingMessage("Michael");
    if (rememberMeCheckbox) {
      lsRememberMe();
    }
    hideFields();
  } else if (username === "mmomirov" && password === "123456") {
    headerText.textContent = getGreetingMessage("Mario");
    if (rememberMeCheckbox) {
      lsRememberMe();
    }
    hideFields();
  } else if (username === "CodersBay" && password === "cbpw123") {
    headerText.textContent = getGreetingMessage("Coders.Bay");
    if (rememberMeCheckbox) {
      lsRememberMe();
    }
    hideFields();
  } else {
    headerText.textContent = "Invalid username or password";
  }
}
