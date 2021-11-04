
function clicou(){
    // alert("Obrigado por clicar!");
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";
}

function redirecionar(){
    window.open("https://google.com.br/"); // Abre em uma nova guia
    window.location.href = "https://google.com.br/"; // Abre na mesma guia
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    elemento.innerHTML = "Obrigado por passar o mouse!";
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}

/*
---- FUNÇÕES ----
function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar =  true;
    } else {
        validar = false;
    }
    return validar; 
}

var idade = prompt("Qual sua idade?");
validaIdade(idade)
console.log(validaIdade.validar);

alert(soma(5, 10));
alert(setReplace("Frase original", "original", "modificada"));


---- DATAS ----
var data = new Date();
alert(data.getDay());
alert(data.getMonth() + 1);
alert(data.getFullYear());


---- ESTRUTURAS DE REPETIÇÃO ----
var count = 0;
while (count <= 5 ){
    console.log(count);
    count++;
};

for(count = 6; count <= 10; count++){
    console.log(count);
}


---- CONDICIONAIS ----
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("Maior de idade.");
} else {
    alert("Menor de idade.");
};


---- LISTA DE DICIONÁRIOS ----
var frutas = [{nome: "maçã", cor:"vermelha"}, {nome: "uva", cor:"roxa"}];
console.log(frutas);
console.log(frutas.nome);
console.log(frutas.cor);


---- DICIONÁRIOS ----
var fruta = {nome: "maçã", cor:"vermelha"}
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);


---- MANIPULAÇÕES DE ARRAYS ----
var lista = ["maçã", "pêra", "laranja"];
lista.push("uva");
//lista.pop();
console.log(lista);
console.log("Tamanho da lista: " + lista.length);
console.log("Lista reversa: " + lista.reverse());
console.log("Imprimir como string: " + lista.toString());
console.log("Lista com separador personalizado: " + lista.join(", "));


---- VARIÁVEIS E SAÍDAS DE CONSOLE ----
var nome = "Guilherme Gonçalves";
var n1 = 15;
var n2 = 10;
var frase = "Frase exemplo original";
alert(nome + " tem " + idade + " anos.");
alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.replace("original", "modificada"));
console.log(frase.toUpperCase());
*/
