const db = require('../models')
const userModel = db.users;
const Op = db.Sequelize.Op;

exports.add_user = (req,res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    }
    userModel.create(user)
    .then(userData => {
        res.status(201).json(userData)
    })
    .catch(err => {
        res.status(500).json(err)
    })
}