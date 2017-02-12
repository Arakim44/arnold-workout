module.exports = function(sequelize, DataTypes) {

    var User = sequelize.define("User", {

        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        user_password:{
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len:[1]
          }
        }

        // user_gender: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     validate: {
        //         len: [1]
        //     }
        // },
        // user_age: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     validate: {
        //         len: [1]
        //     }
        // },
        // user_weight: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     validate: {
        //         len: [1]
        //     }
        // },
        // fitness_goals: {
        //     type: DataTypes.TEXT,
        //     allowNull: false,
        //     validate: {
        //         len: [1]
        //     }
        // }
    }, {timestamps: false});
    User.sync();
    return User;
}