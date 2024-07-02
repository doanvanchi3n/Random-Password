const passWordBox = document.getElementById("password");
const lenght =12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
const lowcCase = "abcdefghijklomnpqrstuvwxyz";
const number ="0123456789";
const symbol ="@#$%^&*()_}{[]></-=";

const allChars = upperCase + lowcCase + number + symbol;
function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowcCase[Math.floor(Math.random() * lowcCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(lenght > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passWordBox.value = password;
}
function copyPassword() {
    passWordBox.select();
    document.execCommand("copy");
}

