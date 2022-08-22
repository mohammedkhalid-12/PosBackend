module.exports=
 (Sequelize,DataTypes)=>{
const Vendor=Sequelize.define("Vendor",{
vendorName:{
    type:DataTypes.STRING,
    defaultValue: ""
}
})
return Vendor;
}