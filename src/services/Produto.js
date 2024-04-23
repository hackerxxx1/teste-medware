class ProdutoService {
    getAll(){
        const produto = localStorage.getItem('produto')
        return (produto) ? (JSON.parse(produto)) : ([])
    }

    get(id){
        const produto = this.getAll()
        return produto[id]
    }

    create(dados){
        const produto = this.getAll()
        produto.push(dados)
        localStorage.setItem('produto', JSON.stringify(produto))
    }

    update(id, dados){
        const produto = this.getAll()
        produto.splice(id, 1, dados)
        localStorage.setItem('produto', JSON.stringify(produto))
    }

    delete(id){
        const produto = this.getAll()
        produto.splice(id, 1)
        localStorage.setItem('produto', JSON.stringify(produto))
    }

}

export default new ProdutoService()