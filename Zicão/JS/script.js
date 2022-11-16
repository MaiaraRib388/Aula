const cachorro = {
    'nome': ['Zicão', 'Mel', 'Brutus', 'Bob'],
    'raca': ['Viralata', 'Yorkshire', 'Chihuahua', 'Labrador'],
    'tamanho': ['medio', 'pequeno', 'menor ainda', 'grande'],
    'latido': function (i) {
        let msg = (`${this.nome[i]}: Au Au`);
        return console.log(msg);
    },
    'id': function (i) {
        console.log(`
        Nome: ${this.nome[i]}
        Raça: ${this.raca[i]}
        Porte: ${this.tamanho[i]}`)
    }
}

cachorro.id(Number(prompt('Você vai chamar qual cão?')))