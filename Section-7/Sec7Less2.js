const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))
app.set('view engine', 'hbs')

const hbs = require('hbs')
// Other lines hidden for brevity
const partialsPath = path.join(__dirname, './Section-7/views')
hbs.registerPartials(partialsPath)

app.get('', (req, res) => {
    res.render('index', {
        title: 'Hello',
        name: 'Haloo gaeess'
    })
})

app.get('/weather', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'This is weither page'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Page not found.'
    })
})

// app.listen(3000, () => {
//     console.log('Server is up on port 3000')
// })
