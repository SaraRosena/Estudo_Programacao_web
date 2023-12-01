const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

//configure template handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//parser para leitura do body
app.use(
express.urlencoded({
extended: true
})
)
app.use(express.json())