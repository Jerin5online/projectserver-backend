//setup path to resolve request

// 1 import express module

const express = require("express")

//import controller

const userController = require('../controllers/userController')

//import projectcontroller

const projectController = require('../controllers/projectController')

//import jwtmiddleware

const jwtMiddleware = require('../Middleware/jwtMiddleware')

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
router.post('/projects/add',jwtMiddleware,projectController.addproject)


// 4 export router 

module.exports =  router;


