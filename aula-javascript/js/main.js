/* //DECLARANDO VARIÁVEL E IMPRIMINDO A INFO
var nome = "Adriane Antunes Pedroso";
var idade = 25;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo"
//alert("Nome: " + nome + " tem " + idade + " anos.");
//alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
//alert(frase.replace("Japão", "Brasil")); //troca o texto
console.log(frase.toUpperCase()); //deixa o texto todo maiusculo
*/

/* //ARRAY
var lista = ["maçã", "pêra", "laranja"];

lista.push("uva"); //add elemento
//lista.pop(); //exclui ultimo elemento
console.log(lista); //imprime toda a lista
console.log(lista[0]); //imprime apenas o elemento que deseja
console.log(lista.toString()); //transforma os arrays em string
console.log(lista.length); //mostra a qtde de elementos na lista
console.log(lista.reverse()); //altera a ordem dos elementos
console.log(lista.join(" | ")); //altera separação dos elementos
*/

/* //DICIONÁRIO
var fruta = {nome: "maçã", cor: "vermelha"};
console.log(fruta);
console.log(fruta.nome);
*/

/* //ARRAY DE DICIONÁRIO
var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor:"roxo"}];
console.log(frutas);
console.log(frutas[1].nome);
*/

/* //CONDICIONAIS
var idade = prompt("Qual sua idade?");

if (idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
};
*/

/* //LACO DE REPETICAO WHILE
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++; //count = count + 1;
}
*/
 /* //LACO DE REPETICAO FOR
var count;
for (count = 0; count <= 5; count++){
    alert(count);
}
*/

/* //DATA
var d = new Date();
alert(d.getMinutes());
alert(d.getTime());
alert(d.getHours());
alert(d.getDay());
*/

var d = "d";
var e = "e";

console.log (d + e + 1 + "-" + 22);