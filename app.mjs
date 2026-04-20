import fs from 'fs/promises';
// 1. Traemos la herramienta para leer el teclado
import readline from 'readline/promises';

// 2. Configuramos el "microfono" (stdin) y el "altavoz" (stdout) de la terminal
const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// --- LA MÁQUINA DEL VIERNES(La he mejorado un poco) ---
async function venderYGuardar(nombreHerramienta) {
    try {
        const textoLeido = await fs.readFile('./inventario.json', 'utf-8');
        const cajas = JSON.parse(textoLeido);

        const cajaEncontrada = cajas.find(item => item.nombre === nombreHerramienta);

        // 🛡️ Red de seguridad: ¿Qué pasa si el usuario escribe "Tijeras" y no tenemos?
        if (cajaEncontrada === undefined) {
            console.log("❌ Lo siento , no tenemos '" + nombreHerramienta + "' en el catálago.");
            return; // Esto hace que la función se detenga aquí y no intente restar stock
        }

        cajaEncontrada.stock = cajaEncontrada.stock - 1;
        const textoParaGuardar = JSON.stringify(cajas, null, 2);

        await fs.writeFile('./inventario.json', textoParaGuardar);
        console.log("✅ Venta realizada. Quedan " + cajaEncontrada.stock + " unidades de " + nombreHerramienta);

    } catch (error) {
        console.log('❌ Error en el almacén:', error.message);
    }
}

// --- LA NOVEDAD: EL MOSTRADOR INTERACTIVO ---
async function abrirMostrador() {
    
    console.log("------------------------------------------");
    console.log('👋 Bienvenido a Ferretería Julián ');
    console.log("------------------------------------------");

    // HUECO 1: La palabra clave para obligar a Node a ESPERAR a que tecleemos
    const respuestaUsuario = await teclado.question('¿Qué herramienta quieres vender hoy?: ');

    console.log('\nProcesando la venta de: ' + respuestaUsuario + '...');

    // HUECO 2: Llamamos a la máquina de arriba yt le metemos lo que ha escrito el usario
    await venderYGuardar(respuestaUsuario);

    // HUECO 3: Cuando terminamos, hay que apagar el "microfono" o la terminal se quedará pillada para siempre.
    // Pista: la palabra inglesa para "cerrar" (empieza por c)
    teclado.close();
}

// 3. Abrimos la persiana
abrirMostrador();




    