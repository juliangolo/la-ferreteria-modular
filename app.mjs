// 1. IMPORTACIÓN: Trae la lista de cajas desde el otro archivo
import { inventario } from "./productos.mjs";

// 2. FUNCIÓN: Creamos la máquina. Entra un nombre, sale un número (dinero).
function calcularDineroEnStock(nombreHerramienta) {

    // Paso A: Buscamos en la lista la caja que coincida con el nombre que entra en la máquina
    const productoEncontrado = inventario.find(item => item.nombre === nombreHerramienta);

    // Paso B: Calculamos el dinero multiplicando el precio por el stock de la caja que hemos encontrado
    const dineroTotal = productoEncontrado.precio * productoEncontrado.stock;

    // Paso C: La máquina escupe ( devuelve) el resultado
    return dineroTotal;
}

// 3. USO DE LA MÁQUINA: Queremos saber cuánto dinero tenemos en Taladros
console.log('Calculando el valor del invetario de Taladro...');

// Llamamos a la máquina y le metemos la palabra "Taladro"
const valorTaladros = calcularDineroEnStock('Taladro');

console.log('Tenemos un total de ' + valorTaladros + ' euros en Taladros.');
