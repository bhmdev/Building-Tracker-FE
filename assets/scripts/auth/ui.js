const store = require('./../store')
const showBuildingsTemplate = require('../templates/building-listing.handlebars')

const onSignUpSuccess = function (response) {
  $('#message').text(response.user.email + ' successfully signed up')
  $('#signUp').trigger('reset')
  $('#message').show()
  $('#message').addClass('success-message')
  $('#signUp').hide()
}

const onSignUpFailure = function (response) {
  $('#message').text('Sign up failed')
  $('#message').show()
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
  $('#buildingCreateForm').show()
  $('#buildingUpdateForm').show()
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
  $('#buildingCreateForm').hide()
  $('#buildingUpdateForm').hide()
  store.user = null
}

const onCreateBuildingSuccess = function (response) {
  $('#message').text(" you've successfully made a building ")
  $('#buildingCreateForm').trigger('reset')
  $('#message').show()
  $('#message').addClass('success-message')
}
const onUpdateBuildingSuccess = function (response) {
  $('#message').text("you've successfully updated a building ")
  $('#buildingCreateForm').trigger('reset')
  $('#message').show()
  $('#message').addClass('success-message')
}
const onUpdateBuildingFailure = function (response) {
  $('#message').text('Building failed')
  $('#buildingUpdateForm').trigger('reset')
  $('#message').show()
}

const onViewBuildingsFailure = function (response) {
  $('#message').text('Building failed')
  $('#view-building').trigger('reset')
  $('#message').show()
}

const onViewBuildingsSuccess = function (response) {
  $('#buildingDisplay').show()
  $('#message').text('Building failed')
  $('#message').show()
  const showBuildingsHTML = showBuildingsTemplate({buildings: response.buildings})
  $('#buildingDisplay').html('')
  $('#buildingDisplay').append(showBuildingsHTML)
}
const onDeleteSuccess = function (response) {
  $('#message').text('Building Deleted')
  $('#message').show()
  const showBuildingsHTML = showBuildingsTemplate({buildings: response.buildings})
  $('#buildingDisplay').html('')
  $('#buildingDisplay').append(showBuildingsHTML)
  $('#buildingDisplay').empty()
}
const clearBuildings = () => {
  $('#buildingDisplay').empty()
}

module.exports = {
  onSignUpFailure,
  onSignUpSuccess,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordFailure,
  onChangePasswordSuccess,
  onCreateBuildingSuccess,
  onUpdateBuildingSuccess,
  onUpdateBuildingFailure,
  onViewBuildingsFailure,
  onViewBuildingsSuccess,
  onDeleteSuccess,
  clearBuildings
}
