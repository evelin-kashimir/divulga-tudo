//VARIÁVEIS GLOBAIS PARA CONDIÇÕES BÁSICAS
let invest = 0,
v_original = 0, 
tot_visu = 0,
clicks = 0,
comp = 0,
v_comp = 0;

//EVENTO AO BOTÃO CADASTRAR, CÁLCULO DE RESULTADOS E VALIDAÇÃO DE FORMULÁRIO
$("#cadastrar").click(function(){ 

    invest = Number( $("#investimento").val() );    //Valor de investimento
    let cliente = $("#cliente").val();              //Nome cliente
    let anuncio = $("#anuncio").val();              //Nome do anúncio

    //CALCULO PARA GERAR RESULTADOS DO ANÚNCIO
    v_original = tot_visu += invest * 30;           //A cada R$1.00 investido, 30 visualizações 
    clicks = (v_original / 100) * 12;               //De 100 visualizações, 12 clicks
    comp = (clicks / 20) * 3;                       //20 clicks, 3 compartilhamentos 
    v_comp = (comp * 40) * 3;                       //1 compartilhamento +40 visualizações, a cada 1 compartilhamento, +3 em sequência.   
    tot_visu  += v_comp                             //Valores multiplicados pelos dias de investimento 

   if(cliente.length == 0){
        alert("[ERRO] Preencha todos os campos!")
    } else{
        alert("Cadastro Registrado com Sucesso!");
        $("#cadastrar").attr("disabled", true);
        $("#novo_cadastro").hide();
        $("#b-relatorio").show();
    }

console.log(cliente)
console.log(anuncio)
});

//MOSTRANDO RELATÓRIO DE GANHOS
$("#b-relatorio").click(function(){

    let cliente = $("#cliente").val();
    let anuncio = $("#anuncio").val();

    if(cliente.length == 0){
        alert("[ERRO] Preencha todos os campos!")
    
    } else{
        $("#novo_cadastro").hide();
    
        $("#box_1").hide();
        
        $("#p1").text(cliente);
        $("#p2").text(anuncio);
        $("#p3").text(invest.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
        $("#p4").text(clicks);
        $("#p5").text(comp);
        $("#p6").text(tot_visu);
        $("#novo_cadastro").show();
    };
});

