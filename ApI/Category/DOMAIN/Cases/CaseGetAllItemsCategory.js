const { GetAllItemsCateogries } = require("../../DATA/CategoryDAO");

const CaseGetAllItemsCateogries=async(id)=>{

result = await GetAllItemsCateogries(id)

console.log(result)

return result;

}

module.exports={CaseGetAllItemsCateogries}