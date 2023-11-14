const express = require('express')
const router = express.Router()
const path = require('path')

const CourseControllers = require('../app/controllers/CourseControllers') 

router.get('/create', CourseControllers.create)
router.post('/store', CourseControllers.store)
router.get('/:id/edit', CourseControllers.edit)
router.get('/:slug', CourseControllers.show)


module.exports = router