// 1. EL MOZO LENTO( No toques esta función, es el mozo trabajando)
// Fíjate que devuelve una "Promise" (El Busca del restaurante)
function irAlFondoDelAlmacen(herramienta) {
    return new Promise((resolver, rechazar) => {
        setTimeout(() => {
            if (herramienta === 'Destornillador Mágico') {
                // Si le pedimos esto, el mozo falla y RECHAZA la promesa
                rechazar('❌ ¡Jefe, he buscado por todas partes pero no existe!');
            } else {
                resolver(herramienta);
            }
        }, 2000);
    });
}

// 2. EL ENCARGADO DEL MOSTRADOR
// Como el encargado va a tener que ESPERAR, la función tiene que ser asincrona.
// HUECO 1: Pon la palabra mágica para avisar de que esta función usa tiempos de espera
async function atenderMostrador() {

    console.log('PASO 1: Cliente VIP pide un Destornillador Mágico...');
    try {
        // Intentamos esperar al mozo...
        const cajaRecibida = await irAlFondoDelAlmacen('Destornillador Mágico');
        console.log('PASO 2: El mozo trajo la ' + cajaRecibida);
    
    }
    catch (error) {

        console.log('PASO 2: (PROBLEMA): El mozo dice -> ' + error);
        console.log('PASO 3: Pedimos disculpas al cliente y le ofrecemos otra cosa.');
    }

}

atenderMostrador();