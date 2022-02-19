module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("Post", {
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