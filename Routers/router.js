//setup path to resolve request

// 1 import express module

const express = require("express")

//import controller

const userController = require('../controllers/userController')

//import projectcontroller

const projectController = require('../controllers/projectController')

//import jwtmiddleware

const jwtMiddleware = require('../Middleware/jwtMiddleware')

//import multer

// const multer = require('../Middleware/multerMiddleware')
const multerConfig = require("../Middleware/multerMiddleware")

// 2 create an object for router class inside express module

const router = new express.Router()

// 3 setup path to resolve request
//router.post('/users/register',userController.register)

//syntax - router.httprequest('path to resolve',()=>{  how to resolve})
         


// a register
router.post('/users/register',userController.register)

//b login
router.post('/users/login',userController.login)

//c add project
router.post('/projects/add',jwtMiddleware,multerConfig.single('projectimage'),projectController.addproject)


//d home projects

router.get('/project/home-projects',projectController.getHomeprojects)

//e all projects
router.get('/project/all-projects',jwtMiddleware,projectController.getAllprojects)

//f user Projects
router.get('/user/user-projects',jwtMiddleware,projectController.getUserprojects)

//g edit project
router.put('/project/edit/:id',jwtMiddleware,multerConfig.single('projectimage'),projectController.editUserProject)

//h delete project
router.delete('/projects/remove/:id',jwtMiddleware,projectController.deleteProject)

//i edit profile
router.put('/user/edit',jwtMiddleware,multerConfig.single('profile'),userController.editUser)






// 4 export router 

module.exports =  router;


