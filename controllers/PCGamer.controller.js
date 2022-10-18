const mongoose = require('mongoose');
const PCGamer = mongoose.model('PCGamer');

const enterPCGamer = async (req, res) => {
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

        const pcGamer = new PCGamer(newElement);

        const result = await pcGamer.save();

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

const getPCGamer = async (req, res) => {
    try {
        //This option can filter the items in stock or  items that the store does not have it.
        const { availability } = req.body;

        const itemsInStock = await PCGamer.find({ availability: availability });

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

const getPCGamerById = async (req, res) => {
    try {
        const { id } = req.params;

        const item = await PCGamer.findById(id);

        return res.status(201).json({
            msg: 'Item founded',
            details: item,
        })
    } catch (e) {
        return res.status(400).json({
            msg: 'Error',
            details: e.message,
        });
    }
}

const getPCGamerByPrice = async (req, res) => {
    try {
        const { less, grather } = req.body;
        const itemsInRange = await PCGamer.find({
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

const updatePCGamer = async (req, res) => {
    try {

        if(req.user.rol !== 'admin') {
            return res.status(401).json({
                msg: 'Unauthorized',
                details: 'You do not have access to make this process',
            });
        }

        const { id } = req.params;

        const result = await PCGamer.findByIdAndUpdate(
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

const removePCGamer = async (req, res) => {
    try {

        if(req.user.rol !== 'admin') {
            return res.status(401).json({
                msg: 'Unauthorized',
                details: 'You do not have access to make this process',
            });
        }

        const { id } = req.params;

        const result = await PCGamer.findByIdAndDelete(id);

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
    enterPCGamer,
    getPCGamer,
    getPCGamerById,
    getPCGamerByPrice,
    updatePCGamer,
    removePCGamer,
}