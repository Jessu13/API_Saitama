import { Batalla } from "../models/Batalla.js";
import { Heroe } from "../models/Heroe.js";
import { monstruo } from "../models/Monstruo.js";
import db from "../configuracion/db.js";

const get_batallas = async (req, res) => {
    const [batallas, metadata] = await db.query("SELECT batallas.id_batalla, batallas.ganador, " +
        "heroes.nombre_heroe, monstruos.nombre_monstruo FROM batallas, heroes, monstruos " +  
        "WHERE batallas.id_heroe = heroes.id AND batallas.id_monstruo = monstruos.id_monstruo;"
    );
    try {
        res.json(batallas);
    } catch (error) {
        console.log(error);
    }
};

const guardar_batallas = async (req, res) => {
    const{nombre_heroe, nombre_monstruo, ganador} = req.body;

    if(!nombre_heroe || !nombre_monstruo || !ganador){
        const error = new Error("El monstruo ingresado no existe")
        return res.status(400).json({msg: error.message});
    }

    const existeHeroe = await Heroe.findOne((
        { where: 
            { nombre_heroe } 
        }
    ));
    const existeMonstruo = await monstruo.findOne((
        { where: 
            { nombre_monstruo } 
        }
    ));

    if (!existeHeroe) {
        const error = new Error("El heroe ingresado no existe")
        return res.status(400).json({msg: error.message});
    }
    if (!existeMonstruo) {
        const error = new Error("El monstruo ingresado no existe")
        return res.status(400).json({msg: error.message});
    }

    try {
        const nuevaBatalla = Batalla.create({
            id_heroe: existeHeroe.dataValues.id,
            id_monstruo: existeMonstruo.dataValues.id_monstruo,
            ganador
        });
        nuevaBatalla.dataValues.nombre_heroe = nombre_heroe;
        nuevaBatalla.dataValues.nombre_monstruo = nombre_monstruo;
        res.json(nuevaBatalla)
    } catch (error) {
        console.log(error)
    }
};

const eliminar_batallas = async (req, res) => {
    const { id_batalla } = req.params;
    try {
        const batallaEliminada = await Batalla.destroy({
            where: {
                id_batalla
            }
        });
        res.json({msg: "Batalla eliminada correctamente"});
    } catch (error) {
        console.log(error);
    }
};

export {get_batallas, guardar_batallas, eliminar_batallas };