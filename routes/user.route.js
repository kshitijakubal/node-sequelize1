const express = require('express')
const router = express.Router();
const {AddUser,FindAllUsers,UpdateUser,DeleteUser,FindOneUser} = require('../controllers/user.controller')

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

router.put('/updateUser/:id',(req,res) => {
    const id = req.params.id;
    const body = req.body;
    UpdateUser(id,body)
    .then(data=>{
        res.status(200).json({
            message:'User updated',
            result:data
        })
    })
    .catch(err=>{
        res.status(500).json({
            Error_message:err
        })
    })
    
});
router.delete('/deleteUser/:id',(req,res)=>{
    const id = req.params.id;
    DeleteUser(id)
    .then(data=>{
        res.status(200).json({
            message:`User with id ${id} deleted`
        })
    })
    .catch(err => {
        res.status(500).json({
            Error:err
        })
    })
});

router.get('/getOneUser/:id',(req,res)=>{
    const id = req.params.id;
    FindOneUser(id)
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


module.exports = router;