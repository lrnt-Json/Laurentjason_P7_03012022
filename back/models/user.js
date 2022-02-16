module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
        mail: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return User;
}