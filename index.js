const exp = require("express");
const app = exp();
const expressAsyncHandler=require('express-async-handler')
app.use(exp.json());

var cors = require('cors')

app.use(cors())

app.get('/',expressAsyncHandler(async(req,res)=>{
    res.json({message:"Hello from server"})
}))

const port = 4000;

app.listen(port, () => console.log(`http server on port ${port}`));