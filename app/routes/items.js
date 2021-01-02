const express = require('express')

const controller = require('../controllers/items')

const router = express.Router()



const path = 'items'

/**
 * Ruta: /user GET
 */
router.get(
    `/`,
    controller.getData
)

module.exports = router