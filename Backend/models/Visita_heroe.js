import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const Visita_Heroe = db.define('visita_heroes', {
        nombre_heroe: {
            type: Sequelize.STRING
        },
        dia_visita: {
            type: Sequelize.STRING
        }
    }
)