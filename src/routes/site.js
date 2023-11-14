const express = require('express')
const router = express.Router()
const path = require('path')

const siteControllers = require('../app/controllers/SiteControllers') 

router.get('/search', siteControllers.index2)
router.get('/', siteControllers.index1)

module.exports = router