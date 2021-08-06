const express = require('express')
const app = express()
const data = require('./showdata')

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
    response.render('index', (data))
})

app.get('/', (request, response) => {
    response.render('season1', (data))
})


app.listen(1339, () => {
    console.log('Listening on 1339 :)')
})