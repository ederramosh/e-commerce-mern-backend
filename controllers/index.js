const { signUpClient,
        login,
        findByEmail,
        updateClient,
        removeClient, } = require('./Client.controller');

module.exports = {
    signUpClient,
    login,
    findByEmail,
    updateClient,
    removeClient,
};