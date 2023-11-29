const multer = require('multer');
const Product = require('../models/ProductModel');


const ProductAction = {
    getAll: async (req, res)=> {
        try{
            const data = await Product.find({})
            if(!data){
                return res.status(404).json({
                    message: "product false"
                })
            }
            return res.status(200).json(data);
        }catch(error){
            return res.status(500).json({
                message: "get product success.....",
                error: error
            })
        }
    },
    addProduct: async (req, res) => {
        try{
            const data = JSON.parse(req.body.newData);
            const newData = {...data,imageUrl: req.file.filename};
            const newProduct = await Product(newData);
            const saveProduct = await newProduct.save();
            res.status(200).json({
                message: "create success.."
            })
        }catch(error){
            res.status(500).json({
                message: "create false...."
            })
        }
    },
    deleteProduct: async (req, res) => {
        try{
            await Product.findByIdAndDelete(req.params.id);
            res.status(200).json("delete success...");
        }catch(error){
            res.status(500).json({
                message: "delete false...."
            })
        }
    },
    getProductbyId: async (req, res) => {
        try{
            const oneProduct = await Product.findById(req.params.id);
            if(oneProduct){
                res.status(200).json(oneProduct);
            }
        }catch(error){
            
        }
    },
    updateProduct: async (req, res) => {
        try{
            const product = await Product.findById(req.params.id);
            await product.updateOne({
                $set: req.body
            })
            res.status(200).json({
                massage: "update success..."
            })
        }catch(error){

        }
    }
}

module.exports = ProductAction
