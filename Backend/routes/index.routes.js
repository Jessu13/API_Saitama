import express from 'express';

import { 
    p_home
} from '../controllers/pagControllers.js';

import { guardar_monstruo, get_Monstruos, eliminar_monstruo } from '../controllers/monstruoControllers.js';

import { get_Celulas, guardar_celula } from '../controllers/celulasController.js';

const router = express.Router();

router.get('/', p_home);

router.get('/monstruos', get_Monstruos);
router.post('/monstruos', guardar_monstruo);
router.delete('/monstruos/:id_monstruo', eliminar_monstruo);

router.get('/celulas', get_Celulas);
router.post('/celulas', guardar_celula);

export default router;