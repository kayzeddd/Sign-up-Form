const submitBtn = document.querySelector(".submitBtn");
const password = document.querySelector("#password");
const invalidText = document.querySelector(".invalid-pw");
const confirm_pw = document.querySelector("#confirm-pw");
const invalidText2 = document.querySelector(".invalid-confirm-pw");

password.addEventListener("focusout", check_pw);

function check_pw(){
    if (password.value.length < 8) {
        invalidText.textContent = "* minimum length 8 characters";
        password.value = "";
    }
    if (password.value.length >=8) {
        invalidText.textContent = "";
    }
}

submitBtn.addEventListener("click", check_confirm_pw);
confirm_pw.addEventListener("focusout", check_confirm_pw);

function check_confirm_pw() {
    if (confirm_pw.value !== password.value){
        invalidText2.textContent = "* the passwords do not match";
        confirm_pw.value = "";  
    }
    if (confirm_pw.value === password.value) {
        invalidText2.textContent = "";
    }
}

confirm_pw.addEventListener("input", addClass)

function addClass() {
    if (confirm_pw.value === password.value){
        confirm_pw.classList.add("confirm-valid");
    }
    else {
        confirm_pw.classList.remove("confirm-valid")
    }
}