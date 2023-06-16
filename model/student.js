module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define("student", {
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    return Student;
  };