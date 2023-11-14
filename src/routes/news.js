const express = require('express')
const router = express.Router()
const path = require('path')

const newsControllers = require('../app/controllers/NewsControllers') 

router.get('/:slug', newsControllers.show)
router.get('/', newsControllers.index)

module.exports = router