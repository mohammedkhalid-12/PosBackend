const { Authentication } = require("../../DATA/userDAO")


const CaseAuthentication=async(phone,password)=>{

    let result =  await Authentication(phone,password);

    return result;

}
module.exports={CaseAuthentication}