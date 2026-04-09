require("dotenv").config();
const cors = require('cors');
app.use(cors());
const app = require('./src/app');
const connectDB = require('./src/db/db')
connectDB();
app.listen(3000,()=>
{
    console.log("Server is running on 3000 port");
})