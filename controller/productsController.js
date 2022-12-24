const productModel = require('../model/productModel');

exports.getHome = (req, res) => {
    res.send('Welcome to node server');
};

exports.createProduct = async (req, res) => {
    try {
        // get data from req body
        const { title, price, description } = req.body;
        // train up it with model instance
        const proCollection = new productModel({ title, description, price });
        //save it by instance method
        const saveCollection = await proCollection.save();
        // send response
        res.send(saveCollection);
    } catch (error) {
        next(error);
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const data = await productModel.find().sort({ price: -1 });

        if (data) {
            res.send(data).status(200);
        } else {
            res.send({
                message: 'No data found'
            });
        }
    } catch (error) {
        next(error);
    }
};

exports.getProduct = async (req, res) => {
    try {
        const { price } = req.query;
        console.log(price);
        const data = await productModel.find({ price: { $gt: price } });
        if (data) {
            res.send(data).status(200);
        } else {
            res.send({
                message: 'No data found'
            });
        }
    } catch (error) {
        next(error);
    }
};

exports.getProductByID = async (req, res) => {
    try {
        const id = req.params.id;

        const data = await productModel.findOne({ _id: id });
        if (data) {
            res.send(data);
        } else {
            res.send({
                message: 'Not found any data'
            });
        }
    } catch (error) {
        next(error);
    }
};

exports.deleteProductByID = async (req, res) => {
    try {
        const id = req.params.id;
        const delPro = await productModel.deleteOne({ _id: id });
        res.send(delPro);
    } catch (error) {
        next(error);
    }
};

exports.updateProduct = async (req, res) => {
    const { id, data } = req.body;
    console.log(id, data);
    res.send(data);

    try {
        const update = await productModel.updateOne({ _id: id }, { $set: data });
        res.send(update);
        console.log('try');
    } catch (error) {
        next(error);
    }
};
