// Função para criptografar o texto
function criptografarTexto(texto) {
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

// Função para descriptografar o texto
function descriptografarTexto(texto) {
    return texto.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
}

// Função para copiar o texto para a área de transferência
function copiarTexto(texto) {
    navigator.clipboard.writeText(texto)
        .then(() => {
            console.log('Texto copiado para a área de transferência:', texto);
        })
        .catch(err => {
            console.error('Erro ao copiar texto:', err);
        });
}

// Seleciona os elementos do DOM
const textoInput = document.getElementById('textoCriptografarDescriptografar');
const resultadoTextArea = document.getElementById('textoResultado');
const criptografarBtn = document.getElementById('criptografar');
const descriptografarBtn = document.getElementById('descriptografar');
const copiarBtn = document.getElementById('copiar');

document.addEventListener("DOMContentLoaded", function() {
    const botaoRegras = document.getElementById("mostrarRegras");
    const listaRegras = document.getElementById("listaRegras");

    botaoRegras.addEventListener("click", function() {
        if (listaRegras.style.display === "none") {
            listaRegras.style.display = "block";
        } else {
            listaRegras.style.display = "none";
        }
    });
});

// Adiciona evento de clique para criptografar o texto
criptografarBtn.addEventListener('click', () => {
    const texto = textoInput.value;
    const textoCriptografado = criptografarTexto(texto);
    resultadoTextArea.value = textoCriptografado;
});

// Adiciona evento de clique para descriptografar o texto
descriptografarBtn.addEventListener('click', () => {
    const texto = textoInput.value;
    const textoDescriptografado = descriptografarTexto(texto);
    resultadoTextArea.value = textoDescriptografado;
});

// Adiciona evento de clique para copiar o texto resultante
copiarBtn.addEventListener('click', () => {
    const textoResultado = resultadoTextArea.value;
    copiarTexto(textoResultado);
});

// Adicione este código ao seu arquivo JavaScript

document.addEventListener("DOMContentLoaded", function() {
    const botaoCopiar = document.getElementById("copiar");
    const mensagemCopiado = document.getElementById("mensagemCopiado");

    botaoCopiar.addEventListener("click", function() {
        mensagemCopiado.style.display = "block";
        setTimeout(function() {
            mensagemCopiado.style.display = "none";
        }, 2000); // Esconde a mensagem após 2 segundos
    });
});