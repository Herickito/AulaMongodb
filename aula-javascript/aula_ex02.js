//funcao simples
function saudacao(nome){
    return "Olá, "+ nome +"!"
}

console.log(saudacao("Herick"));


//função anonima

const soma = function(a, b){
    return a+b;
}


console.log(soma(3,4));


//Arrow function
const multiplicacao = (x,y) => x * y;
console.log(multiplicacao(5,6));



const pessoa = {
    nomeUsuario: "Herickito",
    idade: 21,
    email: "@",
    usuario: "aluno",
    saudar: () => {
        return `Oi, meu nome é ${pessoa.nomeUsuario}, e eu sou um ${pessoa.usuario}`;
    }
}

console.log(pessoa.nomeUsuario, pessoa.idade);

console.log(pessoa.saudar);