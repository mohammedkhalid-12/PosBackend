module.exports=
 (Sequelize,DataTypes)=>{
const Order=Sequelize.define("Order",{
cartID:{
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
},
total:{
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