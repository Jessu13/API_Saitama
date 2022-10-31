import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const Heroe = db.define('heroe', {
        nombre: {
            type: Sequelize.STRING
        },
        habilidad: {
            type: Sequelize.STRING
        },
        lugar_residencia: {
            type: Sequelize.STRING
        },
        telefono: {
            type: Sequelize.STRING
        }
    }
)