import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('mysql://root:admin@localhost:3306/pitu');

export default sequelize;