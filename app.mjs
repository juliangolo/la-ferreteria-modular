// 1. Importamos la herramienta de Node para leer archivos de forma asíncrona
import fs from 'fs/promises';

// 2. Nuestra función encargada de ir al disco duro
async function abrirBaseDeDatos() {

    try {
      console.log("PASO 1: Yendo al archivo inventario.json...");

      const textoDelArchivo = await fs.readFile('./inventario.json', 'utf-8');

      const cajas = JSON.parse(textoDelArchivo);

      console.log("PASO 2: ¡Lectura existosa! Tenemos " + cajas.length + " tipos de herramientas.");
      console.log(cajas[0]);

}

    catch (error) {
        console.log('❌ ERROR CRÍTICO: No he podido leer el archivo. ¿Seguro que existe?');
        console.log(error.message);
    }
}

abrirBaseDeDatos();

    