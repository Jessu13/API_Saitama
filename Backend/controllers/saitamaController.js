import Comida from '../models/Comida.js';
import videojuegos from '../models/Videojuegos';
import Visita_Heroe from '../models/Visita_Heroe.js';
import db from "../configuracion/db.js";

const get_SaitamaZone = async (req, res) => {

    const videojuego = await videojuegos.findAll();
    const comidas = await Comida.findAll();
    const visitas = await Visita_Heroe.findAll();
    const saitamaZone = [videojuego, comidas, visitas];

    try{
        res.json(saitamaZone);
    } catch (error) {
        console.log(error);
    }
    
}

export { get_SaitamaZone };