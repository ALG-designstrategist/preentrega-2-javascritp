// Simulador: control de captcha con reintentos
const CAPTCHA = "Parangaricutirimicuaro"
let intentos = 0;
let acceso = false;

// Bucle: repite 2 intentos o hasta acertar
while (intentos < 2 && !acceso) {
    const ingreso = prompt("ingresa la siguiente palabra: Parangaricutirimicuaro");

    // Condicional dentro del bucle
    if (ingreso === CAPTCHA) {
        acceso = true;
        console.log("Captcha validado correctamente")
    } else {
        intentos++;
        console.log(`Captcha incorrecto. Intentos restantes: ${2 - intentos}`);
    }
}

// Resultado final al terminar el bucle
if (!acceso) {
    console.log("Lo siento hemos detectado que eres un bot 🤖 por lo que no puedes continuar hasta dentro de 24hrs.")
}