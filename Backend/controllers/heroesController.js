import db from "../configuracion/db.js";
import { Heroe } from "../models/Heroe.js";

//GET
const encontrar_Heroes = async (req, res) => {
    try{
        const heroes_claseS = await Heroe.findAll({
            where: {
                rango: "S"
            }
        });
        const heroes_claseA = await Heroe.findAll({
            where: {
                rango: "A"
            }
        });
        const heroes_claseB = await Heroe.findAll({
            where: {
                rango: "B"
            }
        });
        const heroes_claseC = await Heroe.findAll({
            where: {
                rango: "C"
            }
        });
        const heroes = {heroes_claseS, heroes_claseA, heroes_claseB, heroes_claseC}
        res.json(heroes)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}
// GET
const top10Heroes = async (req, res) => {
    try {
        // COMPLETAR
        const top10 = await db.query("SELECT * FROM heroes")
        res.json(top10)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export { encontrar_Heroes };