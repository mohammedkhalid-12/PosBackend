
//imports app
const express = require('express')
const bodyParser= require('body-parser')
//###### const content###################
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use("/upload",express.static('upload'))


//user Routes
const UserRoutes=require('./ApI/User/HTTP/UserRoutes');
const Cateroute = require('./ApI/Category/HTTP/CategoryRoutes');
const ItemRoute = require('./ApI/Item/HTTP/ItemsRoutes');
app.use('/api/v1',UserRoutes)
//Category Route
app.use('/api/v1',Cateroute)

//item Route
app.use('/api/v1',ItemRoute)
module.exports=app