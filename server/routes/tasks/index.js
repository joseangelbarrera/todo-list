const express = require('express')
const router = express.Router()

const addTask= require('./handlers/addTask')
const getAllTasks = require('./handlers/getAllTasks')

router.get('/', getAllTasks)
router.post('/', addTask)

module.exports = router

    
