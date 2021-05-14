const process = require('process');
const { listar, crear, leerPorEstado } = require('./tareas');
let accion = process.argv[2];

switch (accion) {
    case undefined:
        console.log('Ejecute alguno de los siguientes comandos: listar , crear , filtrar')
        break;
    case 'listar':
        return listar()
        break;
    case 'crear':
        crear(process.argv[3], process.argv[4])
        return listar()
        break;
    case 'filtrar':
        leerPorEstado(process.argv[3])
        break;
    default:
        console.log('Ejecute alguno de los siguientes comandos: listar , crear , filtrar')
        break;
};
