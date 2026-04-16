// 1. Conectamos la tubería principal que viene del almacén (nuestro archivo propio)
import { consultaStock } from './inventario.mjs';

// 2. Sacamos de la caja de herramientas nativa el componente para montar sensores
import {EventEmitter} from 'events';

// 3. Instalamos el cuadro de alarmar (instanciamos el objeto)
const sensorFerreteria = new EventEmitter();

// 4. Este método registra un oyente para una ÚNICA ejecución.
sensorFerreteria.once('stock_bajo', (producto) => {

    // Esto es lo que suena en el taller cuando salta la alarma
    console.log(`¡AVISO DE UN SOLO USO! El stock de${producto.nombre} ha bajado de 5 unidades.`);
    console.log('Este sensor se ha desactivado automáticamente tras el primer aviso.');

});

// 5. Para probarlo, vamos a forzar dos lecturas seguidas.
async function probarSensor() {
    try {
        // Primera lectura_ debería disparar la alarma
        const p1 = await consultaStock('TUB-050');
        if (p1.cantidad < 5) sensorFerreteria.emit('stock_bajo', p1);

        // Segunda lectura: aunque el stock siga bajo, la alarma No debería sonar.
        const p2 = await consultaStock('TUB-050');
        if (p2.cantidad < 5) sensorFerreteria.emit('stock_bajo', p2);

    } catch (error) {
        console.error('Fallo en la línea de suministro:', error);
    }
}

// Le damos al botón de encendido general
probarSensor();