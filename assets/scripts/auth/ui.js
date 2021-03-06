const store = require('./../store')
// const events = require('./events')
const api = require('./api')
const showBuildingsTemplate = require('../templates/building-listing.handlebars')

const onSignUpSuccess = function (response) {
  $('#message').text(response.user.email + ' successfully signed up')
  $('#signUp').trigger('reset')
  $('#message').show()
  $('#message').addClass('success-message')
  $('#signUp').show()
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
  $('#buildingUpdateForm').show()
  $('#clearBuildings').hide()
  $('#buildingDisplay').hide()
  $('#view-buildings').show()
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
  $('#buildingDisplay').hide()
  $('#view-buildings').hide()
  $('#buildingCreateForm').trigger('reset')
  $('#buildingUpdateForm').trigger('reset')
  $('#deleteBuilding').trigger('reset')
  store.user = null
}

const onCreateBuildingSuccess = function (response) {
  $('#message').text(" You've successfully made a building, click view buildings to see your inventory ")
  $('#buildingCreateForm').trigger('reset')
  $('#message').show()
  $('#message').addClass('success-message')
  $('#buildingDisplay').hide()
  $('#buildingUpdateForm').show()
  $('#buildingCreateForm').hide()
  $('#view-buildings').show()
  $('#changePassword').trigger('reset')
  $('#buildingUpdateForm').trigger('reset')
}

const onCreateBuildingFailure = function (response) {
  $('#message').text('You cannot create a building without filling in all forms')
  $('#buildingUpdateForm').trigger('reset')
  $('#message').show()
  $('#changePassword').trigger('reset')
}

const onUpdateBuildingSuccess = function (response) {
  $('#message').text("You've successfully updated a building ")
  $('#buildingUpdateForm').trigger('reset')
  $('#buildingCreateForm').trigger('reset')
  $('#changePassword').trigger('reset')
  $('#message').show()
  $('#message').addClass('success-message')
  api.viewBuilding()
    .then(onViewBuildingsSuccess)
    .catch(onViewBuildingsFailure)
}
const onUpdateBuildingFailure = function (response) {
  $('#message').text('Update Building failed')
  $('#buildingUpdateForm').trigger('reset')
  $('#buildingCreateForm').trigger('reset')
  $('#message').show()
  $('#changePassword').trigger('reset')
}

const onViewBuildingsFailure = function (response) {
  $('#message').text('Building failed')
  $('#view-building').trigger('reset')
  $('#buildingCreateForm').trigger('reset')
  $('#message').show()
  $('#changePassword').trigger('reset')
}

const onViewBuildingsSuccess = function (response) {
  $('#buildingDisplay').show()
  $('#message').show()
  $('#deleteBuilding').show()
  $('#clearBuildings').show()
  $('#buildingUpdateForm').show()
  $('#buildingCreateForm').show()
  $('#buildingDisplay').html('')
  const showBuildingsHTML = showBuildingsTemplate({buildings: response.buildings})
  $('#buildingDisplay').append(showBuildingsHTML)
  $('#buildingCreateForm').hide()
}
const onDeleteBuildingSuccess = function () {
  $('#message').show()
  $('#message').text('Building Deleted')
  $('#deleteBuilding').trigger('reset')
  $('#changePassword').trigger('reset')
  $('#changePassword').trigger('reset')
}

const onDeleteBuildingFailure = function (response) {
  $('#message').text('Failed to destroy a building')
  $('#deleteBuilding').trigger('reset')
  $('#message').show()
  $('#changePassword').trigger('reset')
}

const clearBuildings = () => {
  $('#buildingDisplay').empty()
  $('#message').text('You have cleared your inventory')
  $('#changePassword').trigger('reset')
  $('#buildingCreateForm').show()
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
