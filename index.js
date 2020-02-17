const express = require ('express');

const server = express();

var produtos = [
    {id: 1, nome: 'Computador', preco: 1200.00},
    {id: 2, nome: 'Mouse', preco: 20.50},
    {id: 3, nome: 'Teclado', preco: 222.50}
];

server.get ('/produtos', function(request, response){
    return response.json(produtos);
})

server.get ('/produtos/:id', function(request, response){

    const id = request.params.id;

    const produto = produtos.filter(p => p.id == id);

    return response.json(produto);
})

server.listen(3000);