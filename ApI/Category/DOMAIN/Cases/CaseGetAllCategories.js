const { getAllCategories } = require("../../DATA/CategoryDAO")

const CaseGetAllCateogries= async()=>{
    result = await getAllCategories()
    return result;
}

module.exports = {CaseGetAllCateogries}