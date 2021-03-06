'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
const fileEvents = require('./files/events')

$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandlers()
  fileEvents.addHandlers()
  $('#sign-in-email').focus()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
