//import model

const projects = require('../Model/projectSchema')

//add projects

exports.addproject = async(req,res)=>{
              console.log(("inside project add controller"));
              const userid =req.payload
              console.log(userid);
              const projectimage = req.file.filename
              console.log(projectimage);
              const{title,language,github,website,overview} = req.body

            console.log(`${title},${language},${github},${website},${overview},${projectimage},${userid}`);
              try{
             const ExistingProject = await projects.findOne({github})
             if(ExistingProject){
              res.status(406).json("Project Already Exist...please upoload a new Project")
             }
             else{
              const newProject = new projects({
              title,language,github,website,overview,projectimage,userid
              })
              await newProject.save()
                            res.status(200).json(newProject)

             }


              }
              catch(err){
              res.status(401).json(`Request failed due to ${err}`)
              }


            }


// get Homeprojects

exports.getHomeprojects = async(req,res)=>{
  try {
    const homeprojects = await projects.find().limit(3)
    console.log(homeprojects);
    res.status(200).json(homeprojects)
  } catch (err) {
    res.status(401).json(`Error occured due to ${err}`)

    
  }
}

//get allprojects
exports.getAllprojects = async(req,res)=>{

  const search=req.query.search
  console.log(search);

  const query={
    language:{
      //regular expressions , options::"i" - it reoves case sensitivity
      $regex:search,$options:"i"
  }


  }
  try {
    const allprojects = await projects.find(query)
    res.status(200).json(allprojects)
  } catch (err) {
    res.status(401).json(`Error occured due to ${err}`)

    
  }
}

//get Userprojects

exports.getUserprojects = async(req,res)=>{
  const userid =req.payload

  try {
    const userprojects = await projects.find({userid})
    res.status(200).json(userprojects)
  } catch (err) {
    res.status(401).json(`Error occured due to ${err}`)

    
  }
}

//edit project

exports.editUserProject = async(req,res)=>{
  const{id} = req.params
  const{userid} = req.payload
  const{title,language,github,website,overview,projectimage} =req.body
  const upoloadedProjectImage = req.file?req.file.filename:projectimage

  try {
    const updateProject = await projects.findByIdAndUpdate
    ({_id:id},{title,language,github,website,overview,projectimage:upoloadedProjectImage,userid},{new:true})

    await updateProject.save()
    res.status(200).json(updateProject)
    
  } catch (error) {
    res.status(401).json(err)
    
  }

}


// delete project

exports.deleteProject = async(req,res)=>{
const{id}=req.params

try {
  const removeProject = await projects.findByIdAndDelete
  ({_id:id})
  res.status(200).json(removeProject)
} catch (error) {
  res.status(401).json(err)
  
}
}