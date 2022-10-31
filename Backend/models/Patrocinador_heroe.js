import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const Patrocinador_Heroe = db.define('patrocinador_heroe', {
        id_heroe: {
            type: Sequelize.INTEGER
        },
        id_patrocinador: {
            type: Sequelize.INTEGER
        }
    }
)