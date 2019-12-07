const express = require('express')

const classesRouter = express.Router()

const classes = [
    'Flower Arrangement',
    'Painting Lizards',
    'Tending to Kittens'
]

// This route should activate when we visit
// http://localhost:3000/classes/
classesRouter.get('/', (req, res) => {
    res.send(classes)
})

classesRouter.get('/:id', (req, res) => {
    
    const classId = req.params.id
    console.log('ClassId: ', classId)
    res.send(classes[classId])
})

module.exports = classesRouter