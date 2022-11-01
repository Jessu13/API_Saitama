import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const Celula = db.define('celulas', {
        id_celula: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        mutacion: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        habilidad: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        id_monstruo: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    }
)