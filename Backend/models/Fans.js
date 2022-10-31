import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const Fans = db.define('fans', {
        nombre_fan: {
            type: Sequelize.STRING
        }
    }
)