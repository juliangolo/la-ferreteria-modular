import {EventEmitter} from 'events';

export const sensorGas = new EventEmitter();

export function detectarFuga(nivel) {
    
        if (nivel > 50) {
            sensorGas.emit('fuga_detectada', { nivel, zona: 'Almacén A' }); 
         
        }
}    