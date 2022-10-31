import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const Comida = db.define('comida', {
        nombre: {
            type: Sequelize.STRING
        },
        precio: {
            type: Sequelize.INTEGER
        },
        Dia: {
            type: Sequelize.DATE
        }
    }
)