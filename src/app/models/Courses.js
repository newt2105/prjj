const { default: mongoose } = require("mongoose");
const  slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema;


mongoose.plugin(slug); // Tự động thêm slug

const Course = new Schema({
  
    name: String,
    description: String,
    videoId: String,
    level: String,
    slug: { type: String, slug: 'name', unique : true },
    image:{ type: String, maxLenght: 600},
},{
    timestamps : true,
});

module.exports = mongoose.model('Course', Course)
