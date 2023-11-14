const http = require('http')
const path = require('path')
const morgan = require('morgan')
const hbs = require('express-handlebars');
const express = require('express')
const app = express()
const route = require('./routes')
const db = require('./config/db')
const methodOverride = require('method-override')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//connect to db
db.connect()


//template engine   
app.engine(
    'hbs', 
    hbs.engine({
        extname : '.hbs',
        helpers: {
            sum: (a,b) => a+b,
        }
}));

app.use(methodOverride('_method'))

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))



//HTTP logger
app.use(morgan('combined'))

//main
route(app)

app.listen(8080)