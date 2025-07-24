// Solicita al usuario el rango
let min = Number(prompt("Indica el número mínimo del rango:"));
let max = Number(prompt("Indica el número máximo del rango:"));

// Genera el número secreto en el rango elegido
let numeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min;
let numeroUsuario = 0;
let intentos = 0;
let maxIntentos = 3;

while (numeroUsuario !== numeroSecreto && intentos < maxIntentos) {
    numeroUsuario = Number(prompt(`¿Me indicas un número entre ${min} y ${max} por favor?:`));
    intentos++;
    console.log(numeroUsuario);

    if (numeroUsuario === numeroSecreto) {
        alert(`¡Enhorabuena! Has acertado el número secreto en ${intentos} intento(s).`);
    } else if (numeroUsuario < numeroSecreto) {
        alert("Pista: El número secreto es mayor.");
    } else if (numeroUsuario > numeroSecreto) {
        alert("Pista: El número secreto es menor.");
    }
}

if (numeroUsuario !== numeroSecreto) {
    alert(`¡Agotaste tus ${maxIntentos} intentos! El número secreto era ${numeroSecreto}.`);
}
