const express = require('express');
const route = express.Router();
const UserController=require('./UserController');
route.post('/create',UserController.CreateUser)
route.post('/auth',UserController.Authentication)
route.post('/active/:id',UserController.ActiveUser)
route.post('/all',UserController.GetAllUsers)

module.exports=route