import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const patrocinador = db.define('patrocinador', {
        nombre: {
            type: Sequelize.STRING
        }
    }
)