const express = require('express')
const router = express.Router();
const {AddUser,FindAllUsers} = require('../controllers/user.controller')

router.post('/addUser',(req,res)=>{
    const body = req.body;
    AddUser(body)
    .then(data=>{
        res.status(200).json({
                message: 'Saved!',
                result: data,
              });
            }).catch(err => {
              console.error(err);
              res.status(500).json({
                message: "User not created",
              });
            });
    })

router.get('/getAllUsers',(req,res)=>{
    FindAllUsers()
    .then(data => {
        res.status(200).json({
            result:data
        })
    })
    .catch(err => {
        res.status(500).json({
            Error:err
        })
    })
})

// router.get('/getOneUser/:id',userController.getOneUser)
// router.put('/updateUser/:id',userController.update_user);
// router.delete('/deleteUser/:id',userController.deleteUser);

module.exports = router;