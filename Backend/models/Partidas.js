import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const Partidas = db.define('partidas', {
        gana: {
            type: Sequelize.STRING
        },
        videojuego: {
            type: Sequelize.STRING
        }
    }
)