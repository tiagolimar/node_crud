import fastify from "fastify";
import DataBaseTemp from "./db-list.js";

let db = DataBaseTemp()
const server = fastify()
const rotas = [
    "produtos",
    "usuarios",
    "posts",
    "fotos",
    "qualquerCoisa",
    "asdf",
    "tantofaz",
]

server.get('/',(request,response)=>{
    response.send("Página principal")
    console.log('Fez um GET')
})

server.get('/produto/:id',(request,response)=>{
    const {id} = request.params;
    response.status(200).send(db.obterProduto(id))
})

for (const rota of rotas){
    server.get(`/${rota}`,(request,response)=>{
        const objeto = {
            size : db.listarTodos().length,
            data: db.listarTodos()
        }
        return response.status(200).send(`Acessando a rota /${rota}\n${rota=="produtos"?JSON.stringify(objeto):null}`)
    })
}

server.post('/produto',(request,response)=>{
    let produto = {
        nome: "Tênis da hora",
        modelo: "Hyper Mega Top Show Nike Foot",
        preco: 652.69,
        tamanho: 35,
        quantidade: 321,
    }
    
    produto = db.adicionar(produto)
    response.status(201).send(db.produtos)
})

const port = 2353
const host = 'localhost'

server.listen({
    host,
    port,
},()=>console.log('Server funfando...'))