const express = require('express')
const router = express.Router()
const path = require('path')

const MeControllers = require('../app/controllers/MeControllers') 

router.get('/stored/courses', MeControllers.storedCourses)



module.exports = router