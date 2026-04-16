// 1. Conectamos la tubería principal que viene del almacén (nuestro archivo propio)
import { consultaStock } from './inventario.mjs';

// 2. Sacamos de la caja de herramientas nativa el componente para montar sensores
import {EventEmitter} from 'events';

// 3. Instalamos el cuadro de alarmar (instanciamos el objeto)
const sensorFerreteria = new EventEmitter();

// 4. Conectamos la sirena. Queremos que el aviso quede activado para siempre.
sensorFerreteria.on('stock_bajo', (producto) => {

    // Esto es lo que suena en el taller cuando salta la alarma
    console.log(`¡ALERTA! El stock de ${producto.nombre} ha bajado a ${producto.cantidad}`);

});

// 5. Encendemos la máquina y esperamos a que vuelva el operario del almacén
async function iniciarJornada() {
    try {
        // Pausamos la línea de ejecución de esta tarea hasta que nos traigan la pieza.
        const producto = await consultaStock('TUB-050');

        console.log(`Hemos tráido del almacén: ${producto.nombre} - Cantidad: ${producto.cantidad}`);

        // 6. Comprobamos la presión (vamos a suponer que la alarma salta si hay menos de 5)
        if (producto.cantidad < 5) {
            
            // ¡Peligro! El sensor ha detectado una caída de presión.
            sensorFerreteria.emit('stock_bajo', producto);
        }
    } catch (error) {
        console.error('Fallo en la línea de suministro:', error);
    
    }
    
}

// Le damos al botón de encendido general
iniciarJornada();