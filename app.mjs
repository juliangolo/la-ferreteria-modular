import { catalago } from './herramientas.mjs';
// 1. Traemos la máquina registradora del nuevo archivo
import { calcularTotal } from './cajaRegistradora.mjs';

console.log('Atendiendo al cliente...');
const cajaEncontrada = catalago.find(item => item.nombre === 'Sierra');

// 2. El cliente pide 3 unidades. Metemos la materia prima en la máquina
const aPagar = calcularTotal(cajaEncontrada.precio, 3);

// console.log('¡Caja encontrada!');
// console.log(cajaEncontrada);

console.log('El cliente tiene que pagar: ' + aPagar + ' euros');

/* import { cajaDeHerramientas } from "./herramientas.mjs";

console.log('Buscando la Sierra en el almacén de 1000 piezas...');

// creamos una constante para guardar lo que encuentre el buscador
const resultado = cajaDeHerramientas.find(item => item === 'Sierra');

console.log('El buscador ha devuelto:');
console.log(resultado);

1. Importamos la caja de Herramientas.
import { cajaDeHerramientas } from "./herramientas.mjs";

console.log('Voy a sacar la herramienta número 3 de la lista(que es la llave inglesa):');

// 2. Sacamos la llave
console.log(cajaDeHerramientas[2]);

1. Conectamos la tubería principal que viene del almacén (nuestro archivo propio)
import  chalk  from 'chalk';
import { consultaStock } from './inventario.mjs';
// 2. Sacamos de la caja de herramientas nativa el componente para montar sensores
import {EventEmitter} from 'events';

// 3. Instalamos el cuadro de alarmar (instanciamos el objeto)
const monitorAlmacen = new EventEmitter();

// 4. Este método registra un oyente para una ÚNICA ejecución.
monitorAlmacen.on('fuego', (prod) => {

    // Esto es lo que suena en el taller cuando salta la alarma
    console.log(chalk.white.bgRed.bold(`¡PELIGRO! El producto ${prod.nombre} está a ${prod.temperatura} grados.`));
});

// 5. Para probarlo, vamos a forzar dos lecturas seguidas.
async function chequearClima(codigo) {
    try {
        // Primera lectura_ debería disparar la alarma
        const item = await consultaStock(codigo);
        console.log(`Temperatura actual de ${item.nombre}: ${item.temperatura}°C`);

        // Si la temperatura es mayor de 40, dispara la señal 'fuego'
        if (item.temperatura > 20) {
            monitorAlmacen.emit('fuego', item);
        }

    } catch (error) {
        console.error('Error en el termómetro:', error);
    }
}

// Le damos al botón de encendido general
chequearClima('DIS-001');   

import { sensorGas, detectarFuga } from './gas.mjs';
import chalk from 'chalk';

sensorGas.on('fuga_detectada', (info) => {
    console.log(chalk.yellow(`¡ATENCION! Fuga en ${info.zona}. Nivel actual: ${info.nivel}`));
});

detectarFuga(60); 
import { miMartillo, miTornillo } from "./herramientas.mjs";

console.log('He recibido esta herramienta y este tornillo del almacén:');
console.log(miMartillo, 'y', miTornillo); */