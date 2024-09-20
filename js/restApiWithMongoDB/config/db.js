const mongoose=require('mongoose');
const connectDb= async ()=>{
    const conn= await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Mongo db connected to : ${conn.connection.host}`);
}
mongoose.set('strictQuery', true);
module.exports = connectDb;
