const fs = require('fs');
const leerJson = JSON.parse(fs.readFileSync('./db/tareas.json', 'utf-8'));


const moduleTareas = {
    listar: function () {
        leerJson.forEach((tarea, i) => {
            
            console.log(`${i + 1} - ${tarea.titulo},${tarea.estado}`)
        });
    },
    escribirJson: function (moduleTareas) {
        fs.writeFileSync('./db/tareas.json', JSON.stringify(leerJson, null, 2), 'utf-8');
    },
    crear: (titulo, estado = 'pendiente') => {
        let = nuevaTarea = {
            titulo,
            estado
        }
        leerJson.push(nuevaTarea)
        moduleTareas.escribirJson()
    },
    leerPorEstado: function (filtro) {
        let filtrarPorEstado = leerJson.filter(tarea => tarea.estado === filtro || tarea.titulo.includes(filtro));
        console.log(filtrarPorEstado)
    }
}

module.exports = moduleTareas;
