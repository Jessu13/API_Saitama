import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const Celula = db.define('celula', {
        mutacion: {
            type: Sequelize.STRING
        },
        habilidad: {
            type: Sequelize.STRING
        },
        id_monstruo: {
            type: Sequelize.INTEGER
        }
    }
)