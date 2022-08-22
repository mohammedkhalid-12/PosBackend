module.exports=
 (Sequelize,DataTypes)=>{
const Item=Sequelize.define("item",{
itemName:{
    type:DataTypes.STRING,
    defaultValue: ""
},
itemDec:{
    type:DataTypes.STRING,
    defaultValue: ""
},
price:{
    type:DataTypes.STRING,
    defaultValue: ""
},
qtn:{
    type:DataTypes.STRING,
    defaultValue: ""
},
wehda:{
    type:DataTypes.STRING,
    defaultValue: ""
},
image:{
    type:DataTypes.STRING,
    defaultValue: ""
},
catID:{
    type:DataTypes.INTEGER,

},

});
return Item;
}