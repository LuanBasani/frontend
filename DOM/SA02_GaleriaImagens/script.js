//galeria de imagens Dinâmicas com DOM

let uploadInput = document.getElementById("upload");
let btnAdd = document.getElementById("addImagens");
let galeria = document.querySelector(".galeria");
let carrossel = document.querySelector(".carrossel");

//vetor para as imagens

//adicionar imagens no vetor

btnAdd.addEventListener("click", () => {
    let imagemURL = uploadInput.value.trim(); //pega o endereço da imagens no input
    if (imagemURL === "") return; // se a condição for verdadeira interrompe o código
  //parte de baixo do código continua se a condição acima for falsa
    imagens.push(imagemURL);
    atualizaGaleria(); //atualiza a imagem na galeria
    atualizaCarrossel(); //ataualiza a imagem no carrossel
    uploadInput.value = ""; //limpa o campo do input
});
