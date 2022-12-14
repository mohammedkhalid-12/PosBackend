const { Stock } = require('../../../Config/DBConnection');
const Db=require('../../../Config/DBConnection')
const Item = Db.Item
const  AddItem= async(itemName,itemDec,price,qtn,wehda,image,catID)=>{
try{
    let request={
    itemName:itemName,
    itemDec:itemDec,
    price:price,
    qtn:qtn,
    wehda:wehda,
    image:image,
    catID:catID
}

result = await Item.create(request);

console.log("xxx")
console.log(result.itemName)
console.log(result)
//tansatication add item to stocks
let trRequest={
    itemName:result.itemName,
    itemID:result.catID,
    qtn:result.qtn
}
const trResutl= Stock.create(trRequest);
    return result
}catch{
    return {message:401}
}
}
const UpdateItem=async(id,body)=>{
    
    result = await Item.update(body,{where:{id:id}})
    //tansatication update item into stocks
let trRequest={
    itemName:result.itemName,
    itemID:result.catID,
    qtn:result.qtn
}
const trResutl= Stock.update(body,{where:{id:id}})
    console.log(result)
    return {message:200,"msg":"Item Updated successfulyy"}
}

const DeleteItem=async(id)=>{
result = await Item.destroy({where:{id:id}})
return({message:200,"msg":"Item Was Deleted Successfully"})
}
const GetAllItems=async()=>{
    const result =await  Item.findAll()
    return result;
}
module.exports={AddItem,UpdateItem,DeleteItem,GetAllItems}
