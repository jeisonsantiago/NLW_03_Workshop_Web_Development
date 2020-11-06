// import dependencies
const express = require('express');
const path = require('path'); // cross platform path compatible lib
const pages = require('./pages.js');

const server = express()
server

// set static files directory
.use(express.static('public'))

// configure template engine
.set('views',path.join(__dirname,"views"))
.set('view engine', 'hbs')

// create app routes
.get('/',pages.index)
.get('/orphanage',pages.orphanage)
.get('/orphanages',pages.orphanages)
.get('/create-orphanage',pages.createOrphanage)


// turn on server
server.listen('5500')