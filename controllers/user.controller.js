const db = require('../models');
const userModel = db.users;
// CRUD Operations
const Save = require('../core/v1/user/save')
const findall = require('../core/v1/user/find');
const Update = require('../core/v1/user/update')
const Delete = require('../core/v1/user/delete')
const FindOne = require('../core/v1/user/findone')

const {addUser} = new Save();
const {findAll} = new findall();
const {updateUser} = new Update();
const {deleteUser} = new Delete();
const {findOne} = new FindOne();


// exports.add_user = (req,res) => {
//     const user = {
//         name: req.body.name,
//         email: req.body.email,
//         gender: req.body.gender
//     }
//     userModel.create(user)
//     .then(userData => {
//         res.status(201).json(userData)
//     })
//     .catch(err => {
//         res.status(500).json(err)
//     })
// }
// exports.findAll = (req,res) => {
//     userModel.findAll()
//     .then(userData=>{
//         res.status(200).json(userData)
//     })
//     .catch(err=>{
//         res.status(500).json(err)
//     })
// }

const AddUser = async(body) => {
    const result = await addUser(body);
    return result;
}

const FindAllUsers = async() => {
    const result = await findAll();
    // const finalResult = result.map(item => {
    //     name_email: item.name+' '+item.email
    // })
    return result;
}

// update user
const UpdateUser = async(param,body) => {
    const result = await updateUser(param,body);
    return result;
}
// delete 
const DeleteUser = async(param) => {
    const result = await deleteUser(param);
    return result;
}
// get user with id
const FindOneUser = async(param) =>{
  const result = await findOne(param);
  return result;
}

module.exports = {AddUser,FindAllUsers,UpdateUser,DeleteUser,FindOneUser}

