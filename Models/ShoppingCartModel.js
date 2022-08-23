module.exports=
 (Sequelize,DataTypes)=>{
const ShoppingCart=Sequelize.define("ShoppingCart",{
itemName:{
    type:DataTypes.STRING,
    defaultValue: ""
},
itemID:{
    type:DataTypes.STRING,
    defaultValue: ""
},
CartItemQTN:{
    type:DataTypes.STRING,
    defaultValue: ""
},

total:{

    type:DataTypes.STRING,
    defaultValue: ""
},
});
return ShoppingCart;
};