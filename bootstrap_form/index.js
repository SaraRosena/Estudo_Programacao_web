const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
    extended: true
    }))
 app.use(express.json())

 app.get('/users/add', (req, res) => {
    res.render('userform')
    })

    app.post('/users/save', (req, res) => {
        const name = req.body.name
        const datacompra = req.body.datacompra
        const valorcompra = req.body.valorcompra
        const valorvenda = req.body.valorvenda



        const func = req.body.func
        const user = { name: name, fornecer: valorvenda, func:func}
        res.render('viewuser', { user: user })
        
        })
        app.get('/', (req, res) => {
            res.render('home')
            })
            
            
            
            //webserver
            app.listen(port, () => {
            console.log('Server Started')
            })