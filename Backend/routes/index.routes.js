import express from 'express';

import { 
    p_home
} from '../controllers/pagControllers.js';

import { guardar_monstruo, get_Monstruos, eliminar_monstruo } from '../controllers/monstruoControllers.js';

import { encontrar_Heroes, guardar_Heroe, eliminar_heroe } from '../controllers/heroesController.js';

import { get_Patrocinadores, guardar_patrocinador } from '../controllers/patrocinadoresController.js';

import { get_Fans, guardar_fans } from '../controllers/fansController.js';

import {get_batallas, guardar_batallas} from '../controllers/batallasController.js';

import { get_SaitamaZone } from '../controllers/saitamaController.js';

const router = express.Router();

router.get('/', p_home);

router.get('/monstruos', get_Monstruos);
router.post('/monstruos', guardar_monstruo);
router.delete('/monstruos/:id_monstruo', eliminar_monstruo);

router.get('/heroes', encontrar_Heroes);
router.post('/heroes', guardar_Heroe);
router.delete('/heroes/:id', eliminar_heroe);

router.get('/patrocinadores', get_Patrocinadores);
router.post('/patrocinadores', guardar_patrocinador);

router.get('/fans', get_Fans);
router.post('/fans', guardar_fans);

router.get("/batallas", get_batallas);
router.post("/batallas", guardar_batallas);

router.get('/patrocinadores', get_Patrocinadores);
router.post('/patrocinadores', guardar_patrocinador);

router.get("/saitamaZone", get_SaitamaZone);

export default router;