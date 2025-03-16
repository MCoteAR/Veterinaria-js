const { registrar, leer } = require("./operaciones");

// Capturar los argumentos desde la línea de comandos
const [operacion, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2);

if (operacion === "registrar") {
    if (!nombre || !edad || !tipo || !color || !enfermedad) {
        console.log("Error: Debes proporcionar todos los datos del animal.");
    } else {
        registrar(nombre, edad, tipo, color, enfermedad);
    }
} else if (operacion === "leer") {
    leer();
} else {
    console.log("Operación no válida. Usa 'registrar' o 'leer'.");
}
