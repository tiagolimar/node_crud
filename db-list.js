import {randomUUID} from 'crypto';

const DataBaseTemp = ()=>{
    let produtos = []
    let id = 0;

    const adicionar = (produto)=>{
        produto.id = id;
        produtos.push(produto);
        id++;
        return produto
    }

    const listarTodos = ()=>produtos

    const obterProduto = id=>{
        const produto = produtos.find(produto=>produto.id==id);
        return produto 
    }

    const atualizar = (id,produto)=>{
        let index = produtos.findIndex(produto=>produto.id==id);

        if (index != -1){
            let produtoBD = produtos[index];
            produtoBD = {...produtoBD,...produto};
            produtos[index] = produtoBD;

            return produtoBD
        }
    }

    const apagar = id=>{
        const index = produtos.findIndex(produto=>produto.id==id)
        if(index != -1){
            const produto = produtos.splice(index,1)
            return produto
        }
    }
    return{
        adicionar,
        listarTodos,
        obterProduto,
        atualizar,
        apagar,
        produtos,
    }
}

export default DataBaseTemp