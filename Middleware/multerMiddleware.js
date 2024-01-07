//import multer

const multer = require("multer")

const storage = multer.diskStorage({
//destination:location in which the file is stored

destination:(req,file,callback)=>{
callback(null,'./uploads')
},


//filename: the name in which the file is stored

filename:(req,file,callback)=>{ 
const filename = `image-${Date.now()}-${file.originalname}` //Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).
  callback(null,filename)

}})

const fileFilter =(req,file,callback)=>{
if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' ) {
callback(null,true)
}
else{
callback(null,false)
return callback(new Error('only png,jpg,jpeg files are allowed'))
}

}


//create multerConfigure
const multerConfig = multer({
storage,
fileFilter
})

//export multer

module.exports = multerConfig