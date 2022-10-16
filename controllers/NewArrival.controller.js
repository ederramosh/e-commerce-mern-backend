const mongoose = require('mongoose');
const NewArrival = mongoose.model('NewArrival');

const enterNewArrival = async (req, res) => {
    try {
        //This gets the object with the information that we passed, like idClient, rol and IAT
        //The "iat" (issued at) claim identifies the time at which the JWT was issued, it uses to 
        //implement expiration time or date for a token (for security purporse)
        //console.log(req.user);
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

        const newArrival = new NewArrival(newElement);

        const result = await newArrival.save();

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

const getNewArrival = async (req, res) => {
    try {
        //This option can filter the items in stock or  items that the store does not have it.
        const { availability } = req.body;

        const itemsInStock = await NewArrival.find({ availability: availability });
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

const getNewArrivalById = async (req, res) => {
    try {
        const { id } = req.params;

        const item = await NewArrival.findById(id);

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

const updateNewArrival = async (req, res) => {
    try {

        if(req.user.rol !== 'admin') {
            return res.status(401).json({
                msg: 'Unauthorized',
                details: 'You do not have access to make this process',
            });
        }

        const { id } = req.params;

        const result = await NewArrival.findByIdAndUpdate(
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

const removeNewArrival = async (req, res) => {
    try {

        if(req.user.rol !== 'admin') {
            return res.status(401).json({
                msg: 'Unauthorized',
                details: 'You do not have access to make this process',
            });
        }

        const { id } = req.params;

        const result = await NewArrival.findByIdAndDelete(id);

        return res.status(201).json({
            msg: 'Successfully',
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
    enterNewArrival,
    getNewArrival,
    getNewArrivalById,
    updateNewArrival,
    removeNewArrival,
}