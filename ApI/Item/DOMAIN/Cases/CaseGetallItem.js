const { GetAllItems } = require("../../DATA/ItemDAO")

const  CaseGetAllItems=async()=>{
result = await GetAllItems()
    return result;
}

module.exports={CaseGetAllItems}