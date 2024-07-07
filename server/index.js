const express = require("express");
const  cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const chatRoute = require("./routes/chatRoute");
const messageRoute = require("./routes/messageRoute")

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/api/users",userRoute);
app.use("/api/chats",chatRoute);
app.use("/api/messages",messageRoute);


app.get("/",(req,res)=>{
    res.send("welcome our chat app api...")
});

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) =>{
    console.log(`Server running on port: ${port}`);
});

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(()=> console.log("MongoDb connection established")).catch((error)=> console.log("MongoDB connection failed: ",error.message));