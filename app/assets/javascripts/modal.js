function modalReady() {
  // setup all modal forms
  signUpForm = $('#signup-form');
  signUpForm.remove();
  registerForm = $('#register-form');
  registerForm.remove();
  modal = $('#modal');
  modal.find('form').remove();
}

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
