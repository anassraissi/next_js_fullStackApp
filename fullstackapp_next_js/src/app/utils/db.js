const { Mongoose, default: mongoose } = require("mongoose");
const connect=async()=>{


    try{
        await mongoose.connect(process.env.Mongo);
    }
    catch(err){
        throw new err('Connection failed !');
    }
}
export default connect;

