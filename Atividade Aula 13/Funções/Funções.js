var saborPizza="marguerita"
var dia="quinta"

var saborPizza = prompt ('Qual é o sabor de Pizza que você quer?')
var dia = prompt ('Que dia é hoje?')

if (saborPizza == "marguerita" && dia == "quinta") {
    console.log ("Começando a fazer pizza marguerita");
console.log ("[PROMO] : Cliente ganhou bebida grátis!")
} 
else {console.log ("Não temos este sabor disponível")}
//
criarTextoPreco('Tomate', 0.98)

function criarTextoPreco(item, preco) {
    return 'o item ' + item + ' custa R$' + preco;
}
//
criarPizzaPreco("Marguerita", 15)

function criarPizzaPreco(pizza, preco) {
    return 'A pizza de sabor ' + pizza+ ' custa R$' + preco; 
}
//
var conceito, nota = prompt();
if (nota >= 9){
    conceito = 'A';
} else if (nota >=8) {
    conceito = 'B';
} else if (nota >=6){
    conceito = 'C';
} else if (nota >=4){
    conceito = 'D';
} else {
    conceito = 'E';
}
console.log (conceito)
//
liquidificar("Banana", "Leite", "Achocolatado")

function liquidificar(item1, item2, item3) {
    if (item1=='Banana' && item2=='Leite' && item3=='Achocolatado') {
    return 'Vitamina de banana';
    } else {
    return 'Liquidifiquei tudo!';
    }
}
// 
verificarPermissoes = prompt ('Qual é a sua idade?')

function verificarPermissoes (idade) {
    if (idade<=15) {
return 'Você não pode dirigir nem votar';
} 
else if (idade>=16) {
return 'Você já pode votar';
}
else (idade>=18); {
return 'Você já pode votar e dirigir';
}
}
