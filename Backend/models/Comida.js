import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const Comida = db.define('comidas', {
        nombre_comida: {
            type: Sequelize.STRING
        },
        precio: {
            type: Sequelize.INTEGER
        },
        dia: {
            type: Sequelize.STRING
        }
    }
)