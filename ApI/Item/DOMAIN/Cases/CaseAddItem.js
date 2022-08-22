const { AddItem } = require("../../DATA/ItemDAO")

const  CaseAddItem= async(itemName,itemDec,price,qtn,wehda,image,catID)=>{


result= await AddItem(itemName,itemDec,price,qtn,wehda,image,catID);
return result;
}
module.exports={CaseAddItem}