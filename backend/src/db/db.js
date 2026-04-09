const mongoose =  require('mongoose')
const dns = require('dns')

dns.setServers(
     [
        '1.1.1.1',
        '8.8.8.8'
    ]
);
  

async function connectDB() {
    await  mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected Sucessfull")
}

module.exports=connectDB