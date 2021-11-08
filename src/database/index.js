import { Sequelize } from "sequelize";

import database from "../config/database";

import Users from "../app/models/Users/entities/Users"
import Companies from "../app/models/Company/entities/Companies";
import WorkingDays from "../app/models/Workingdays/entities/Workingdays";
import Userworkingdays from "../app/models/UserWorkingDays/entities/Userworkingdays";

const models = [Users, Companies, WorkingDays, Userworkingdays];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(database);

        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection.models));
    }
}

export default new Database();