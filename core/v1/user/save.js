const db = require('../../../models')
const userModel = db.users;

class Save {
    addUser(body) {
        return new Promise((resolve,reject) => {
            userModel.create({
                name: body.name,
                email:body.email,
                gender:body.gender
            })
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })

        })
    }
}

module.exports = Save;
