//sebagai main dr folder (semua di set disini)

const express = require('express')
const router = express.Router();

const users = require('./users')

router.use(users)

module.exports = router 