import { monstruo } from "../models/Monstruo.js";

const get_Monstruos = async (req, res) => {
    try{
        const monstruos = await monstruo.findAll();
        res.json(monstruos)
    } catch (error) {
        console.log(error);
    }
}

const guardar_monstruo = async (req, res) => {
    //Validar
    const {nombre_monstruo, nivel_amenaza} = req.body;
    

    if (!nombre_monstruo || !nivel_amenaza){
        const error = new Error("Verifique que todos los campos se hayan llenado")
        return res.status(400).json({msg: error.message});
    }

    const existeMonstruo = await monstruo.findOne(({ where: { nombre_monstruo: nombre_monstruo } }));

    if (existeMonstruo){
        const error = new Error("El monstruo ingresado ya existe");
        return res.status(400).json({msg: error.message});
    }

    try {
        
        //Guardar nuevo plato
        const nuevoMonstruo = await monstruo.create({
            nombre_monstruo,
            nivel_amenaza

        });
        res.json(nuevoMonstruo);
        //res.redirect('/platos');
    } catch (error) {
        console.log(error);
    }
}

const eliminar_monstruo = async (req, res) => {
    //Validar
    const { id_monstruo } = req.params;

    const mons = await monstruo.findByPk(id_monstruo)

    if(!mons){
        const error = new Error("El monstruo no fue encontrado")
        return res.status(404).json({msg: error.message});
    }

    try {
        await monstruo.destroy({
            where:{
                id_monstruo,
            },
        });
        res.json({msg: 'El monstruo ha sido borrado exitosamente'});
    } catch (error) {
        console.log(error);
    }
};

export { guardar_monstruo, get_Monstruos, eliminar_monstruo };