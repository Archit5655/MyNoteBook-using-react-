const mongoose =require('mongoose')

const mongoURi="mongodb://127.0.0.1:27017/mynotebbok"

const connecttomongo=()=>{
    mongoose.connect(mongoURi);
    console.log("connected to mongo");


}
module.exports=connecttomongo;