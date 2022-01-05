const mongoose = require('mongoose');
// // const mongoURI="mongodb://localhost:27017/e-commerce"; 
// const mongoURI="mongodb://localhost:27017/e-commerce?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"; 
// const connectToMongo= ()=>{
//     mongoose.connect(mongoURI , ()=>{
//          console.log("connected to mongo succesfully"); 
//     })
// }
// module.exports=connectToMongo ;
mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'e-commerce',
    useNewUrlParser: true,
    useUnifiedTopology: true 
}, err => err ? console.log(err) : console.log('Connected to e-commerce database'));