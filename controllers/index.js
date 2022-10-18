const { signUpClient,
        login,
        findByEmail,
        updateClient,
        removeClient, } = require('./Client.controller');

const { enterNewArrival,
        getNewArrival,
        getNewArrivalById,
        getNewArrivalByPrice,
        updateNewArrival,
        removeNewArrival, } = require('./NewArrival.controller');

const { enterLaptop,
        getLaptop,
        getLaptopById,
        getLaptopByPrice,
        updateLaptop,
        removeLaptop, } = require('./Laptop.controller');

        const { enterPCGamer,
                getPCGamer,
                getPCGamerById,
                getPCGamerByPrice,
                updatePCGamer,
                removePCGamer, } = require('./PCGamer.controller');
        
        const { enterStreamingEquipment,
                getStreamingEquipment,
                getStreamingEquipmentById,
                getStreamingEquipmentByPrice,
                updateStreamingEquipment,
                removeStreamingEquipment, } = require('./StreamingEquipment.controller');

        const { enterGadgets,
                getGadgets,
                getGadgetsById,
                getGadgetsByPrice,
                updateGadgets,
                removeGadgets, } = require('./Gadgets.controller');

module.exports = {
    signUpClient,
    login,
    findByEmail,
    updateClient,
    removeClient,
    enterNewArrival,
    getNewArrival,
    getNewArrivalById,
    getNewArrivalByPrice,
    updateNewArrival,
    removeNewArrival,
    enterLaptop,
    getLaptop,
    getLaptopById,
    getLaptopByPrice,
    updateLaptop,
    removeLaptop,
    enterPCGamer,
    getPCGamer,
    getPCGamerById,
    getPCGamerByPrice,
    updatePCGamer,
    removePCGamer,
    enterStreamingEquipment,
    getStreamingEquipment,
    getStreamingEquipmentById,
    getStreamingEquipmentByPrice,
    updateStreamingEquipment,
    removeStreamingEquipment,
    enterGadgets,
    getGadgets,
    getGadgetsById,
    getGadgetsByPrice,
    updateGadgets,
    removeGadgets,
};