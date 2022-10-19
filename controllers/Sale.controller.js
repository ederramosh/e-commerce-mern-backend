const mongoose = require('mongoose');
const Sale = mongoose.model('Sale');

const submitSale = async ( req, res ) => {
    try {
        const { client, date, purchase, price, tax } = req.body;

        newSale = {
            client,
            date,
            purchase,
            price,
            tax
        }

        const sale = new Sale(newSale);

        const result = await sale.save();

        return res.status(201).json({
            msg: 'Sale Submitted',
            details: result,
        })

    } catch (e) {
        return res.status(400).json({
            msg: 'Error',
            details: e.message,
        })
    }
}

const getAllSales = async (req, res) => {
    try {
        
        if(req.user.rol !== 'admin') {
            return res.status(401).json({
                msg: 'Unauthorized',
                details: 'You do not have access to make this process',
            });
        }

        const items = await Sale.find().populate({
            path: 'client',
            select: {
                firstname: true,
                lastname: true,
                email: true
            }
        });

        return res.status(201).json({
            msg: 'List of sales',
            details: items,
        });

    } catch (e) {
        return res.status(400).json({
            msg: 'Error',
            details: e.message,
        });
    }
}

const getSalesByDate = async ( req, res ) => {
    try {
        
        if(req.user.rol !== 'admin') {
            return res.status(401).json({
                msg: 'Unauthorized',
                details: 'You do not have access to make this process',
            });
        }

        const { initialDate, endDate } = req.body;

        const result = await Sale.find({
            date: { $lte: endDate, $gte: initialDate }
        }).populate({
            path: 'client',
            select: {
                firstname: true,
                lastname: true,
                email: true
            }
        });

        return res.status(201).json({
            msg: 'List of Sales',
            details: result,
        })

    } catch (e) {
        return res.status(400).json({
            msg: 'Error',
            details: e.message,
        });
    }
}

module.exports = {
    submitSale,
    getAllSales,
    getSalesByDate,
}