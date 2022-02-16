module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("Comment", {
        UserID: {
            type: Sequelize.STRING,
            allowNull: false
        },
        PostID: {
            type: Sequelize.STRING,
            allowNull: false
        },
        content: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return Comment;
}