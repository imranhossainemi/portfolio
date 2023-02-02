const form = document.querySelector('.form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const msg = document.getElementById('msg');

form.addEventListener('submit', function(e) => {

    if(name.value === '') {
        document.getElementById('nameLb').innerHTML = "Please Enter your name and It's need be under 30 characters";
    }

});