const express = require('express');
const mongosse = require('mongoose');
const multer = require('multer');
const ProductRoute = require('./Routes/Product.route');
const corsMiddleware = require('./middleware/corsMiddleware');
const path = require('path'); 
var dir = path.join(__dirname);

const app = express();
const port = 8080;

mongosse.connect("mongodb://127.0.0.1:27017/restfullAPI_Angular", {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("mongodb connected.....")})
.catch((error)=>console.log("mongodb Disconnect...." + error));

app.use(express.json());
app.use(corsMiddleware);
app.use(express.static(dir));

app.use('/products', ProductRoute);
// app.use('/signup',)

app.use((req,res)=>{
    res.status(404);
    res.send({
        error:"Not found"
    })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));