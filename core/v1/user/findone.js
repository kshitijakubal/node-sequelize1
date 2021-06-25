const db = require('../../../models/index')
const userModel = db.users;

class FindOne {
    findOne(param){
        return new Promise((resolve,reject)=>{
            userModel.findByPk(param)
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
        })
    }
}

module.exports = FindOne;