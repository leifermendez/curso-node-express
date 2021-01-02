const express = require('express')
const controller = require('../controllers/auth')
const router = express.Router()

/**
 * Login
 */
router.post(
    `/login`,
    controller.login
)

/**
 * Login
 */
router.post(
    `/register`,
    controller.register
)

module.exports = router