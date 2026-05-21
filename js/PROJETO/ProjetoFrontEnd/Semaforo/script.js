let btnIniciar = document.getElementById("btnIniciar");
let btnParar = document.getElementById("btnParar");
let rodando = false;

btnIniciar.addEventListener("click", iniciar);
btnParar.addEventListener("click", parar);


function parar() {
    rodando = false;
}

function esperar(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function iniciar(){
    if (rodando) return;
    rodando = true;
    let verde = document.querySelector(".verde");
    let amarelo = document.querySelector(".amarelo");
    let vermelho = document.querySelector(".vermelho");


    while(rodando){
        vermelho.style.backgroundColor = "red";
        amarelo.style.backgroundColor = "transparent";
        verde.style.backgroundColor = "transparent";
        await esperar(2000);
        if (!rodando) break;
        
        vermelho.style.backgroundColor = "transparent";
        amarelo.style.backgroundColor = "transparent";
        verde.style.backgroundColor = "green";
        await esperar(2000);
        if (!rodando) break;

        vermelho.style.backgroundColor = "transparent";
        amarelo.style.backgroundColor = "yellow";
        verde.style.backgroundColor = "transparent";
        await esperar(2000);
        if (!rodando) break;

        
    }

}