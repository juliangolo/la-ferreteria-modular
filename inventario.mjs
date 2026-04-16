// Este es el catalago de la ferretería
const stock = {
    'VAL-001': {nombre: 'Válvula de Gas 1/2', cantidad: 10},
    'TUB-050': {nombre: 'Tubo Cobre 15mm', cantidad: 2}
};

// Necesitamos que esta función pueda ser usada desde fuera de este archivo.
 export async function consultaStock(codigo) {

    console.log(`Buscando ${codigo} en las estanterias...`);

    return new Promise((resolve, reject) => {

        // Simulamos que tardamos 2 segundos en ir a buscar la pieza
        setTimeout(() => {
            const producto = stock[codigo];

            if (producto) {
                // ¿resolvemos la promesa entregando el producto.                
                resolve(producto);
            } else {
                // Rechazamos la promesa para avisar del fallo.
                reject('Error: Producto no encontrado en el catálago');
            }
        }, 2000);
    });
    
}