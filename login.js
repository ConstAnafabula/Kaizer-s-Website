let username = document.getElementById('uname');
let password = document.getElementById('pword');
let PasswordChange = document.getElementById('show-pword');
document.getElementById('submit').onclick = function() {
    let loginUsername = username.value;
    let loginPassword = password.value;
    if(loginUsername === "kaizer" && loginPassword === "kaizer123") {
        window.alert('login');
        console.log(username, password);
    }
    else {
        window.alert('wrong info');
    }
}

PasswordChange.addEventListener('change', function(){
    if(PasswordChange.checked) {
        password.type = "text";
    }
    else {
        password.type = "password";
    }
});