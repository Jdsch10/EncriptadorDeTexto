// Variables y selectores
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const copyBtn = document.getElementById('copy-btn');
const clearInputBtn = document.getElementById('clear-input-btn');
const clearOutputBtn = document.getElementById('clear-output-btn');
const validationMsg = document.getElementById('validation-msg');
const muñecoImg = document.getElementById('muñeco-img');
const sinMensajeImg = document.getElementById('sinMensaje-img');
const outputButtons = document.getElementById('output-buttons');

// Función para validar el texto (sin mayúsculas ni caracteres especiales)
function textoValido(text) {
    const regex = /^[a-z\s]+$/;
    return regex.test(text);
}

// Función para encriptar texto
function textoCifrado(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

// Función para descifrar texto
function textoDescifrado(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

// Función para limpiar los campos de texto
function limpiarTextArea(textArea) {
    textArea.value = '';
}

// Función para ocultar/mostrar elementos
function alternarVisibilidad(element, visible) {
    element.style.display = visible ? 'block' : 'none';
}

// Evento para el botón de cifrar
encryptBtn.addEventListener('click', () => {
    const text = inputText.value;
    if (textoValido(text)) {
        validationMsg.textContent = '';
        outputText.value = textoCifrado(text);
        alternarVisibilidad(muñecoImg, false);
        alternarVisibilidad(sinMensajeImg, false);
        alternarVisibilidad(outputButtons, true);
    } else {
        validationMsg.textContent = 'No se aceptan mayúsculas ni caracteres especiales.';
        outputText.value = '';
        alternarVisibilidad(muñecoImg, true);
        alternarVisibilidad(sinMensajeImg, true);
        alternarVisibilidad(outputButtons, false);
    }
});

// Evento para el botón de descifrar
decryptBtn.addEventListener('click', () => {
    const text = inputText.value;
    if (textoValido(text)) {
        validationMsg.textContent = '';
        outputText.value = textoDescifrado(text);
        alternarVisibilidad(muñecoImg, false);
        alternarVisibilidad(sinMensajeImg, false);
        alternarVisibilidad(outputButtons, true);
    } else {
        validationMsg.textContent = 'No se aceptan mayúsculas ni caracteres especiales.';
        outputText.value = '';
        alternarVisibilidad(muñecoImg, true);
        alternarVisibilidad(sinMensajeImg, true);
        alternarVisibilidad(outputButtons, false);
    }
});

// Evento para el botón de copiar
copyBtn.addEventListener('click', () => {
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});

// Evento para el botón de limpiar el texto de entrada
clearInputBtn.addEventListener('click', () => {
    limpiarTextArea(inputText);
    validationMsg.textContent = '';
});

// Evento para el botón de limpiar el texto procesado
clearOutputBtn.addEventListener('click', () => {
    limpiarTextArea(outputText);
    alternarVisibilidad(muñecoImg, true);
    alternarVisibilidad(sinMensajeImg, true);
    alternarVisibilidad(outputButtons, false);
});