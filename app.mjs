/* 1. Conectamos la tubería principal que viene del almacén (nuestro archivo propio)
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

detectarFuga(60); */
import { miMartillo, miTornillo } from "./herramientas.mjs";

console.log('He recibido esta herramienta y este tornillo del almacén:');
console.log(miMartillo, 'y', miTornillo);