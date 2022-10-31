import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const patrocinador = db.define('patrocinador', {
        nombre_patrocinador: {
            type: Sequelize.STRING
        }, 
        tipo_patrocinio:{
            type: Sequelize.STRING
        }
    }
)