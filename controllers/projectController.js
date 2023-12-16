const projects = require('../Model/projectSchema')

exports.addproject =(req,res)=>{
              console.log(("inside project add controller"));
              const userId =req.payload
              console.log(userId);
              res.status(200).json('add project requset recieved')
}