const express = require('express')
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
    session: false
})
const controller = require('../controllers/upload')

const router = express.Router()


/**
 * Ruta: /user GET
 */
router.post(
    `/`,
    controller.upload,
    controller.uploadFile
)


module.exports = router