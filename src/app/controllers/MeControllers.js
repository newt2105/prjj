
const Course = require('../models/Courses')
const {multipleMongooseToObject} = require('../../ulti/mongoose')
class MeControllers{

    // [GET] /me/stored/courses
    storedCourses(req, res, next){
        Course.find({})
            .then(courses => res.render('me/stored-course',{
                courses: multipleMongooseToObject(courses)
            }))
            .catch(next)
        
    }

}

module.exports = new MeControllers