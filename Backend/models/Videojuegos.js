import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const videojuegos = db.define('videojuegos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre_videojuego: {
        type: Sequelize.STRING
    }
    }
)