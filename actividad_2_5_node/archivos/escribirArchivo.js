const fs = require('fs');
const path = require('path');

const contenido = `Resultados de la actividad:
- Variables: Tipos demostrados.
- Condicional: Validación de edad.
- Ciclos: Solo números pares mostrados.
- Función: Cálculo de IVA.
- Módulos: Conversor de moneda.
- Fecha: ${new Date().toLocaleString()}
`;

const rutaArchivo = path.join(__dirname, 'resultado.txt');

fs.writeFile(rutaArchivo, contenido, (err) => {
    if (err) {
        console.error("Error al escribir el archivo:", err);
    } else {
        console.log(`✅ Archivo creado exitosamente en: ${rutaArchivo}`);
    }
});
