import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const videojuegos = db.define('videojuegos', {
        nombre_videojuego: {
            type: Sequelize.STRING
        }
    }
)