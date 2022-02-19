module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("Post", {
        Username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        UserID: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        Content: {
            type: Sequelize.STRING,
            allowNull: false
        },
        imgUrl: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });
    return Post;
}