import db from "../configuracion/db.js";
import { Heroe } from "../models/Heroe.js";

//GET
const guardar_Heroe = async (req, res) => {
    const {nombre_heroe, rango,habilidad , lugar_Residencia, telefono} = req.body;

    const existeHeroe = await Heroe.findOne(({ where: { nombre_heroe} }));

    if (existeHeroe){
        const error = new Error("El heroe que intenta ingresar ya existe");
        return res.status(400).json({msg: error.message});
    }
    
    try {

        const nuevoHeroe = await Heroe.create({
            nombre_heroe,
            rango,
            habilidad,
            lugar_Residencia,
            telefono
        });
        res.json(nuevoHeroe);

    } catch (error) {
        console.log(error);
    }
};

//GET Ranking en orden
const encontrar_Heroes = async (req, res) => {

    const ranks = await Heroe.findAll({
        where: {
            rango: "S"
        }
    });
    const ranka = await Heroe.findAll({
        where: {
            rango: "A"
        }
    });
    const rankb = await Heroe.findAll({
        where: {
            rango: "B"
        }
    });
    const rankc = await Heroe.findAll({
        where: {
            rango: "C"
        }
    });

    const ranking = ranks.concat(ranka.concat(rankb.concat(rankc)));

    for (let index = 0; index < ranking.length; index++) {
        ranking[index].dataValues.pos = index + 1;
    }

    try{
        res.json(ranking)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

const eliminar_heroe = async (req, res) => {
    //Validar
    const { id } = req.params;

    const her = await Heroe.findByPk(id)

    if(!her){
        const error = new Error("El Heroe no fue encontrado")
        return res.status(404).json({msg: error.message});
    }

    try {

        await Heroe.destroy({
            where:{
                id
            }
        });
        
        res.json({msg: 'El heroe ha sido borrado exitosamente'});
    } catch (error) {
        console.log(error);
    }
};

export { encontrar_Heroes, guardar_Heroe, eliminar_heroe };