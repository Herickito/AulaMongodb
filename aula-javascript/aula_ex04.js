function exibirInfoProduto(produto){
    return `Produto: ${produto.nome},
    Preco:  ${produto.preco.toFixed(2)},
    Estoque:  ${produto.estoque} unidade(s)`
}

const produto1 = {
    nome: "KY",
    preco:500,
    estoque: 15

}

console.log(exibirInfoProduto(produto1));
