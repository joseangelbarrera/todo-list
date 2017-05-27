const mongoose = require('mongoose')
const Schema = mongoose.Schema

var toDoSchema = new Schema({
    task: String,
    dateOfCreation: {
        type: Number,
        default: +new Date
    },
    dateOfUpdate: Number,
    completed: {
        type: Boolean, 
        default: false
     }
})

const toDo = mongoose.model('toDo', toDoSchema);
module.exports = toDo
