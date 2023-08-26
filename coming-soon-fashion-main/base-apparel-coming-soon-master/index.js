// Receive an error message when the `form` is submitted if:
//  - The `input` field is empty
//  - The email address is not formatted correctly

const form = document.querySelector("form")
const email = document.getElementById("email");
const divEmail = document.getElementById("form")
const errorMsg = document.getElementById("error-msg");

form.addEventListener('submit', e => {
  e.preventDefault();
  validateEmail();
});

function isValidEmail(email) {
  const regExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(String(email).toLowerCase());
}

function setError(msg) {
  errorMsg.innerText = msg;
  divEmail.classList.add('error');
  divEmail.classList.remove('success');
}

function setSuccess(){
  errorMsg.innerText = '';
  divEmail.classList.remove("error");
  divEmail.classList.add("success");
}

const validateEmail = () => {
  const emailValue = email.value.trim();

  if (emailValue === '') {
    setError('Email is required')
  } else if (!isValidEmail(emailValue)){
    setError('Provide a valid email address');
  } else {
    setSuccess();
  }
}