document.addEventListener('DOMContentLoaded',function() {

const modal = document.querySelector('.modal')
const signIn = document.querySelector('.signin')
const close = document.querySelector('.close')
const submit = document.querySelector('.submit')
const user = document.querySelector('#user');
const password = document.querySelector('#pass')

// 1. When the user presses the .signin button, display the modal window

signIn.addEventListener('click', function() {
  modal.style.display = "inline-block";
});

// 2.When the user presses the .close button, hide the modal window

close.addEventListener('click', function() {
  modal.style.display = 'none';
});

// 3.When the user presses the .submit button, add an .error class to both input elements

submit.addEventListener('click', function() {
  document.getElementById('user').classList.add('error');
  document.getElementById('pass').classList.add('error');
});

// 4.When the user puts their cursor in one of the input fields, remove the .error class

user.addEventListener('click', function(event) {
  if (user.classList.contains('error') === true) {
    user.classList.remove('error');
  }});

password.addEventListener('click', function(event) {
    if (password.classList.contains('error') === true) {
      password.classList.remove('error');
    }});


});
