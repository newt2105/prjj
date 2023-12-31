
const Course = require('../models/Courses')
const {mongooseToObject} = require('../../ulti/mongoose')
class CourseControllers{

    // [GET] /course/:slug
    show(req, res, next){
        Course.findOne({ slug: req.params.slug})
        .then((course) => { 
            res.render('courses/show', {course : mongooseToObject(course)})
        })
        .catch(next)
    }

    // [GET] /course/create
    create(req, res, next){
        res.render('Courses/create')
    }

    store(req, res, next){
        // res.json(req.body)
        const formData = req.body
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
        const course = new Course(formData)
        course.save()
            .then(() => res.redirect(`/`))
            .catch(error =>{
            
            })
    }

        // [GET] /course/:id/edit
        edit(req, res, next){
            Course.findById( req.params.id )
            .then(course =>
                res.render('courses/edit', {course : mongooseToObject(course)})
            )
            .catch(next)
            
        }
}

module.exports = new CourseControllers