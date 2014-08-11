function modalReady() {
  signUpForm = $('#signup-form');
  registerForm = $('#register-form');
  modal = $('#modal');

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
