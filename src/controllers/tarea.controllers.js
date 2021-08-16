const crearTarea = (req, res) => res.json({ mensage: 'agregar una nueva tarea' });
const verTareas = (req, res) => res.json({ mensage: 'ver todas las tareas' });
const verTarea = (req, res) => res.json({ mensage: `ve la tarea con el id ${req.params.id}` });
const modificarTarea = (req, res) => res.json({ mensage: `modificar la tarea con el id ${req.params.id}` });
const modificarEstadoTarea = (req, res) => res.json({ mensage: `modificar el estado de la tarea con el id ${req.params.id}` });
const eliminarTarea = (req, res) => res.json({ mensage: `eliminar la tarea con el id ${req.params.id}` });

module.exports = {
    crearTarea,
    verTareas,
    verTarea,
    modificarTarea,
    modificarEstadoTarea,
    eliminarTarea
}