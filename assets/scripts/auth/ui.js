const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text(response.user.email + ' successfully signed up')
  $('#signUp').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('success-message')
  $('#signUp').hide()
}

const onSignUpFailure = function (response) {
  $('#message').text('Sign up failed')
  $('#message').removeClass()
  $('#message').addClass('failure-message')
  $('#signUp').trigger('reset')
  $('#signIn').trigger('reset')
}

const onSignInSuccess = function (response) {
  $('#message').text(response.user.email + ' successfully signed in')
  $('#signIn').trigger('reset')
  store.user = response.user
  $('#changePassword').show()
  $('#signOut').show()
  $('#signIn').hide()
  $('#signUp').hide()
  $('#message').show()
}

const onSignInFailure = function (response) {
  $('#message').text('Sign in failed')
  $('#signIn').trigger('reset')
  $('#signUp').trigger('reset')
}

const onChangePasswordFailure = function (response) {
  $('#message').text('Change Password failed')
  $('#changePassword').trigger('reset')
}

const onChangePasswordSuccess = function (response) {
  $('#message').text('Change Password Succeeded')
  $('#changePassword').trigger('reset')
  $('message').show()
}

const onSignOutFailure = function (response) {
  $('#message').text('Sign Out failed')
  $('#signUp').trigger('reset')
  $('#signIn').trigger('reset')
}

const onSignOutSuccess = function (response) {
  $('#message').text('Sign Out Succeeded')
  $('#message').show('Sign Out failed')
  $('#changePassword').hide()
  $('#signOut').hide()
  $('#signIn').show()
  $('#signUp').show('reset')
  $('#signUp').trigger('reset')
  $('#changePassword').trigger('reset')
  store.user = null
}

module.exports = {
  onSignUpFailure,
  onSignUpSuccess,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordFailure,
  onChangePasswordSuccess
}
