function copiarTexto() {
    let textoCopiado = document.querySelector(".texto-criptografado p");
    navigator.clipboard.writeText(textoCopiado.innerText)
        .then(() => {
            alert("Texto copiado");
            location.reload(); // Recarrega a página após copiar
        })
        .catch(err => {
            console.error('Erro ao copiar texto: ', err);
        });
}