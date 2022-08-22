const { CreateUserServices, AuthenticationServices, AcvtiveUserServices, GetAllUsersServices } = require("../DOMAIN/Services/UserServices")

const CreateUser=async(req,res)=>{
 try{
    firstName=req.body.firstName,
    secondName=req.body.secondName,
    phone=req.body.phone,
    password=req.body.password
    vendorName=req.body.vendorName
        
    let result = await CreateUserServices(firstName,secondName,phone,password,vendorName)
  res.status(200).send(result)
 }catch(err){
  return {
        Message:"505",
    Error:"Server Error"} 
 
 }
}
const Authentication=async(req,res)=>{
   try{
const phone = req.body.phone
const password= req.body.password
let result =await AuthenticationServices(phone,password)

return res.send(result)
}catch(err){
   return err
}
}
 const ActiveUser=async(req,res)=>{
   id=req.params.id 
       result =await AcvtiveUserServices(id,req.body)
    return res.send(result);
 }
 const GetAllUsers=async(req,res)=>{
    result = await GetAllUsersServices()
    res.send(result)
 }
module.exports={CreateUser,Authentication,ActiveUser,GetAllUsers}