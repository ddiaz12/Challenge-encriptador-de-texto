function cifrar() {
    const inputText = document.getElementById('input-text').value;
    const outputText = document.getElementById('output-text');

    const encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    outputText.value = encryptedText;
}

function mostrarEnPantalla() {
    var btnCopiar = document.getElementById("boton3");
    var mostrarOutput = document.getElementById("output-text");
    mostrarOutput.hidden = false;
    btnCopiar.hidden = false;
}

function ocultarEnPantalla() {
    var ocultar = document.querySelector(".section-muneco");
    ocultar.style.display = "none";
}

function descifrar() {
    const inputText = document.getElementById('input-text').value;
    const outputText = document.getElementById('output-text');

    const decryptedText = inputText
        .replace(/ufat/g, 'u')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/enter/g, 'e');

    outputText.value = decryptedText;
}



function copiar() {
    let copyText = document.getElementById('output-text');
    const copiarContenido = async () => {
        try {
            await navigator.clipboard.writeText(copyText.value);
            console.log('Contenido copiado al portapapeles');
        } catch (err) {
            console.error('Error al copiar: ', err);
        }
    }
    limpiarCampo();
    copiarContenido();
}


function limpiarCampo() {
    return document.getElementById("input-text").value = "";
}

function validarinput() {
    var texto = document.getElementById("input-text").value;
    var error = document.getElementById("error-message");
    var validacion = /^[a-z\s]+$/;

    if (!validacion.test(texto)) {
        limpiarCampo();
        error.innerText = "No se aceptan mayúsculas ni caracteres especiales";
        setTimeout(function () {
            error.innerText = "";
        }, 3000);
        return false;
    } else {
        mostrarEnPantalla();
        ocultarEnPantalla();
    }
}