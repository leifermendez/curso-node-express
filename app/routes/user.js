const express = require('express')
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
    session: false
})
const controller = require('../controllers/user')

const router = express.Router()

/**
 * Ruta: /user GET
 */
router.get(
    `/`,
    controller.getData
)

/**
 * Ruta: /user GET
 */
router.get(
    `/:id`,
    controller.getSingle
)

/**
 * Ruta: /user GET
 */
router.post(
    `/`,
    controller.insertData
)

/**
 * Ruta: /user GET
 */
router.put(
    `/:id`,
    controller.updateSingle
)


/**
 * Ruta: /user GET
 */
router.delete(
    `/:id`,
    controller.deleteSingle
)


module.exports = router