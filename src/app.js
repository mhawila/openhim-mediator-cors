'use strict'

import express from 'express'
import openhim from './openhim'
import {SERVER_PORT} from './config/config'
import routes from './routes/'
import logger from './logger'
import { makeApiCall } from './api_helper'

const app = express()

app.use(express.json())

// app.use(bodyParser.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-

app.options("*", (req, res, next) => {
  console.log('Okay the options method is actually being called!')
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, Disable-WWW-Authenticate, X-Requested-With');
  res.status(200).end();
});

app.use("*", (req, res, next) => {
  console.log('req.header("Origin"): ' + req.header('Origin'))
  console.log('req.header("Content-Type"): ' + req.header('Content-Type'))

  res.header('Access-Control-Allow-Origin', req.header('Origin'))

  makeApiCall(req, res, next).then(response => {
    if(response.headers['content-type']) {
      res.header('Content-Type', response.headers['content-type'])
    }
    res.status(response.statusCode).send(response.body)
  }).catch(err => res.send(err))
})

// app.use('/', routes)

app.listen(SERVER_PORT, () => {
  logger.info(`Server listening on Port ${SERVER_PORT}...`)
  openhim.mediatorSetup()
})
