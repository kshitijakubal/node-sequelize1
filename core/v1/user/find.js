const db = require('../../../models')
const userModel = db.users;

class FindAll {
    findAll(){
        return new Promise((resolve,reject) => {
            userModel.findAll()
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(data);
            })
        })
    }
}

module.exports = FindAll;