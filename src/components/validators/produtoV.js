const produtoV = {
    nome: {
        required: "Campo obrigatório!",
        minLength: {value: 5, message: "Digite um pouco mais."},
        maxLength: {value: 35, message: "Muitos caracteres"},
        min: {value: 5, message: "O valor mínimo é de 5 caracteres"},
    },

    telefone: {
        required: "Campo obrigatório!",
        minLength: {value: 10, message: "Digite um pouco mais."},
        maxLength: {value: 11, message: "Muitos caracteres"},
        min: {value: 10, message: "O valor mínimo é de 5 caracteres"},
    },
    
    descricao: {
        required: "Campo obrigatório!", 
        minLength: {value: 10, message: "Digite um pouco mais."},
        min: {value: 10, message: "O valor mínimo é de 10 caracteres"},
    },
    datain:{
        required: "Campo obrigatório!"
    },
    dataout:{
        required: "Campo obrigatório!"
    },
    tipo:{
        required: "Campo obrigatório!"
    },
    

    nomeins: {
        required: "Campo obrigatório!",
        maxLength: {value: 45, message: "Muitos caracteres"},
    },

    territorio: {
        required: "Campo obrigatório!",
    },
}

export default produtoV