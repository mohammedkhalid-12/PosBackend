module.exports=
 (Sequelize,DataTypes)=>{
const Stock=Sequelize.define("Stock",{
itemName:{
    type:DataTypes.STRING,
    defaultValue: ""
},
itemID:{
    type:DataTypes.STRING,
    defaultValue: ""
},
qtn:{
    type:DataTypes.STRING,
    defaultValue: ""
}
});
return Stock

}
