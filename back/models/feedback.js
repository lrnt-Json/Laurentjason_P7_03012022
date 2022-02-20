module.exports = (sequelize, Sequelize) => {
    const Feedback = sequelize.define("Feedback", {
        Username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        UserID: {
            type: Sequelize.STRING,
            allowNull: false
        },
        PostID: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Content: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return Feedback;
}