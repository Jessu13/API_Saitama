import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const Heroe = db.define('heroes', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_heroe: {
            type: Sequelize.STRING,
            allowNull: false
        },
        rango:{
            type: Sequelize.STRING,
            allowNull: false
        },
        habilidad: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lugar_Residencia: {
            type: Sequelize.STRING,
            allowNull: false
        },
        telefono: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
)