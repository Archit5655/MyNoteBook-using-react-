const mongoose =require('mongoose')
const mongoURi="mongodb://localhost:27017/"

const connecttomongo=()=>{
    mongoose.connect(mongoURi);
    console.log("connected to mongo");


}
module.exports=connecttomongo;