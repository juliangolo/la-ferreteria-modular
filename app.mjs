console.log('PASO 1: El cliente 1 entra y pide una Sierra pesada del fondo del almacén.');

// Llamamos a la función asíncrona (el mozo lento)
setTimeout(() => {
    console.log('PASO 2: El mozo por fin llega con la Sierra del cliente 1.');
}, 3000); 
 
console.log('PASO 3: Atendemos al cliente 2 que solo quería un paquete de chicles rápido.');

