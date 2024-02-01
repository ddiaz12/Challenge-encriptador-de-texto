function cifrar() {
    var inputText = document.getElementById('input-text').value;
    var outputText = document.getElementById('output-text');
    
    // Convertir letras según las llaves de encriptación
    var result = "";
    for (var i = 0; i < inputText.length; i++) {
        var char = inputText[i];
        switch (char) {
            case 'e':
                result += 'enter';
                break;
            case 'i':
                result += 'imes';
                break;
            case 'a':
                result += 'ai';
                break;
            case 'o':
                result += 'ober';
                break;
            case 'u':
                result += 'ufat';
                break;
            default:
                result += char;
        }
    } 
    esconder();  
    outputText.value = result;
}

function esconder(){
    var btnCopiar = document.getElementById("boton3");
    btnCopiar.hidden = false;
}

function descifrar() {
    var inputText = document.getElementById('input-text').value;
    var outputText = document.getElementById('output-text');

    // Convertir de la versión encriptada a la original
    var result = "";
    var currentIndex = 0;
    while (currentIndex < inputText.length) {
        var found = false;
        for (var len = 5; len > 1; len--) {
            var currentSubstring = inputText.substr(currentIndex, len);
            switch (currentSubstring) {
                case 'enter':
                    result += 'e';
                    currentIndex += len;
                    found = true;
                    break;
                case 'imes':
                    result += 'i';
                    currentIndex += len;
                    found = true;
                    break;
                case 'ai':
                    result += 'a';
                    currentIndex += len;
                    found = true;
                    break;
                case 'ober':
                    result += 'o';
                    currentIndex += len;
                    found = true;
                    break;
                case 'ufat':
                    result += 'u';
                    currentIndex += len;
                    found = true;
                    break;
            }
            if (found) {
                break;
            }
        }
        if (!found) {
            result += inputText[currentIndex];
            currentIndex++;
        }
    }

    outputText.value = result;
}

function limpiarCampo() {
    return document.getElementById("input-text").value = "";
}

function validarinput(){
    var texto = document.getElementById("input-text").value;
    var error = document.getElementById("error-message");
    var validacion = /^[a-z]+$/;

    if (!validacion.test(texto)){
        limpiarCampo();
        error.innerText = "No se aceptan mayúsculas ni caracteres especiales";
        setTimeout(function () {
            error.innerText = "";
        }, 3000);
        return  false;
    }
    
}