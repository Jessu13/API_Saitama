import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const celula = db.define('', {
        mutacion: {
            type: Sequelize.STRING
        },
        habilidad: {
            type: Sequelize.STRING
        },
        id_monstruo: {
            type: Sequelize.STRING
        }
    }
)