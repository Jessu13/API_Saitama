import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const monstruo = db.define('monstruo', {
        nombre: {
            type: Sequelize.STRING
        },
        nivel_amenaza: {
            type: Sequelize.STRING
        }
    }
)