import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const Heroe = db.define('heroes', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_heroe: {
            type: Sequelize.STRING
        },
        rango:{
            type: Sequelize.STRING
        },
        habilidad: {
            type: Sequelize.STRING
        },
        lugar_residencia: {
            type: Sequelize.STRING
        },
        telefono: {
            type: Sequelize.STRING
        }
    }
)