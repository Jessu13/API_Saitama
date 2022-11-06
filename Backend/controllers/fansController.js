import { Heroe } from "../models/Heroe.js";
import { Fan_Heroe } from "../models/Fans_heroe.js";
import { Fans } from "../models/Fans.js";
import db from "../configuracion/db.js";

const get_Fans = async (req, res) => {

    const [fans, metadata] = await db.query("SELECT fans.id, " 
    + "fans.nombre_fan, heroes.nombre_heroe from heroes, "
    + "fans, fans_heroe where fans_heroe.id_heroe=heroes.id "
    + "and fans_heroe.id_fans=fans.id order by" 
    + "fans.nombre_fan");

    if(fans.length > 0){
        var fans_json = [];
        var fan = {
            id_fan: fans[0].id,
            nombre_fan: fans[0].nombre_fan,
            heroes: fans[0].nombre_heroe
        }
        for (let index = 1; index < fans.length; index++) {
            if(fans[index - 1].nombre_fan === fans[index].nombre_fan){
                fans.heroes += ", " + fans[index].nombre_heroe;
            } else {
                fans_json.push(fan);
                fans = {
                    id_fan: fans[index].id,
                    nombre_fan: fans[index].nombre_fan,
                    heroes: fans[index].nombre_heroe
                };
            }
        }
        fans_json.push(fans);
    }

    try{
        res.json(fans_json)
    } catch (error) {
        console.log(error);
    }
}

const guardar_fans = async (req, res) => {
    //Validar
    const { nombre_fan, nombre_heroe } = req.body;

    if (!nombre_fan || !nombre_heroe){
        const error = new Error("Verifique que todos los campos se hayan llenado")
        return res.status(400).json({msg: error.message});
    }

    var existeFan = await Fans.findOne(({ where: { nombre_fan } }));

    if (!existeFan){
        try {
            const nuevoFan = await fans.create({
                nombre_fan,
                tipo_patrocinio
            });

            existeFan = nuevoFan;

        } catch (error) {
            console.log(error)
        }
    }

    const heroe = await Heroe.findOne(({ where: {
        nombre_heroe
    }}));

    if(!heroe){
        const error = new Error("El heroe ingresado no existe");
        return res.status(400).json({msg: error.message});
    } else {
        try {
            const relacion = await Fan_Heroe.create({
                id_fan: existeFan.dataValues.id,
                id_heroe: heroe.dataValues.id
            });

            existeFan.dataValues.nombre_heroe = heroe.dataValues.nombre_heroe;

            res.json(existeFan)
        } catch (error) {
            console.log(error)
        }
    }
}

export { get_Fans, guardar_fans };