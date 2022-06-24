/* Carne - 400gr por pessoa             + de 6h 650gr
*  Cerveja - 1200ml por pessoa          + de 6h 2000ml
*  Refrigerante - 1000ml por pessoa     + de 6h 1500ml
*/
/**
 * TO DO: melhorar implementação usando funções para tarefas específicas ao invés de uma única função 
 * fazer tudo.
 */

function calcular() {
    let adultos = document.getElementById("adultos");
    let criancas = document.getElementById("criancas");
    let duracao = document.getElementById("duracao");
    let result = document.getElementById("result");

    let carne;
    let cerveja;
    let refrigerante;

    if (duracao.value < 6){
        carne = ((adultos.value * 400) + (criancas.value * 200)) / 1000;
        cerveja = Math.ceil((adultos.value * 1200) / 355);
        refrigerante = Math.ceil(((criancas.value * 500) + ((adultos.value * 1000))) / 2000); 
    } else {
        carne = ((adultos.value * 650) + (criancas.value * 325)) / 1000;
        cerveja = Math.ceil((adultos.value * 2000) / 355);
        refrigerante = Math.ceil(((criancas.value * 750) + ((adultos.value * 1500))) / 2000); 
    }
    
    result.innerHTML = `<p>${carne} Kg de carne</p>`;
    result.innerHTML += `<p>${cerveja} latas de cerveja</p>`;
    result.innerHTML += `<p>${refrigerante} garrafas de refrigerante</p>`;
}