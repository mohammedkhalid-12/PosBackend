const { ActiveUser } = require("../../DATA/userDAO")

const CaseActiveUserStauts=async(id,body,)=>{
result =await ActiveUser(id,body)
return result
}

module.exports={CaseActiveUserStauts}