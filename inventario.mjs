// 1. El almacén es una LISTA de cajas (Array de Objetos)
const productos = [
    { codigo: 'VAL-001', nombre: 'Válvula de Gas 1/2', cantidad: 10, temperatura: 18 },
    { codigo: 'TUB-050', nombre: 'Tubo Cobre 15mm', cantidad: 2, temperatura: 25 },
    { codigo: 'DIS-001', nombre: 'Disolvente Pro', cantidad: 10, temperatura: 25 }
];

export function consultaStock(codigo) {
    console.log(`Buscando ${codigo} en las estanterias...`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 2. Buscamos en la lista el producto que coincida con el código.
            const productoEncontrado = productos.find(p => p.codigo === codigo);

            if (productoEncontrado) {
                resolve(productoEncontrado); // Entregamos la mercancía 
            } else {
                reject('Error: Producto no encontrado'); // Avisamos del fallo
            }
        }, 2000);
    });
}