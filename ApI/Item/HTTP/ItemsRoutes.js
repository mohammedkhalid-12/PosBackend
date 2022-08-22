const express= require('express')
const { AddItemCtx, GetAllItemsCtx, DeleteItemCtx, UpdateItemCtx } = require('./ItemController')

const ItemRoute = express.Router()

const multer = require('multer')

// inti to upload product images
const storage = multer.diskStorage({
    destination:function (req,file,next){
next(null, './upload/')
    },
    filename:function(req,file,next){

next(null,new Date().toISOString()+file.originalname)
    }
 })
 
 const filefilter = function (req,file ,next){
  if(file.mimetype==='image/jpeg'||file.mimetype==='image/jpg'||file.mimetype==='image/png'){
    next(null,true)

  }else{
    next(null, false)

  }
 } 
 const upload = multer({storage:storage,limits:{fileSize:1024*1024 *9},fileFilter:filefilter})

ItemRoute.post('/additem',upload.single("image"),AddItemCtx)
ItemRoute.post('/allitems',GetAllItemsCtx)
ItemRoute.post('/deleteitem/:id',DeleteItemCtx)
ItemRoute.post('/updateitem/:id',UpdateItemCtx)

module.exports=ItemRoute