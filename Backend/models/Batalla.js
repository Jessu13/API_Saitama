import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const Batalla = db.define('batallas', {
        id_batalla: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_heroe: {
            type: Sequelize.INTEGER
        },
        id_monstruo: {
            type: Sequelize.STRING
        },
        ganador: {
            type: Sequelize.STRING
        }
    }
)