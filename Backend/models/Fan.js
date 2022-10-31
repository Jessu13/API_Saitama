import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const Fan = db.define('fan', {
        nombre: {
            type: Sequelize.STRING
        }
    }
)