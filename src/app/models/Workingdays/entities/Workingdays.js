import Sequelize, { Model, DataTypes } from "sequelize"

class Workingdays extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        weekDay: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        workingDate: {
            type: DataTypes.DATE,
            allowNull: false,
          },
        isWorking: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "workingdays",
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.users,
        {
          through: 'usersworkingdays',
          foreignKey: 'workingDayId',
          as: 'employes'  
        });
  };
}

export default Workingdays;