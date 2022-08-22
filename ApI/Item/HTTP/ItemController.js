/*
const  AddItemServices= async(itemName,itemDec,price,qtn,wehda,image,catID)=>{

*/

const { AddItemServices, DeleteItemServices, UpdateItemServices, GetAllItemsServices } = require("../DOMAIN/Services/ItemsServices")


const AddItemCtx=async(req,res)=>{
 itemName= req.body.itemName,
 itemDec=req.body.itemDec,
 price=req.body.price,
 qtn=req.body.qtn,
 wehda=req.body.wehda,
 image = req.file.path
 catID=req.body.catID,



result = await AddItemServices(itemName,itemDec,price,qtn,wehda,image,catID)

return res.send(result);
}


const  DeleteItemCtx=async(req,res)=>{
id = req.params.id;
    result = await DeleteItemServices(id);
    return res.send(result);
}

const UpdateItemCtx=async(req,res)=>{
id=req.params.id;

result= await UpdateItemServices(id,req.body)
return res.send(result)


}

const GetAllItemsCtx=async(req,res)=>{
    
    result = await GetAllItemsServices()
    res.send(result)
}
module.exports={AddItemCtx,DeleteItemCtx,UpdateItemCtx,GetAllItemsCtx}