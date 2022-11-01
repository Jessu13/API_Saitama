import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const monstruo = db.define('monstruos', {
        id_monstruo: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_monstruo: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        nivel_amenaza: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    }
)