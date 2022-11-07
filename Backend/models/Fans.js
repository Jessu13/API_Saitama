import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const Fans = db.define('fans', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre_fan: {
        type: Sequelize.STRING
    }
})