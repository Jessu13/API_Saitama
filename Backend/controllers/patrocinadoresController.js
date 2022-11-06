import { patrocinador } from "../models/Patrocinador.js";
import db from "../configuracion/db.js";

const get_Patrocinadores = async (req, res) => {

    const [patrocinadores, metadata] = await db.query("SELECT patrocinador.nombre_patrocinador, heroes.nombre_heroe from heroes, patrocinador, patrocinador_heroe where patrocinador_heroe.id_heroe=heroes.id and patrocinador_heroe.id_patrocinador=patrocinador.id order by patrocinador.nombre_patrocinador");

    if(patrocinadores.length > 0){
        var patrocinadores_json = [];
        var patrocinador = {
            nombre_patrocinador: patrocinadores[0].nombre_patrocinador,
            heroes: patrocinadores[0].nombre_heroe
        }
        for (let index = 1; index < patrocinadores.length; index++) {
            if(patrocinadores[index - 1].nombre_heroe == patrocinadores[index].nombre_heroe){
                patrocinador.heroes += ", " + patrocinadores[index].nombre_heroe;
            } else {
                patrocinadores_json.push(patrocinador);
                patrocinador = {
                    nombre_patrocinador: patrocinadores[index].nombre_patrocinador,
                    heroes: patrocinadores[index].nombre_heroe
                }
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

export { get_Patrocinadores };