module.exports=
 (Sequelize,DataTypes)=>{
const User=Sequelize.define("User",{
firstName:{
    type:DataTypes.STRING,
    defaultValue: ""
},
secondName:{
    type:DataTypes.STRING,
    defaultValue: ""
},
password:{
    type:DataTypes.STRING,
    defaultValue: ""
},
phone:{
    type:DataTypes.STRING,
    defaultValue: ""
},
stauts:{
    type:DataTypes.STRING,
    defaultValue: "0"
},

});
return User;
}