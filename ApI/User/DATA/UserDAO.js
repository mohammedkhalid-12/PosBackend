//connection to DB
const DB = require('../../../Config/DBConnection');
const User = DB.User;
const Vendor = DB.Vendor;
//hash password
const bcrypt = require('bcrypt');
//user register
const CreateUser=async(firstName,secondName,phone,password,vendorName)=>{
    try{
    var password = bcrypt.hashSync(password.toString(), 10)
    console.log(password)
    let request = {
        firstName: firstName,
        secondName: secondName,
        password: password,
        phone:phone,

}
result=await User.create(request);

//transatictions
const tranRequest= {"vendorName":vendorName};
tranResult= await Vendor.create(tranRequest)
//transatictions

return result;
    }catch(err){
        return err;
    }
}


//user login
const Authentication=async(phone,password)=>{

    try{
        let checkFirst = await User.findAll({where:{phone:phone},
            include:[
            {
              model:Vendor,as:'Vendor'
              }
            ]
        });


        //test chickfirst

        result = bcrypt.compareSync(password.toString(), checkFirst[0].password)
        
        console.log(result)

        if (checkFirst.length > 0 && checkFirst[0].stauts!=1 && result == true) {    
            let request = {
                "message":200,
"UNActive":"Contact Admin To Active Your Account "
            
            }
            console.log(request)
            return request;
            
                    }  else if  (checkFirst.length > 0 && checkFirst[0].stauts==1 && result == true) {    
let request = {
    "message":200,
    "Auth":"2",
    "userName":checkFirst[0].firstName,
    id:checkFirst[0].id,
    "secondName":checkFirst[0].secondName,
    "phone":checkFirst[0].phone,
    "stauts":checkFirst[0].stauts,
    Vendor:{
        "vendorName":checkFirst[0]["Vendor"].vendorName
    }

}
console.log(request)
return request;

        }else if(checkFirst[0].phone=="12345678901"&& result==true){
            let request = {
                "Auth":"1",
                adminName:checkFirst[0].firstName
                    }
                    console.log(request)
            return request
        }
}catch{
    return{"message":"You Don't have Number",}

}

}

const ActiveUser= async(id,body)=>{
  
    try{ 
result =await User.update(body,{where:{ id :id }})
return {"message":200,stauts:"User Activted Successfully"};
}catch{
    return {"msg":"erro"}
}
}
const GetAlluser= async()=>{
result =await User.findAll()
return result;
}
module.exports={CreateUser,Authentication,ActiveUser,GetAlluser}