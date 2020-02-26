'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#signUp').on('submit', authEvents.onSignUp)
  $('#signIn').on('submit', authEvents.onSignIn)
  $('#changePassword').hide()
  $('#signOut').hide()
  $('#changePassword').on('submit', authEvents.onChangePassword)
  $('#signOut').on('submit', authEvents.onSignOut)
  $('#buildingCreateForm').hide()
  $('#buildingUpdateForm').hide()
  $('#buildingCreateForm').on('submit', authEvents.onCreateBuilding)
  $('#buildingUpdateForm').on('submit', authEvents.onUpdateBuilding)
  $('#view-buildings').on('submit', authEvents.onViewBuilding)
  $('#deleteBuilding').on('submit', authEvents.onDelete)
  $('#clearBuildings').on('click', authEvents.onClearBuildings)
  $('#buildingUpdateForm').on('submit', authEvents.onUpdateBuilding)
  $('#clearBuildings').hide()
  $('#deleteBuilding').hide()
  $('#view-buildings').hide()
})
