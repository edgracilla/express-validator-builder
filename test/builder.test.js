/* global describe, it */
'use strict'

require('./model')()

const should = require('should')
const mongoose = require('mongoose')
const ValidationBuilder = require('../index')

describe('Builder Test', function () {
  describe('# Start', function () {
    it('should start the app', function (done) {
      let options = {
        uuid: true,
        model: 'TestModel'
      }

      let builder = new ValidationBuilder(options)
      let validationScema = builder.build()

      console.log('zz', JSON.stringify(validationScema))
      done()
    })
  })
})
