const { GetAlluser } = require("../../DATA/userDAO")

const CaseGetAllUsers= async()=>{
result =await GetAlluser()
return result;
}

module.exports={CaseGetAllUsers}