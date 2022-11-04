import express from 'express';

import { 
    p_home
} from '../controllers/pagControllers.js';

import { guardar_monstruo, get_Monstruos, eliminar_monstruo } from '../controllers/monstruoControllers.js';

import { encontrar_Heroes, guardar_Heroe } from '../controllers/heroesController.js';

const router = express.Router();

router.get('/', p_home);

router.get('/monstruos', get_Monstruos);
router.post('/monstruos', guardar_monstruo);
router.delete('/monstruos/:id_monstruo', eliminar_monstruo);

router.get('/heroes', encontrar_Heroes);
router.post('/heroes', guardar_Heroe)

export default router;