import { Celula } from "../models/Celula.js";
import db from "../configuracion/db.js";

const get_Celulas = async (req, res) => {
    try{
        const celulas = await Celula.findAll();
        res.json(celulas)
    } catch (error) {
        console.log(error);
    }
}

const guardar_celula = async (req, res) => {
    //Validar
    const { mutacion, habilidad, id_monstruo } = req.body;
    

    if (!mutacion || !habilidad || !id_monstruo){
        const error = new Error("Verifique que todos los campos se hayan llenado")
        return res.status(400).json({msg: error.message});
    }

    const existeCelula = await Celula.findOne(({ where: { mutacion: mutacion, habilidad: habilidad } }));

    if (existeCelula){
        const error = new Error("La celula que intenta ingresar, ya existe");
        return res.status(400).json({msg: error.message});
    }

    const [existeMonstruo, metadata1] = await db.query(`SELECT * FROM monstruos WHERE id_monstruo = ${id_monstruo}`);
    if(!existeMonstruo[0]){
        const error = new Error("El monstruo al que intenta añadir la celula, no existe")
        return res.status(400).json({msg: error.message});
    }

    try {
        
        //Guardar nuevo plato
        const nuevaCelula = await Celula.create({
            mutacion,
            habilidad,
            id_monstruo

        });
        res.json(nuevaCelula);
        //res.redirect('/platos');
    } catch (error) {
        console.log(error);
    }
}


export { get_Celulas, guardar_celula };