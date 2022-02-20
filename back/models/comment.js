module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("Comment", {
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
    return Comment;
}