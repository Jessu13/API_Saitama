import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const Patrocinador_Heroe = db.define('patrocinador_heroes', {
    id_patrocinador: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    id_heroe: {
        type: Sequelize.INTEGER,
        primaryKey: true
        }
    }
)