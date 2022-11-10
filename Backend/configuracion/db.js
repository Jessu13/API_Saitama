import Sequelize from "sequelize";

const db = new Sequelize( 'bd_saitama', 'root', 'mi mama me quiere', {
        host: '104.198.29.146',
        port: '3306',
        dialect: 'mysql', // or 'sqlite', 'postgres', 'mariadb'
        define: {
            timestamps: false
        },
        pool: {
            max: 5, 
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        operatorAliases: false
    } 
);

export default db;