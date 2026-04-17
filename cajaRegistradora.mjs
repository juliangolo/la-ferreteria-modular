// 1. Exportamos la máquina para que el mostrador (app.mjs) pueda usurla
export function calcularTotal(precio, cantidad) {

    // 2. La máquina hace el cálculo por dentro
    const total = precio * cantidad;

    // 3. ¿Qué variable tiene que devolver (escupir) la máquina al exterior?
    return total;
}