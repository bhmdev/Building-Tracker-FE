const store = require('./../store')
// const events = require('./events')
const api = require('./api')
const showBuildingsTemplate = require('../templates/building-listing.handlebars')

const onSignUpSuccess = function (response) {
  $('#message').text(response.user.email + ' successfully signed up')
  $('#signUp').trigger('reset')
  $('#message').show()
  $('#message').addClass('success-message')
  $('#signUp').hide()
  $('#signIn').trigger('reset')
}

const onSignUpFailure = function (response) {
  $('#message').text('Sign up failed')
  $('#message').show()
  $('#message').addClass('failure-message')
  $('#signUp').trigger('reset')
  $('#signIn').trigger('reset')
}

const onSignInSuccess = function (response) {
  $('#message').text(response.user.email + ' successfully signed in, fill out the form to add a building')
  $('#signIn').trigger('reset')
  store.user = response.user
  $('#changePassword').show()
  $('#signOut').show()
  $('#signIn').hide()
  $('#signUp').hide()
  $('#message').show()
  $('#buildingCreateForm').show()
  $('#buildingUpdateForm').hide()
  $('#clearBuildings').hide()
  $('#buildingCreateForm').trigger('reset')
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
  $('#clearBuildings').hide()
  $('#deleteBuilding').hide()
  $('#buildingDisplay').html('')
  $('#view-buildings').hide()
  store.user = null
}

const onCreateBuildingSuccess = function (response) {
  $('#message').text(" You've successfully made a building ")
  $('#buildingCreateForm').trigger('reset')
  $('#message').show()
  $('#message').addClass('success-message')
  $('#buildingDisplay').html('')
  // $('#view-buildings').show()
  // $('#buildingUpdateForm').show()
  api.viewBuilding()
    .then(onViewBuildingsSuccess)
    .catch(onViewBuildingsFailure)
}

const onCreateBuildingFailure = function (response) {
  $('#message').text('You cannot create a building without filling in all forms')
  $('#buildingUpdateForm').trigger('reset')
  $('#message').show()
}

const onUpdateBuildingSuccess = function (response) {
  $('#message').text("You've successfully updated a building ")
  $('#buildingUpdateForm').trigger('reset')
  $('#message').show()
  $('#message').addClass('success-message')
  $('#buildingDisplay').hide()
  api.viewBuilding()
    .then(onViewBuildingsSuccess)
    .catch(onViewBuildingsFailure)
}
const onUpdateBuildingFailure = function (response) {
  $('#message').text('Update Building failed')
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
  $('#message').text('Here is an inventory of your buildings')
  $('#message').show()
  $('#deleteBuilding').show()
  $('#clearBuildings').show()
  const showBuildingsHTML = showBuildingsTemplate({buildings: response.buildings})
  $('#buildingDisplay').html('')
  $('#buildingDisplay').append(showBuildingsHTML)
}
const onDeleteBuildingSuccess = function () {
  $('#message').show()
  $('#message').text('Building Deleted')
  $('#deleteBuilding').trigger('reset')
  // events.onViewBuilding()
  api.viewBuilding()
    .then(onViewBuildingsSuccess)
    .catch(onViewBuildingsFailure)
  // $('#deleteBuilding').trigger('reset')
  // const showBuildingsHTML = showBuildingsTemplate({buildings: response.buildings})
  // $('#buildingDisplay').html('')
  // $('#buildingDisplay').append(showBuildingsHTML)
  // $('#buildingDisplay').empty()
}

const onDeleteBuildingFailure = function (response) {
  $('#message').text('Failed to destroy a building')
  $('#deleteBuilding').trigger('reset')
  $('#message').show()
}

const clearBuildings = () => {
  $('#buildingDisplay').empty()
  $('#message').text('You have cleared your inventory')
  $('#view-buildings').show()
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
  onCreateBuildingFailure,
  onUpdateBuildingSuccess,
  onUpdateBuildingFailure,
  onViewBuildingsFailure,
  onViewBuildingsSuccess,
  onDeleteBuildingSuccess,
  onDeleteBuildingFailure,
  clearBuildings
}
