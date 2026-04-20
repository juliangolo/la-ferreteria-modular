import { inventario } from './productos.mjs';

function procesarDevolucion(nombreHerraamienta, cantidadDevuelta, estaRota) {

    console.log('\n--- Cliente devolviendo ' + cantidadDevuelta + ' ' + nombreHerraamienta + '---');

    // 1. Buscamos la caja en el almacén 
    const caja = inventario.find(item => item.nombre === nombreHerraamienta);

    // 2. Tomamos la decisión: ¿Está rota?
    if (estaRota === true) {

        // SI ESTÁ ROTA, no la volvemos a poner en el estante (va a la basura).
        // Solo calculamos cuánto dinero hay que devolver al cliente.
        const dineroADevolver = caja.precio * cantidadDevuelta;
        return '⚠️ Defectuoso. Directo a la basura. Devolver al cliente: ' + dineroADevolver + '€';

    } else {

        // Si NO está rota, la ponemos en el estante ( SUMAMOS al stock ) y devolvemos el dinero.
        caja.stock = caja.stock + cantidadDevuelta;

        const dineroADevolver = caja.precio * cantidadDevuelta
        return '✅ Aceptada. Nuevo stock de ' + nombreHerraamienta + ' es: ' + caja.stock + '. Devolver: ' + dineroADevolver + '€';

    }
}

// --- PRUEBAS DE FUEGO ---
// 1, Devuelven 1 Taladro roto (El stock debería quedarse igual: 2)
console.log(procesarDevolucion('Taladro', 1, true) );

// 2. Devuelven 2 Martillos en buen estado (El stock debería subir a 6)
console.log(procesarDevolucion('Martillo', 2, false) );
