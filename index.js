const express = require('express')
const showdata = require('./showdata')

const app = express()

app.use(express.static('public'))
app.set('view engine', 'pug')

app.get('/', (request, response) => {
    response.render('index', { showdata })
})

app.get('/season/:number', (request, response) => {
    const seasons = showdata.seasons.find((seasons) => { return seasons.number === parseInt(request.params.number) })
    
    return response.render('seasons', { seasons })
})

app.all('*', (request, response) => {
    return response.status(404).send('Sorry, request not found')
})


app.listen(1339, () => {
    console.log('Listening on 1339 :)')
})