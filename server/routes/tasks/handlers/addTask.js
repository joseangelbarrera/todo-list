const toDo = require('../../../models/toDo')

function addTask (req, res) {
    const { task, dateOfUpdate, completed } = req.body
    const newToDo = new toDo({ task, dateOfUpdate: +new Date(), completed })
    newToDo.save()
        .then(msg => {
         res.redirect('/tasks')
            res.json(msg)
            // console.log('all was ok')
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports = addTask



