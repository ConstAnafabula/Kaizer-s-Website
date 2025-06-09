let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let getKit = document.getElementById('get-the-kit');

function changeBgColor(event) {
    event.target.style.borderColor = 'red';
}

button1.addEventListener('click', function(event){
    event.target.style.borderColor = 'white';
    changeBgColor({target: button2});
    changeBgColor({target: button3});
});

button2.addEventListener('click', function(event){
    event.target.style.borderColor = 'white';
    changeBgColor({target: button1});
    changeBgColor({target: button3});
});

button3.addEventListener('click', function(event){
    event.target.style.borderColor = 'white';
    changeBgColor({target: button1});
    changeBgColor({target: button2});
});

getKit.onclick = function() {
    window.alert('KIT SEND SUCCESSFULLY');
};