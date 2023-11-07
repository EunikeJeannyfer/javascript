//sebagai main dr folder (semua di set disini)

const express = require('express')
const router = express.Router();

const users = require('./users')
const auth = require('./auth')

router.use(users)
router.use(auth)

module.exports = router 