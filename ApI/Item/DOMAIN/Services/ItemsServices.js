const res = require("express/lib/response");
const { DeleteItem, GetAllItems, UpdateItem } = require("../../DATA/ItemDAO");
const { CaseAddItem } = require("../Cases/CaseAddItem")

const  AddItemServices= async(itemName,itemDec,price,qtn,wehda,image,catID)=>{
    
result = await CaseAddItem(itemName,itemDec,price,qtn,wehda,image,catID);

return result;

}
const DeleteItemServices=async(id)=>{
    result=await DeleteItem(id);
    return result
}
const GetAllItemsServices=async()=>{

    result = await GetAllItems();
    return result;
}
const UpdateItemServices=async(id,body)=>{
    result = await UpdateItem(id,body)
    return result
}
module.exports={UpdateItemServices,AddItemServices,DeleteItemServices,GetAllItemsServices}