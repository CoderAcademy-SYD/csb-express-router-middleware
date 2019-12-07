const express = require('express')

const studentsRouter = express.Router()

const students = [
    "Person One",
    "Person Two",
    "Person Three"
]

// This route should activate when we visit
// http://localhost:3000/students/
studentsRouter.get('/', (req, res) => {
    res.send(students)
})

module.exports = studentsRouter
