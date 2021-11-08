import Sequelize, { Model, DataTypes } from "sequelize";

class Users extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        lastName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        companyId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "users",
      },
    );

    return this;
  }
    static associate(models){
      this.belongsTo(models.companies, { foreignKey: 'companyId', as: 'companies'});
      this.belongsToMany(models.workingday, 
        {
          through: 'userworkingdays',
          foreignKey: 'userId',
          as: 'days'
        })     
    };
}

export default Users;