const fs = require("fs");

const registrar = (nombre, edad, tipo, color, enfermedad) => {
    // Leer el archivo citas.json
    let citas = [];
    try {
        const data = fs.readFileSync("citas.json", "utf8");
        citas = JSON.parse(data);
    } catch (error) {
        console.log("Error al leer el archivo, creando uno nuevo...");
    }

    // Agregar la nueva cita
    const nuevaCita = { nombre, edad, tipo, color, enfermedad };
    citas.push(nuevaCita);

    // Guardar en el archivo JSON
    fs.writeFileSync("citas.json", JSON.stringify(citas, null, 2));
    console.log("Cita registrada con éxito.");
};

const leer = () => {
    try {
        const data = fs.readFileSync("citas.json", "utf8");
        const citas = JSON.parse(data);

        if (citas.length === 0) {
            console.log("No hay citas registradas.");
        } else {
            console.log("📋 Citas registradas:");
            citas.forEach((cita, index) => {
                console.log(`${index + 1}. ${cita.nombre}, ${cita.edad}, ${cita.tipo}, ${cita.color}, ${cita.enfermedad}`);
            });
        }
    } catch (error) {
        console.log("Error al leer el archivo de citas.");
    }
};

module.exports = { registrar, leer };
