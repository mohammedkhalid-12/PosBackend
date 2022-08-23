//DBConnection imports
const {Sequelize,DataTypes}= require('sequelize');
const itemModel = require('../Models/itemModel');
const DBConfig=require('./DBConfig');


const sequelize = new Sequelize(
    DBConfig.DB,
    DBConfig.USER,
    DBConfig.Password,
    {
        host:DBConfig.HOST,
         dialect:   DBConfig.dialect

    }

    );
    //connetion to DB
    sequelize.authenticate().then(
        console.log('init Connections To DB')
    ).catch(err=>{
 console.log('DBConnectiong  Was failed');
    });

    const Tables={};
    Tables.sequelize=sequelize

    Tables.User=require('../Models/userModel') (sequelize,DataTypes);
    Tables.Category=require('../Models/categoryModel') (sequelize,DataTypes);
    Tables.Item=require('../Models/itemModel') (sequelize,DataTypes);
    Tables.ShoppingCart=require('../Models/ShoppingCartModel') (sequelize,DataTypes);
    Tables.Order=require('../Models/orderModel') (sequelize,DataTypes);
    Tables.Vendor=require('../Models/ VendorModel') (sequelize,DataTypes);
    Tables.Stock=require('../Models/StockModel') (sequelize,DataTypes);
    Tables.sequelize.sync({force:false});

    //realtionShip
    //user with vendor
    Tables.User.hasOne(Tables.Vendor,
        {
        foreignKey :'id',
        as: 'Vendor'
        })
        Tables.Vendor.belongsTo(Tables.User,{
        foreignKey: 'id',
        as:'User'
     })


     //category with item

     Tables.Category.hasMany(Tables.Item,
        {
        foreignKey :'catID',
        onDelete: "cascade",    
        })
        Tables.Item.belongsTo(Tables.Category,{
            foreignKey :'catID',
     })
     //STock item
     Tables.Stock.hasMany(Tables.Item,
        {
        foreignKey :'catID',
        onDelete: "cascade",    
        })
        Tables.Item.belongsTo(Tables.Stock,{
            foreignKey :'itemID',
     })
// shopping Carts
     Tables.Order.hasOne(Tables.ShoppingCart,
        {
            foreignKey :'id',
        })
        Tables.ShoppingCart.belongsTo(Tables.Order,{
            foreignKey :'cartID',
     })

    module.exports=Tables