import Sequelize, { Model, DataTypes } from "sequelize"

class Userworkingdays extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "usersworkingdays",
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.users, {foreignKey: 'userId'});
    this.belongsTo(models.workingday, {foreignKey: 'workingDayId'});
  };
}

export default Userworkingdays;