# PARTE I: CALCULADORA DE ALCANCE DE ANÚNCIOS
def separar():
    print('------------------------------------------------')           #Função para separar saídas

# COLETANDO DADOS
print('|          CALCULADORA DE ANÚNCIOS             |')
separar()
invest = float(input('Insira o valor de investimento por dia: R$'))
separar()

#PROCEDIMENTO
def calculadora():
    total = 0
    v_original = invest * 30                           #A cada R$1.00 investido, 30 visualizações
    clicks = (v_original / 100) * 12                   #De 100 visualizações, 12 clicks
    comp = (clicks / 20) * 3                           #20 clicks, 3 compartilhamentos
    v_comp = (comp * 40) * 3                           #1 compartilhamento +40 visualizações, a cada 1 compartilhamento, +3 em sequência.
    total = total + v_comp + v_original                #Total de visualizações

    #SAÍDA
    print(f"Valor investido: R${invest:.2f}")
    separar()
    print(f"Visualizações através do investimento: {v_original:.0f}")
    separar()
    print(f"Compartilhamentos: {comp:.0f}")
    separar()
    print(f"Visualizações por compartilhamento: {v_comp:.0f}")
    separar()
    print(f"Total aproximado de visualizações: {total:.0f}")
    separar()
    print("|               FIM DA CONSULTA                 | ")
calculadora()
