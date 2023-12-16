//logic to resolve the request

//import modal

const { response } = require('express')
const users = require('../Model/userSchema')

//import jwt
const jwt=require('jsonwebtoken')


exports.register = async (req,res)=>{
   
   //extracts data from request body

   const {username,email,password}  = req.body

 try{const existUser =  await users.findOne({email})

 if(existUser){


  //if document is present
  res.status(406).json("Account already exist....please Login")
 }

 else{
  //Need to register 
  //1) Create a object
  const newUser = new users({
    username,
    email,
    password,
    gitHub:"",
    LinkedIn:"",
    profile:""

  })

  //add to mongodb - use save method in mongoose
 
  await newUser.save()


  //Response

  res.status(200).json(newUser)
 }
}//Runtime errors are resolved using try-catch block
catch(err){
  response.status(401).json(`register request failed due to ${err}`)
}


  //logic
  //console.log('inside the controller-register function');
 


  //response
  //res.status(200).json("registration request recieved")            

}

//login

exports.login = async(req,res)=>{
  const {email,password}=req.body
  try{
  const existingUser = await users.findOne({email,password})
  console.log(existingUser);

  if(existingUser){


    //jwt
   const token = jwt.sign({userId:existingUser._id},"jerinsebastian")
   //sending as object because there sending more than one data transmit

   res.status(200).json({
    existingUser,
    token
   })

  

  }
  else{
    res.status(404).json('Invalid Email Id or Password')
  }


  }catch(err){
    response.status(401).json(`register request failed due to ${err}`)

  }
}