import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const Batalla = db.define('batalla', {
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