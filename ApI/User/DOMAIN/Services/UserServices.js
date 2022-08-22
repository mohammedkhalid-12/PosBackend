const { CaseAuthentication } = require("../Cases/CaseAuthentication");
const { CaseGetAllUsers } = require("../Cases/CaseGetAllUser");
const { CreateUserCase } = require("../Cases/CreateUserCase");
const { CaseActiveUserStauts } = require("../Cases/UpdateUserStauts");
// create user 
const  CreateUserServices=(firstName,secondName,phone,password,vendorName)=>{

    result = CreateUserCase(firstName,secondName,phone,password,vendorName);
    return result;
}
// user authentication

const AuthenticationServices=async(phone,password)=>{
    let result = await CaseAuthentication(phone,password)

    return result
}
  const AcvtiveUserServices=async(id,body)=>{
result= CaseActiveUserStauts(id,body)
return result
  }
  const GetAllUsersServices=async()=>{
    result = CaseGetAllUsers()
    return result;
  }
module.exports={GetAllUsersServices,CreateUserServices,AuthenticationServices,AcvtiveUserServices}