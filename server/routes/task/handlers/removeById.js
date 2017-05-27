const toDo = require('../../../models/toDo')

function removeById(req, res) {

    const { id } = req.params

    toDo.findByIdAndRemove(id)
        .then(msg => {
            res.json(msg)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports = removeById
