const toDo = require('../../../models/toDo')

function updateById (req,res) {

  const { id } = req.params
  const { task, dateOfUpdate, completed } = req.body

  const updateData = {}
  
  if (task) updateData.task = task
  if (dateOfUpdate) updateData.dateOfUpdate = +new Date()
  if (completed) updateData.completed = completed

  toDo.findByIdAndUpdate(id, updateData)
    .then( msg => {
      res.json(msg)
    })
    .catch( err => {
      res.json(err)
    })

}

module.exports = updateById
