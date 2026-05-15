const cores = ['vermelho', 'verde', 'azul'];


for(const cor of cores){
    console.log(cor);
}


const pessoa = {
    nome: "Herick",
    idade: 35,
    profissao: "aluno"
};

for( const chave in pessoa){
    console.log(`${chave}: ${pessoa[chave]}`)
}