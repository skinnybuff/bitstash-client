'use strict'

const config = require('../config')
const store = require('../store')

const createFile = function (data) {
  console.log('data for ajax is: ', data)
  return $.ajax({
    url: config.apiOrigin + '/files',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data,
    contentType: false,
    processData: false
  })
}

const getAllFiles = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/files',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createFile,
  getAllFiles
}