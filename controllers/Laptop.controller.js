const mongoose = require('mongoose');
const Laptop = mongoose.model('Laptop');

const enterLaptop = async (req, res) => {
    try {
        if(req.user.rol !== 'admin') {
            return res.status(401).json({
                msg: 'Unauthorized',
                details: 'You do not have access to make this process',
            });
        }
        const { name, features, price, availability, quantity, costPrice, itemImage } = req.body;

        const newElement = {
            name,
            features,
            price,
            availability,
            quantity,
            costPrice,
            itemImage,
        }

        const laptop = new Laptop(newElement);

        const result = await laptop.save();

        return res.status(201).json({
            msg: 'Item submitted successfully',
            details: result,
        });

    } catch (e) {
        return res.status(400).json({
            msg: 'Error',
            details: e.message,
        });
    };
};

const getLaptop = async (req, res) => {
    try {
        const itemsInStock = await Laptop.find();

        if(itemsInStock.length === 0) {
            return res.status(404).json({
                msg: 'List empty',
                details: 'There is no information available'
            })
        };
        
        return res.status(201).json({
            msg: 'List of items founded',
            details: itemsInStock,
        })
    } catch (e) {
        return res.status(400).json({
            msg: 'Error',
            details: e.message,
        })
    }
}

const getLaptopById = async (req, res) => {
    try {
        const { id } = req.params;

        const item = await Laptop.findById(id);

        return res.status(201).json({
            msg: 'Item founded',
            details: item,
        })
    } catch (e) {
        return res.status(400).json({
            msg: 'Error',
            details: e.message,
        })
    }
}

const getLaptopByPrice = async (req, res) => {
    try {
        const { less, grather } = req.body;
        const itemsInRange = await Laptop.find({
            price: { $lte: grather, $gte: less }
        });

        res.status(201).json({
            msg: 'Items founded less than',
            details: itemsInRange,
        })

    } catch (e) {
        return res.status(400).json({
            msg: 'Error',
            details: e.message,
        });
    }
}

const updateLaptop = async (req, res) => {
    try {

        if(req.user.rol !== 'admin') {
            return res.status(401).json({
                msg: 'Unauthorized',
                details: 'You do not have access to make this process',
            });
        }

        const { id } = req.params;

        const result = await Laptop.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );

        return res.status(200).json({
            msg: 'Item updated',
            details: result,
        })

    } catch (e) {
        return res.status(400).json({
            msg: 'Error',
            details: e.message,
        })
    }
}

const removeLaptop = async (req, res) => {
    try {

        if(req.user.rol !== 'admin') {
            return res.status(401).json({
                msg: 'Unauthorized',
                details: 'You do not have access to make this process',
            });
        }

        const { id } = req.params;

        const result = await Laptop.findByIdAndDelete(id);

        return res.status(201).json({
            msg: 'Process completed successfully',
            details: 'Item removed it',
        })
    } catch (e) {
        return res.status(400).json({
            msg: 'Error',
            details: e.message,
        })
    }
}

module.exports = {
    enterLaptop,
    getLaptop,
    getLaptopById,
    getLaptopByPrice,
    updateLaptop,
    removeLaptop,
}