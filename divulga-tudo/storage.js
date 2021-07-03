//OCULTANDO TABELA DE CADASTROS
$( document ).ready(function() { $("#box_3").hide(); $("#b-relatorio").hide();} );

//CRIANDO CLASSE COM PARA FACILITAR SAÍDA NA TABELA
class Cliente {
    constructor(nome, anuncio, investimento, clicks, comp, visu) {
        this.nome = nome;
        this.anuncio = anuncio;
        this.investimento = investimento;
        this.clicks = clicks;
        this.compartilhamentos = comp;
        this.visu = visu;
    };
};

var clientes = new Array
var chave_lista_clientes = "lista_clientes" //Chave no storage
verificarArmazenamento() //chamando função

//VERIFICA EXISTENCIA DE DADOS NO STORAGE
function verificarArmazenamento() { 
    let dados = localStorage.getItem(chave_lista_clientes)
    console.log(clientes)
    
    if (dados == null) {
        atualizarArmazenamento()
    
    } else {
        clientes = JSON.parse(dados) //Transformando em objeto JSON
        clientes.forEach(
            function (item) {
                let cliente = new Cliente(
                    item.nome,
                    item.anuncio,
                    item.investimento,
                    item.clicks,
                    item.compartilhamentos,
                    item.visu
                );
                console.log(cliente)
                inserirLinha(cliente)
            }
        );
    };
};

//INSERINDO NOVO CADASTRO NO STORAGE
function atualizarArmazenamento() {
    localStorage.setItem(chave_lista_clientes, JSON.stringify(clientes)); //transformando em String JSON
    console.log(clientes);
};

//MOSTRANDO NOVO CADASTRO NA TELA
$("#cadastros").click(function (){
    $("#box_2").hide();
    $("#box_3").show();
    
    let clientx = new Cliente(  //Novo objeto, com dados salvos
        $("#cliente").val(),
        $("#anuncio").val(),
        $("#investimento").val(),
        clicks,
        comp,
        tot_visu    
    );

    inserirLinha(clientx)   //chamando função com objeto como parâmetro

    $("input").val('')
    clientes.push(clientx)
    console.clear()
    console.log(clientes)

    atualizarArmazenamento()    //chamando função para atualizar 
});

//CRIANDO NOVA LINHA NA TABELA
function inserirLinha(cliente) {
    let linha = $("<tr></tr>")

    linha.append($("<td></td>").text(cliente.nome))
    linha.append($("<td></td>").text(cliente.anuncio))
    linha.append($("<td></td>").text(cliente.investimento))
    linha.append($("<td></td>").text(cliente.clicks))
    linha.append($("<td></td>").text(cliente.compartilhamentos))
    linha.append($("<td></td>").text(cliente.visu))
    $("#res").append(linha)
};
