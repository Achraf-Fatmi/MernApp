const User= require ('../models/user');

exports.postUser= async (req, res)=>{
    try {
        const newUser= new User(req.body)

        if (!req.body.email){
            res.status(400).send({message:"email is required !!"})
            return;
        }
        if (!req.body.name){
            res.status(400).send({message:"name is required !!"})
            return;
        }
        const user=await User.findOne({email:req.body.email})
        if (user){
            res.status(400).send({message: "user already exists"})
            return;
        }
        const response=await newUser.save()
        res.send({response:response, message:'A new user has been saved'})
    } catch (error) {
        console.log(error);
        res.status(500).send({message:'Ooops error has occured '})
    }
}