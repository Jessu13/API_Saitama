import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const Visita_Heroe = db.define('visita_heroe', {
        nombre_heroe: {
            type: Sequelize.STRING
        },
        dia: {
            type: Sequelize.STRING
        }
    }
)