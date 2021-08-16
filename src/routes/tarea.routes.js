const express = require('express');
const router = express.Router();

const controlador = require('../controllers/tarea.controllers');

router.post('/', controlador.crearTarea);
router.get('/', controlador.verTareas);
router.get('/:id', controlador.verTarea);
router.put('/:id', controlador.modificarTarea);
router.put('/realizada/:id', controlador.modificarEstadoTarea);
router.delete('/:id', controlador.eliminarTarea);

module.exports = router;