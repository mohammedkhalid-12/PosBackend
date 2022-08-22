const { GettAllItemsCategoryServices } = require("../DOMAIN/Services/AddCategoryServices")
const { AddCategoryServices, DeleteCategoryServices, GetAllCategoriesServices } = require("../DOMAIN/Services/AddCategoryServices")

const AddCategory=async(req,res)=>{
const catName= req.body.catName
result = await AddCategoryServices(catName)
res.send(
    result
)
}

const DeleteCateogry=async(req,res)=>{
   id=req.params.id 

result = await DeleteCategoryServices(id)
return res.send(result);
}

const GetAllCategories=async(req,res)=>{
    result = await GetAllCategoriesServices()
    return res.send(result);

}
const GetAllItemsCateogriesCtx=async(req,res)=>{
id = req.body.id
result = await GettAllItemsCategoryServices(id)
return res.send({"message":200,"Category":result}
)
}
module.exports={AddCategory,DeleteCateogry,GetAllCategories,GetAllItemsCateogriesCtx}