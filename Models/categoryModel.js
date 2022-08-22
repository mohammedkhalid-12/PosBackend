module.exports=
 (Sequelize,DataTypes)=>{
const Category=Sequelize.define("Category",{
catName:{
    type:DataTypes.STRING,
    defaultValue: ""
},
catID:{
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
}
});
return Category;
}