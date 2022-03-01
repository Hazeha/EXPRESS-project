module.exports = (sequelize, Sequelize) => {
    const Rental = sequelize.define("rental", {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.TINYINT
        },
        available: {
            type: Sequelize.TINYINT
        },
        pictures: {
            type: Sequelize.STRING
        }
    });

    return Rental;
};
