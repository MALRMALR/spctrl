$(document).ready(function(){
  signUpForm = $('#signup-form');
  signUpForm.remove();
  registerForm = $('#register-form');
  registerForm.remove();
  modal = $('#modal');
  modal.find('form').remove();
});

function showSignUp() {
  $('.form-container').empty();
  modal.find('.form-container').append(signUpForm);
  signUpForm.show();
  modal.show();
}

function showLogIn() {
  $('.form-container').empty();
  modal.find('.form-container').append(registerForm);
  registerForm.show();
  modal.show();
}

function hideModal() {
  $('#modal').hide();
}

// function showSignUp() {
//   var modal = $('#modal');
//   modal.find('form').remove();
//   var signUpForm = $('<form class="user_signup" action="/users" method="POST">');
//   var usernameInput = $('<input type="text" name="user[username]" value="Username">');
//   var passwordInput = $('<input type="password" name="user[password]">');
//   var pwConfirmInput = $('<input type="password" name="user[password_confirmation]">');
//   var button = $('<button class="signUp">Sign Up</button>');
//   signUpForm.append(usernameInput).append(passwordInput).append(pwConfirmInput).append(button);
//   var form = modal.append(signUpForm);
//   form.show();
// }

// function showLogIn() {
//   var modal = $('#modal');
//   modal.find('form').remove();
//   var logInForm = $('<form class="user_login" action="/sessions" method="POST">');
//   var usernameInput = $('<input type="text" name="username" value="Username">');
//   var passwordInput = $('<input type="password" name="password" value="Password">');
//   var button = $('<button class="logIn">Log In</button>');
//   authenticity = <%#= hidden_field_tag :authenticity_token, form_authenticity_token %>
//   authToken = $(authenticity);
//   logInForm.append(usernameInput).append(passwordInput).append(authToken).append(button);
//   var form = modal.append(logInForm);
//   form.show();
// }
