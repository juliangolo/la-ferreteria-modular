// 1. IMPORTACIÓN: Trae la lista de cajas desde el otro archivo
import { inventario } from "./productos.mjs";

// 2. FUNCIÓN: Creamos la máquina. Entra un nombre, sale un número (dinero).
function venderYActualizar(nombreHerramienta, cantidadPedida) {

    console.log('---------------------------------------------');
    console.log('Intentando vender ' + cantidadPedida + ' ' + nombreHerramienta + '...');

    // Paso A: Buscamos en la lista la caja que coincida con el nombre que entra en la máquina
    const caja = inventario.find(item => item.nombre === nombreHerramienta);

    // Paso B: Calculamos el dinero multiplicando el precio por el stock de la caja que hemos encontrado
    if (cantidadPedida > caja.stock) {

        // Si pide más de lo que hay, la máquina escupe un error
        return '❌ Error: No se puede vender. Solo nos quedan ' + caja.stock + ' unidades.';

    } else {

        // Si hay stock suficiente, calculamos el dinero a cobrar.
        // MULTIPLICA el precio de la caja por lo que ha pedido el cliente.
        const total = caja.precio * cantidadPedida;

        caja.stock = caja.stock - cantidadPedida;



        return '✅ Cobrados ' + total + '€. El nuevo stock de ' + nombreHerramienta + ' es: ' + caja.stock;
    
    }
}


// 3. PRUEBAS DE FUEGO 
// 1. Vendemos 1 Taladro ( Habia 2. Deberia quedar 1)
console.log( venderYActualizar('Taladro', 1) );

// 2, Viene otro cliente y se lleva otro Taladro (Quedan 1. Deberían quedar 0)
console.log( venderYActualizar('Taladro', 1) );

// 3. Viene un tercer cliente pidiendo 1 Taladro ( ¡Debería saltar el ERROR del if!)
console.log( venderYActualizar('Taladro', 1) );
