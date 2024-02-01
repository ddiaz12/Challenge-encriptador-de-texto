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
    mostrarBotonCopiar();
}

function mostrarBotonCopiar() {
    var btnCopiar = document.getElementById("boton3");
    btnCopiar.hidden = false;
}

function descifrar() {
    const inputText = document.getElementById('input-text').value;
    const outputText = document.getElementById('output-text');

    const decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

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
    }

}