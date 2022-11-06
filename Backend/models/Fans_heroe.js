import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const Fan_Heroe = db.define('fans_heroes', {
        id_fan: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        id_heroe: {
            type: Sequelize.INTEGER,
            primaryKey: true
        }
    }
)