const express= require('express')
const { AddCategory, GetAllCategories, DeleteCateogry, GetAllItemsCateogriesCtx } = require('./CategoryController')
const route = express.Router()
route.post('/addCategory',AddCategory)
route.post('/delete/:id',DeleteCateogry)
route.post('/Catall',GetAllCategories)
route.post('/itemsCat',GetAllItemsCateogriesCtx)


module.exports=route