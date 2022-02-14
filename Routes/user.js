const express = require ('express');

const controller = require ('../userController/userContoller');
const User = require ('../models/user');


const router = express.Router();

router.get("/welcome", (req, res)=>{
    res.send("welcome to user list")
})

// post a user 
router.post("/users",controller.postUser);

//Getting all users
router.get('/', async(req,res)=>{
    try {
        const result =await User.find()
        res.status(200).send({response:result, message:"all users shown"})
    } catch (error) {
        res.status(400).send({message:"can not get all users"})
    }
})

//get by id
router.get('/:id', async(req,res)=>{
    try {
        const result =await User.findOne({_id:req.params.id})
        res.status(200).send({response:result, message:"getting user by id successful"})
    } catch (error) {
        res.status(400).send({message:"can not get  user"})
    }
})

// getting user by name!
router.get('/name/:name', async(req,res)=>{
    try {
        const result =await User.find({name:req.params.name})
        res.status(200).send({response:result, message:"getting user by name successful"})
    } catch (error) {
        res.status(400).send({message:"can not get  user"})
    }
})

// delete with id
router.delete('/:id', async(req,res)=>{
    try {
        const result =await User.deleteOne({_id:req.params.id})
        res.status(200).send({response:result, message:"deleting user by id successful"})
    } catch (error) {
        res.status(400).send({message:"can not delete  user"})
    }
})
// updating with id
router.put ('/:id', async(req, res)=>{
    try {
        const result=await User.updateOne({_id:req.params.id}, {$set:{...req.body}})
            res.send({message:'user updated'})
    } catch (error) {
        res.send(400).send({message: "update unsuccessful"})
    }
})








module.exports = router