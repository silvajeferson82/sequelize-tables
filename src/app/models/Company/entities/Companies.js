import Sequelize, { Model, DataTypes } from "sequelize"

class Companies extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE
        }
      },
      {
        sequelize,
        tableName: "companies",
      },
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.users, {as: 'employes'})
  };
}

export default Companies;