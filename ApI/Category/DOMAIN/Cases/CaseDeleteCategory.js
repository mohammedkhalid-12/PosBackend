const { DeleteCategory } = require("../../DATA/CategoryDAO")

const CaseDeleteCategory= async(id)=>{
    result= await DeleteCategory(id)
    return result
}

module.exports={CaseDeleteCategory}