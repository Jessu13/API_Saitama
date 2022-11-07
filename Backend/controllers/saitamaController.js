import { Comida } from "../models/Comida.js";
import { videojuegos } from "../models/Videojuegos.js";
import { Visita_Heroe } from "../models/Visita_Heroe.js";
import { Heroe } from "../models/Heroe.js";
import { Partidas } from "../models/Partidas.js";
import db from "../configuracion/db.js";

const get_SaitamaZone = async (req, res) => {
    const videojuego = await videojuegos.findAll();
    const partidas = await Partidas.findAll();
    const comidas = await Comida.findAll();
    const visitas = await Visita_Heroe.findAll();
    const saitamaZone = { videojuego, partidas, comidas, visitas };

    try {
        res.json(saitamaZone);
    } catch (error) {
        console.log(error);
    }
};

const get_SZ_Videojuegos = async (req, res) => {
    const videojuego = await videojuegos.findAll();
    try {
        res.json(videojuego);
    } catch (error) {
        console.log(error);
    }
};

const get_SZ_Partidas = async (req, res) => {
    const partidas = await Partidas.findAll();
    const saitama = await Partidas.count({
        where: {
        gana: "Saitama"
        }
    });
    const king = await Partidas.count({
        where: {
        gana: "King"
        }
    });
    const p = {
        marcador: saitama + " - " + king,
    };
    if (king > saitama) {
        p.marcador += " -> Vas perdiendo";
    } else if (saitama > king) {
        p.marcador += " -> Vas ganando";
    } else {
        p.marcador += " -> Empatados";
    }

    p.partidas = partidas;

    try {
        res.json(p);
    } catch (error) {
        console.log(error);
    }
};

const get_SZ_Comidas = async (req, res) => {
    const comidas = await Comida.findAll();
    try {
        res.json(comidas);
    } catch (error) {
        console.log(error);
    }
};

const get_SZ_Visitas = async (req, res) => {
    const visitas = await Visita_Heroe.findAll();

    for (let index = 0; index < visitas.length; index++) {
        var cuenta = await Comida.findAll({
        where: {
            dia: visitas[index].dataValues.fecha_visita,
        },
        });
        if (cuenta) {
        for (let j = 0; j < cuenta.length; j++) {
            visitas[index].dataValues.cuenta += cuenta[j].dataValues.precio;
        }
        }
    }

    try {
        res.json(visitas);
    } catch (error) {
        console.log(error);
    }
};

const guardar_SZ_Videojuegos = async (req, res) => {
    const { nombre_videojuego } = req.body;

    const exiteVideoJuego = await videojuegos.findOne({
        where: {
        nombre_videojuego
        },
    });

    if (exiteVideoJuego) {
        return res.status(400).json({
        msg: "El videojuego ya existe",
        });
    }

    try {
        const vj = await videojuegos.create({
        nombre_videojuego,
        });
        res.json(vj);
    } catch (error) {
        console.log(error);
    }
};

const guardar_SZ_partidas = async (req, res) => {
    const { gana, videojuego } = req.body;

    const exiteVideoJuego = await videojuegos.findOne({
        where: {
        nombre_videojuego: videojuego,
        },
    });

    if (!exiteVideoJuego) {
        return res.status(400).json({
        msg: "El videojuego no existe",
        });
    }

    const partida = await Partidas.create({
        gana,
        videojuego,
    });

    const p = {
        info: "",
    };

    const s = await Partidas.count({
        where: {
        gana: "Saitama",
        },
    });
    const k = await Partidas.count({
        where: {
        gana: "King",
        },
    });

    if (k > s) {
        p.info += "Loser";
    } else if (s > k) {
        p.info += "Tomaste la delantera";
    } else {
        p.info += "Igualeste el marcador";
    }

    p.partida = partida;

    try {
        res.json(p);
    } catch (error) {
        console.log(error);
    }
};

