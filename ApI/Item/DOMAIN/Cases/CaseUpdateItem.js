const { UpdateItem } = require("../../DATA/ItemDAO")

const CaseUpdateItem=async(id,body)=>{

    result = await UpdateItem(id,body)
    return result;
}


module.exports={CaseUpdateItem}