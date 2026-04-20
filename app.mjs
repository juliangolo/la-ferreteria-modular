import fs from 'fs/promises';
import readline from 'readline/promises';

const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1. LA MÁQUINA MEJORADA: Ahora recibe DOS materias primas
async function gestionarInventario(accion, nombreHerramienta) {
    try {
        const textoLeido = await fs.readFile('./inventario.json', 'utf-8');
        const cajas = JSON.parse(textoLeido);

        const cajaEncontrada = cajas.find(item => item.nombre === nombreHerramienta);

        if (cajaEncontrada === undefined) {
            console.log("❌ Lo siento, no tenemos: '" + nombreHerramienta + "' en el catalago.");
            return;
        }   

        // --- LA TOMA DE DECISIONES ---
        // HUECO 1: Si la acción es exactamente "vender"...
        if (accion === "vender") {
            cajaEncontrada.stock = cajaEncontrada.stock - 1;
            console.log("✅ Venta realizada.");

        // HUECO 2: Si no fue vender, comprobamos si la acción es "reponer"
        } else if (accion === "reponer") {
            // HUECO 3: Tienes que SUMAR 1 al stock actual.
            // Pista: Mírate la línea de la resta de arriba y haz lo contrario
            cajaEncontrada.stock = cajaEncontrada.stock + 1;
            console.log("📦 Reposición realizada (Añadido + 1 al almacén).");

        } else {
            console.log("❌ Error: Acción no reconocida. Usa 'vender' o 'reponer'.");
            return; // Cortamos aquí para que no guarde basura
        }

        console.log("👉 Nuevo stock de " + nombreHerramienta + ": " + cajaEncontrada.stock);
        
        // Guardamos los cambios
        const textoParaGuardar = JSON.stringify(cajas, null, 2);
        await fs.writeFile('./inventario.json', textoParaGuardar);


        } catch (error) {
            console.log("❌ Error en el almacén:", error.message);
        
        }   
    }
        
        // --- LA NUEVA MÁQUINA: EL INPECTOR ---
        async function mostrarInventario() {
            try {
                const textoLeido = await fs.readFile('./inventario.json', 'utf-8');
                const cajas = JSON.parse(textoLeido);

                console.log("\n📦 ESTADO ACTUAL DEL ALMACÉN 📦");

                // HUECO 1: Usa la nueva herramienta mágica de la consola para dibujar la tabla de  'cajas'
                console.table(cajas);
                
            } catch (error) {
                console.log("❌ Error al leer el almacén:", error.message);
            }
        }
            
    // 2. EL MOSTRADOR ACTUALIZADO
    async function abrirMostrador() {
        console.log("=======================================");
        console.log("👋 Almacén Centra Ferreterías Julian");
        console.log("=======================================");
    
        while (true) {
            // Primera pregunta: ¿Qué hacemos?
        const respuestaAccion = await teclado.question("\n¿Qué deseas hacer? (vender / reponer / ver / salir); ");

        if (respuestaAccion === "salir") {
            console.log("Cerrando la persiana. ¡Buen trabajo hoy, Julián!");
            break;

            // HUECO 3: Comprobamos si el usuario ha escrito "ver"
            } else if (respuestaAccion === "ver") {
                
                // Llamamos al inspector que acabamos de crear arriba
                await mostrarInventario();

            } else if (respuestaAccion === "vender" || respuestaAccion === "reponer") {
                
                // Solo le pedimos la herramienta si la acción es vender o reponer
                const respuestaHerramienta = await teclado.question("¿Qué herramienta?; ");
                await gestionarInventario(respuestaAccion, respuestaHerramienta);
        
            } else {
                console.log("❌ Acción no reconocida.");
            }
        }

    teclado.close();
}

abrirMostrador();



    