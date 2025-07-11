const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require('./config/env');
const app = express();
const userRouter = require('./routes/user');
const chatRouter = require('./routes/chat');
const port = 3000;
connectDB(); 
app.use(cors({
    origin: '*',
}));
app.use(express.json());
app.use('/user',userRouter);
app.use('/chat',chatRouter);
const PORT = port;
app.listen(PORT,()=> console.log(`Server running port: ${PORT}`))