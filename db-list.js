import {randomUUID} from 'crypto';

const DataBaseTemp = ()=>{
    let produtos = []
    let id = 0;

    const adicionar = (produto)=>{
        produto.id = id;
        produtos.push(produto)
        id++
        return produto
    }

    const listarTodos = ()=>produtos

    const obterProduto = id=>{
        const produto = produtos.find(produto=>produto.id==id)
        return produto 
    }

    return{
        adicionar,
        listarTodos,
        obterProduto,
        produtos,
    }
}

export default DataBaseTemp