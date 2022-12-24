const { getHome, createProduct, getAllProducts, getProduct, getProductByID, deleteProductByID, updateProduct } = require('../controller/productsController');

const router = require('express').Router()




router.get('/', getHome)
// post req for create data 
router.post('/add', createProduct)

// get req for get all data 

router.get('/products', getAllProducts )

// query parameter with comparison mongodb 

router.get('/productQuery', getProduct)

// get req for specific product id 

router.get('/product/:id',getProductByID)

// {$and : [{price : {$gt : 130}}, {ratting : {$in : [4, 5, 4.5]}}]}

// delete product base id 

router.delete('/delete/:id',deleteProductByID) 
// update value 

router.put('/update', updateProduct)

module.exports= router ;
