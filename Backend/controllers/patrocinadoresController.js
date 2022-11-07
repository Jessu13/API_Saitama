import { patrocinador } from "../models/Patrocinador.js";
import { Heroe } from "../models/Heroe.js";
import { Patrocinador_Heroe } from "../models/Patrocinador_heroe.js";
import db from "../configuracion/db.js";

const get_Patrocinadores = async (req, res) => {

    const [patrocinadores, metadata] = await db.query("SELECT patrocinadores.id, patrocinadores.nombre_patrocinador, heroes.nombre_heroe from heroes, patrocinadores, patrocinador_heroes where patrocinador_heroes.id_heroe=heroes.id and patrocinador_heroes.id_patrocinador=patrocinadores.id order by patrocinadores.nombre_patrocinador");

    if(patrocinadores.length > 0){
        var patrocinadores_json = [];
        var patrocinador = {
            id_patrocinador: patrocinadores[0].id,
            nombre_patrocinador: patrocinadores[0].nombre_patrocinador,
            heroes: patrocinadores[0].nombre_heroe
        }
        for (let index = 1; index < patrocinadores.length; index++) {
            if(patrocinadores[index - 1].nombre_patrocinador === patrocinadores[index].nombre_patrocinador){
                patrocinador.heroes += ", " + patrocinadores[index].nombre_heroe;
            } else {
                patrocinadores_json.push(patrocinador);
                patrocinador = {
                    id_patrocinador: patrocinadores[index].id,
                    nombre_patrocinador: patrocinadores[index].nombre_patrocinador,
                    heroes: patrocinadores[index].nombre_heroe
                };
            }
        }
        patrocinadores_json.push(patrocinador);
    }

    try{
        res.json(patrocinadores_json)
    } catch (error) {
        console.log(error);
    }
}

const guardar_patrocinador = async (req, res) => {
    //Validar
    const { nombre_patrocinador, tipo_patrocinio, nombre_heroe } = req.body;

    if (!nombre_patrocinador || !tipo_patrocinio || !nombre_heroe){
        const error = new Error("Verifique que todos los campos se hayan llenado")
        return res.status(400).json({msg: error.message});
    }

    var existePatrocinador = await patrocinador.findOne(({ where: { nombre_patrocinador } }));

    if (!existePatrocinador){
        try {
            const nuevoPatrocinador = await patrocinador.create({
                nombre_patrocinador,
                tipo_patrocinio
            });

            existePatrocinador = nuevoPatrocinador;

            if(nuevoPatrocinador.dataValues.tipo_patrocinio === "Monstruo"){
                nuevoPatrocinador.dataValues.nombre_monstruo = nombre_heroe;
                res.json(nuevoPatrocinador);
                return
            }
        } catch (error) {
            console.log(error)
        }
    }else{

        if(existePatrocinador.dataValues.tipo_patrocinio != tipo_patrocinio){
            const error = new Error("El tipo de patrocinio no concuerda")
            return res.status(400).json({msg: error.message});
        }

        if(existePatrocinador.dataValues.tipo_patrocinio === "Monstruo"){
            existePatrocinador.dataValues.nombre_monstruo = nombre_heroe;
            res.json(existePatrocinador);
            return
        }
    }

    const heroe = await Heroe.findOne(({ where: {
        nombre_heroe
    }}));

    if(!heroe){
        const error = new Error("El heroe ingresado no existe");
        return res.status(400).json({msg: error.message});
    }else{

        const existePatroHeroe = await Patrocinador_Heroe.findOne(({ where: {
            id_fan: existePatrocinador.dataValues.id,
            id_heroe: heroe.dataValues.id
        }}));

        if(existePatroHeroe){
            const error = new Error("Ya eres patrocinador de este heroe");
            return res.status(400).json({msg: error.message});
        } 

        try {
            const relacion = await Patrocinador_Heroe.create({
                id_patrocinador: existePatrocinador.dataValues.id,
                id_heroe: heroe.dataValues.id
            });

            existePatrocinador.dataValues.nombre_heroe = heroe.dataValues.nombre_heroe;
            res.json(existePatrocinador)
        } catch (error) {
            console.log(error)
        }
    }
}

const eliminar_patrocinador = async (req, res) => {
    //Validar
    const { id } = req.params;

    const pat = await patrocinador.findByPk(id)

    if(!pat){
        const error = new Error("El patrocinador no fue encontrado")
        return res.status(404).json({msg: error.message});
    }

    try {

        await Patrocinador_Heroe.destroy({
            where:{
                id_patrocinador: id
            }
        });

        await patrocinador.destroy({
            where:{
                id
            }
        });
        
        res.json({msg: 'El patrocinador ha sido borrado exitosamente'});
    } catch (error) {
        console.log(error);
    }
};

export { get_Patrocinadores, guardar_patrocinador, eliminar_patrocinador}