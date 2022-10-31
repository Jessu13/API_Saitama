import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const videojuegos = db.define('videojuegos', {
        nombre: {
            type: Sequelize.STRING
        }
    }
)