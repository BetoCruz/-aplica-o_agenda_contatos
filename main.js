let nomeForm = document.getElementById('nome-form');
let numeroForm = document.getElementById('numero-form');
const form = document.getElementById('form');
let listaTel = [];
let listaNomes = [];

let corpoTabela = '';

form.addEventListener('submit', e => {
    e.preventDefault();

    addDadosTabela();
    atualizaTabela();  

});

function addDadosTabela(){
    listaNomes.push(nomeForm.value);
    listaTel.push(numeroForm.value);

    let dados = '<tr>';
    dados += `<td>${nomeForm.value}</td>`;
    dados += `<td>${numeroForm.value}</td>`;
    dados += `</tr>`;
    corpoTabela += dados;  

    listaNomes.value = '';
    listaTel.value = '';
}

function atualizaTabela() {
    let tabela = document.querySelector('tbody');
    tabela.innerHTML = corpoTabela;
    
}


    // function criaTabela(){
    //     for( let i = 0 ; i < listaTel.length;i++ ){
    //     dados = '<tr>';
    //     dados += `<td>${nomeForm.value[i]}</td>`;
    //     dados += `<td>${numeroForm.value[i]}</td>`;
    //     dados += `</tr>`;
    //     }
    // }