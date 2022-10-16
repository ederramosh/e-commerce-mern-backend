const { signUpClient,
        login,
        findByEmail,
        updateClient,
        removeClient, } = require('./Client.controller');

const { enterNewArrival,
        getNewArrival,
        getNewArrivalById,
        updateNewArrival,
        removeNewArrival, } = require('./NewArrival.controller');

module.exports = {
    signUpClient,
    login,
    findByEmail,
    updateClient,
    removeClient,
    enterNewArrival,
    getNewArrival,
    getNewArrivalById,
    updateNewArrival,
    removeNewArrival,
};