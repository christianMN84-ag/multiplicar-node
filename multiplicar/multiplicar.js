const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite) => {

    console.log(`=========================`.green)
    console.log(`====   Tabla del ${base} ======`.red)
    console.log(`=========================`.green)

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }

}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`El valor introducido ${base} o ${limite} no es un numero`);
            // return para que NO siga ejecutandose el codigo
            return;
        }


        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base*i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else {
                resolve(`tabla-${base}-al-${limite}.txt`)
            }

        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}