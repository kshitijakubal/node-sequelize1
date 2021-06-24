const db = require('../../../models/index');
const userModel = db.users;

class Update {
    updateUser(param,body){
        return new Promise((resolve,reject) => {
            userModel.update({
                name:body.name,
                email:body.email,
                gender:body.gender
            },
            {
                where: {
                    id: param
                }
            })
            .then(data => {
                resolve(data)
            })
            .catch(err =>{
                reject(err)
            })
        })
    }
}

module.exports = Update;