import fs from 'fs/promises';

async function venderYGuardar(nombreHerramienta) {
    try { 
        const textoLeido = await fs.readFile('./inventario.json', 'utf-8');
        const cajas = JSON.parse(textoLeido);

        const cajaEncontrada = cajas.find(item => item.nombre === nombreHerramienta);
        cajaEncontrada.stock = cajaEncontrada.stock - 1;

        console.log('✅ Venta realizada. Nuevo stock de ' + nombreHerramienta + ': ' + cajaEncontrada.stock);

        const textoParaGuardar = JSON.stringify(cajas, null, 2);
        
        await fs.writeFile('./inventario.json' , textoParaGuardar);

        console.log ('💾 ¡Cambios guardados en el disco duro permanentemente!');

    } catch (error) {
        console.log('❌ Error en la. operación:', error.message);
    }
}

venderYGuardar('Martillo');


    