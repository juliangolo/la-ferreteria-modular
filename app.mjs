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

// --- LA NOVEDAD: EL MOSTRADOR INFINITO ---
async function abrirMostrador() {

    console.log("------------------------------------------");
    console.log('👋 Bienvenido a Ferretería Julián ');
    console.log("------------------------------------------");

    // HUECO 1: La palabra en inglés para "MIENTRAS" (empieza por w).
    // Al poner (true). le decimos que este bucle es infinito hasta que le digamos lo contrario.
    while(true) {

        // Atendemos al cliente
        const respuestaUsuario = await teclado.question("\n¿Qué herramienta quieres vender? (o escribe 'salir' para cerrar): ");

        // 🛡️ El botón de apagado de emergencia del jefe
        if (respuestaUsuario === 'salir') {
            console.log("Cerrando la persina. ¡Buen trabajo hoy, Julián!");
            
            //  HUECO 2: La palabra mágica en inglés para "ROMPER" un bucle (empieza por b)
            break;
    }

    console.log("Procesando la venta de: " + respuestaUsuario + "...");
    await venderYGuardar(respuestaUsuario);

    // Cuando termina de vender, como está dentro del bucle, volverá arriba y hará la pregunta otra vez.
    } 
    
    // El micrófono solo se apaga si rompemos el bucle y llegamos hasta aquí abajo
    teclado.close();
}

abrirMostrador();




    