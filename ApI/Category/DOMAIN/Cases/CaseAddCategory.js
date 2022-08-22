const { addCategory } = require("../../DATA/CategoryDAO")

const CaseAddCategory= async(catName)=>{
result=await  addCategory(catName)
return result
}

module.exports={CaseAddCategory}