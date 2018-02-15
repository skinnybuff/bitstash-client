'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const createUpload = function (event) {
  event.preventDefault()
  // console.log('this is the event.target', event.target)
  const data = new FormData(event.target)
  // data.user = store.user
  // const data = getFormFields(event.target)
  console.log('store.user:', store.user)
  console.log('this is data: ', data)
  console.log('The data is ', data.get('file[path]'))
  console.log('The data.user is ', data.get('user[_id]'))
  api.createFile(data) // data is empty object :(((
  // api.createFile(data.get('file[path]'))
    .then(ui.createFileSuccess)
    .catch(ui.createFileFailure)
}

const addHandlers = function () {
  $('#multipart-form-data').on('submit', createUpload)
}

module.exports = {
  addHandlers
}