const db = require('../../../models/index');
const { use } = require('../../../routes/user.route');
const userModel = db.users;

class Delete {
    deleteUser(param){
        return new Promise((resolve,reject)=>{
            userModel.destroy({
                where:{
                    id:param
                }
            })
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
            })
        })
    }
}

module.exports = Delete;