const { CreateUser } = require("../../DATA/UserDAO")

const CreateUserCase=async(firstName,secondName,phone,password,vendorName)=>{
    
    reslut=await CreateUser(firstName,secondName,phone,password,vendorName)
    return reslut;
}

module.exports={CreateUserCase}