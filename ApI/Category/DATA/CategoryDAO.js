
const DB=require('../../../Config/DBConnection');
const Category = DB.Category;
const Item=DB.Item
const addCategory=async(catName)=>{
    try{
    requset={
        catName:catName
    }
result =await Category.create(requset)
console.log(result)
return {
    message:200,
    catName:result.catName,
    id:result.id
};


}catch{
return {message:"401"}
}
}

const getAllCategories=async()=>{
    result = Category.findAll()
return result
}
const DeleteCategory=async(id)=>{
    result = await Category.destroy({where:{catID:id}})
return {message:200,msg:"Category was successfully deleted"}
}

const GetAllItemsCateogries=async(id)=>{
    result =await Category.findAll({
   where:{catID:id},
         include:Item
         
          
    
})
console.log(result)
return result
}

module.exports={addCategory,DeleteCategory,getAllCategories,GetAllItemsCateogries}