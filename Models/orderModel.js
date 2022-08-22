module.exports=
 (Sequelize,DataTypes)=>{
const Order=Sequelize.define("Order",{
amount:{
    type:DataTypes.STRING,
    defaultValue: ""
},
itemName:{
    type:DataTypes.STRING,
    defaultValue: ""
},
qtn:{
    type:DataTypes.STRING,
    defaultValue: ""
},
paymentType:{
    type:DataTypes.STRING,
    defaultValue: ""
},

});
return Order;
}