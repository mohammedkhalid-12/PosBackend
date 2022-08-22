const { DeleteItem } = require("../../DATA/ItemDAO")

const  CaseDeleteItem= async(id)=>{
    result = await DeleteItem(id)
    return result;
}

module.exports={CaseDeleteItem}