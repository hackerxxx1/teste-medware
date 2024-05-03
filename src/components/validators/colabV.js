const colabV = {
    nome: {
        required: "Campo obrigatório!",
        minLength: {value: 3, message: "Digita um nome ai mais de gente."},
        maxLength: {value: 100, message: "Calma ai bixo ta muito grande"},
        min: {value: 5, message: "O valor mínimo é de 3 caracteres"},
    },
}

export default colabV