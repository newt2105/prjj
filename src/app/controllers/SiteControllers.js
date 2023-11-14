
const Course = require('../models/Courses')
const {multipleMongooseToObject} = require('../../ulti/mongoose')
class SiteControllers{

    // [GET] /home
    index1(req, res, next){

        Course.find({})
            .then(courses => {
                res.render('home', {
                courses : multipleMongooseToObject(courses)
                })
            })
            .catch(next);
        // res.render("home")
    }
    //[GET] /search
    index2(req, res){
        res.render("search")
    }

}

module.exports = new SiteControllers