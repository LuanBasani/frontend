//Desafio

// Converta o Texto: " João, mariA, NicolaS, SocoRRo, zuLeiCa"
// em um Arrya no Seguinte Formato: [João,Maria,Nicolas,Socorro,Zuleica]
const mensagem_errado = " João, mariA, NicolaS, SocoRRo, zuLeiCa";

semEspaco = mensagem_errado.trim()

const array = semEspaco.split(", ");
console.log(array);

for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toLowerCase();
    array[i] = array[i][0].toUpperCase() + array[i].substring(1);
}

console.log(array); 