const db = require('../models');
const userModel = db.users;
// CRUD Operations
const Save = require('../core/v1/user/save')
const findall = require('../core/v1/user/find');

const {addUser} = new Save();
const {findAll} = new findall();


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
exports.update_user = (req,res) => {
    const id = req.params.id;
    userModel.update(req.body, {
        where: {id: id}
    })
    .then(num => {
        if(num == 1){
            res.status(200).json({
                message:"User updated successfully"
            })
        }
        else{
            res.send({
                message:`Could not update user with id ${id}. User not found or req.body empty!`
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            message:"Error while update id "+id
        })
    })
}

// delete 
exports.deleteUser = (req,res)=>{
    const id = req.params.id;

    userModel.destroy({
        where: {id:id}
    })
    .then(num => {
        if(num ==1 ){
            res.status(200).json({
                message:`User with id ${id} deleted successfully`
            })
        }
        else{
            res.send({
                message:`Cannot delete User with id ${id}. Maybe User not found`
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            message:err
        })
    })
}
// get user with id
exports.getOneUser = (req,res) => {
    const id = req.params.id;
    userModel.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
}

module.exports = {AddUser,FindAllUsers}