const guardar_SZ_Comidas = async (req, res) => {
    const { nombre_comida, precio, dia } = req.body;

    const existeComida = await Comida.findOne({
        where: {
        nombre_comida,
        precio,
        dia,
        },
    });

    if (existeComida) {
        return res.status(400).json({
        msg: "La comida ya existe",
        });
    }

    try {
        const comida = await Comida.create({
        nombre_comida,
        precio,
        dia,
        });
        res.json(comida);
    } catch (error) {
        console.log(error);
    }
};

const guardar_SZ_Visitas = async (req, res) => {
    const { nombre_heroe, fecha_visita } = req.body;

    const existeVisita = await Visita_Heroe.findOne({
        where: {
        nombre_heroe,
        fecha_visita,
        },
    });

    if (existeVisita) {
        return res.status(400).json({
        msg: "La visita ya existe",
        });
    }

    const existeHeroe = await Heroe.findOne({
        where: {
        nombre_heroe,
        },
    });

    if (!existeHeroe) {
        return res.status(400).json({
        msg: "El heroe no existe",
        });
    }

    try {
        const visita = await Visita_Heroe.create({
        nombre_heroe,
        fecha_visita,
        });

        const cuenta = await Comida.findAll({
        where: {
            dia: visita.dataValues.fecha_visita,
        },
        });

        if (cuenta) {
        for (let index = 0; index < cuenta.length; index++) {
            visita.dataValues.cuenta_visita += cuenta[index].dataValues.precio;
        }
        }

        res.json(visita);
    } catch (error) {
        console.log(error);
    }
};

const delete_SZ_Videojuegos = async (req, res) => {
    const { id } = req.body;

    const existeVideoJuego = await videojuegos.findOne({
        where: {
        id,
        },
    });

    if (!existeVideoJuego) {
        return res.status(400).json({
        msg: "El videojuego no existe",
        });
    }

    try {
        await videojuegos.destroy({
        where: {
            id,
        },
        });
        res.json({ msg: "Videojuego eliminado" });
    } catch (error) {
        console.log(error);
    }
    };

    const delete_SZ_partidas = async (req, res) => {
    const { id } = req.body;

    const existeVideoJuego = await videojuegos.findOne({
        where: {
        id,
        },
    });

    if (!existeVideoJuego) {
        return res.status(400).json({
        msg: "El videojuego no existe",
        });
    }

    try {
        await Partidas.destroy({
        where: {
            id,
        },
        });
        res.json({ msg: "Partida eliminada" });
    } catch (error) {
        console.log(error);
    }
};

const delete_SZ_Comidas = async (req, res) => {
    const { id } = req.body;

    const existeComida = await Comida.findOne({
        where: {
        id,
        },
    });

    if (!existeComida) {
        return res.status(400).json({
        msg: "La comida no existe",
        });
    }

    try {
        await Comida.destroy({
        where: {
            id,
        },
        });
        res.json({ msg: "Comida eliminada" });
    } catch (error) {
        console.log(error);
    }
};

const delete_SZ_Visitas = async (req, res) => {
    const { id } = req.body;

    const existeVisita = await Visita_Heroe.findOne({
        where: {
        id,
        },
    });

    if (!existeVisita) {
        return res.status(400).json({
        msg: "La visita no existe",
        });
    }

    try {
        await Visita_Heroe.destroy({
        where: {
            id,
        },
        });
        res.json({ msg: "Visita eliminada" });
    } catch (error) {
        console.log(error);
    }
};

export {
    get_SaitamaZone,
    get_SZ_Videojuegos, get_SZ_Partidas, get_SZ_Comidas, get_SZ_Visitas,
    guardar_SZ_Videojuegos, guardar_SZ_partidas, guardar_SZ_Comidas, guardar_SZ_Visitas,
    delete_SZ_Videojuegos, delete_SZ_partidas, delete_SZ_Comidas, delete_SZ_Visitas
};
