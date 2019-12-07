// Importing the express module
const express = require('express')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const helmet = require('helmet')

const studentsRouter = require('./routes/students/students-routes')
const classesRouter = require('./routes/classes/classes-routes')

// Creating our Express App Instance
const app = express()

// Add Helmet Middleware
app.use(helmet())

// Body Parser Middleware
app.use(express.json())


// create a write stream to provide to Morgan so it can stream logs to a file
const accessLogStream = fs.createWriteStream(path.join(__dirname, './logs/access.log'), { flags: 'a' })

// use the Morgan middleware to log HTTP requests
app.use(morgan('combined', { stream: accessLogStream }))

// ROUTES =======
app.use('/students', studentsRouter)
app.use('/classes', classesRouter)

app.get('/', (req, res) => {

    // Use a multiline string with string interpolation 
    // to provide the client with a more visually pleasing
    // response. Remember that you should provide a valid HTML
    // document with a <html>, <head> and <body>
    res.send(`
    <html>
        <head>
            <title>
                MY HTML RESPONSE
            </title>
        </head>
        <body>
            <h1>Thank you for your ${req.method} request.</h1>
            <ul>
                <li>Hello i'm a list item</li>
            </ul>
        </body>
    </html>
    `)
})


// Tell our application to listen on port and hostname
app.listen(3000, '127.0.0.1', () => {
    console.log(`Application is listening on http://localhost:3000`)
})

