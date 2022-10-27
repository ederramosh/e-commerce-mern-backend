const mongoose = require('mongoose');
const Client = mongoose.model('Client');

/* 
   Firstly, we get the password and then we remove it, just for security reason.t hen, we create the object and with the
   method hashPassword, we encrypt the password. At the end of the array method me save it and send to the frontend the 
   json with the msg and details.
*/
const signUpClient = async (req, res) => {
    try {
        const { password } = req.body;

        delete req.body.password;

        const client = new Client(req.body);

        client.hashPassword(password);

        await client.save();

        return res.status(201).json({
            msg: "User created",
            details: client.onSingGenerateJWT(),
        });
    } catch (e) {
        return res.status(400).json({
            msg: "Error",
            details: e.message,
        });
    };
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const client = await Client.findOne({ email });

        if(!client) {
            return res.status(400).json({
                msg: "Error",
                details: "Email or password are invalid",
            });
        }

        if(client.verifyPassword(password)){
            return res.status(200).json({
                msg: "Logged in successfully",
                token: client.generateJWT(),
                rol: client.rol,
                firstname: client.firstname,
                lastname: client.lastname,
            });
        } else {
            return res.status(400).json({
                msg: "Invalid credencials",
                details: "Email or password are invalid",
            })
        }
    } catch (e) {
        return res.status(400).json({
            msg: "Error",
            details: e.message,
        });
    }
};

const findById = async (req, res) => {
    try {
        //You can get the information in this way, without passing the id through the url, you pass it using the user setting
        const id = req.user.idClient;
        console.log(id);
        const client = await Client.findById(id, {firstname: 1, lastname: 1, address: 1, phone: 1, email: 1});

        return res.status(200).json({
            msg: "User founded",
            details: client,
        })
    } catch (e) {
        return res.status(400).json({
            msg: "Error",
            details: e.message,
        })
    }
}

const updateClient = async (req, res) => {
    try {
        const { email } = req.body;

        const validator = await Client.findOne({ email: email });

        if(!validator) {
            return res.status(400).json({
                msg: 'User not founded',
                details: 'Please check your credentials',
            });
        }

        const clientUpdated = await Client.findOneAndUpdate(
            { email: email },
            { $set: req.body },
            { 
                fields: { 'firstname': 1, 'lastname': 1, 'email': 1, 'address': 1, 'phone': 1 },
                new: true 
            },
        );
        
        return res.status(200).json({
            msg: 'User information updated',
            details: clientUpdated,
        })
    } catch (e) {
        return res.status(400).json({
            msg: 'Error',
            details: e.message,
        })
    }
}

const removeClient = async (req, res) => {
    try {
        const { email } = req.body;
        const answer = await Client.findOneAndDelete({ email: email });
        return res.status(200).json({
            msg: 'Successfully',
            details: 'User removed it'
        })
    } catch (e) {
        
    }
}

module.exports = {
    signUpClient,
    login,
    findById,
    updateClient,
    removeClient,
}