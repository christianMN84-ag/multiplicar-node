const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
var colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, `${ archivo }`.bgBrightMagenta.brightCyan))
            .catch(e => console.log(e))
            // console.log('crear');
        break;

    default:
        console.log('Comando no reconocido')
}


// let base = '6';

// console.log(module);
// console.log(process.argv);

// para tomar la base desde la linea de comandos
// let argv2 = process.argv;

console.log(argv);
// console.log('Limite', argv.limite);


// let parametro = argv[2];
// console.log(parametro);

// let base = parametro.split('=')[1];

// console.log(base);