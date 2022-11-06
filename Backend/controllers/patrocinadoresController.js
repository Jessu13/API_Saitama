import { patrocinador } from "../models/Patrocinador.js";
import db from "../configuracion/db.js";

const get_Patrocinadores = async (req, res) => {

    const [patrocinadores, metadata] = await db.query("SELECT patrocinador.nombre_patrocinador, heroes.nombre_heroe from heroes, patrocinador, patrocinador_heroe where patrocinador_heroe.id_heroe=heroes.id and patrocinador_heroe.id_patrocinador=patrocinador.id order by patrocinador.nombre_patrocinador");

    console.log(patrocinadores)

    try{
        res.json(patrocinadores)
    } catch (error) {
        console.log(error);
    }
}

export { get_Patrocinadores };