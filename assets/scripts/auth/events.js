const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
}
const onCreateBuilding = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createBuilding(data)
    .then(ui.onCreateBuildingSuccess)
    .catch(ui.onCreateBuildingFailure)
}
const onUpdateBuilding = function (event) {
  event.preventDefault()
  // const form = event.target
  const data = getFormFields(event.target)
  api.updateBuilding(data)
    .then(ui.onUpdateBuildingSuccess)
    .catch(ui.onUpdateBuildingFailure)
}

const onViewBuilding = function (event) {
  event.preventDefault()
  api.viewBuilding()
    .then(ui.onViewBuildingsSuccess)
    .catch(ui.onViewBuildingsFailure)
}
const onDelete = function (event) {
  event.preventDefault()
  const data = getFormFields(this).building.id
  api.deleteBuilding(data)
    .then(ui.onDeleteBuildingSuccess)
    .catch(ui.onDeleteBuildingFailure)
}
const onClearBuildings = (event) => {
  event.preventDefault()
  ui.clearBuildings()
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateBuilding,
  onUpdateBuilding,
  onViewBuilding,
  onDelete,
  onClearBuildings
}
