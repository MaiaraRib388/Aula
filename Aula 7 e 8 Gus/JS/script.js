// const pessoa = {
//     nome:"João",
//     sobrenome: "Doido",
//     nomeCompleto: function() {
//       return this.nome + " " + this.sobrenome;
//     }
//   }

//   const alien = {
//     nome:"José",
//     sobrenome: "Doido",
//   }

//   let nomeCompleto = pessoa.nomeCompleto.bind(alien);

//   document.getElementById("teste").innerHTML = "O seu nome é: " + nomeCompleto();

class Mamifero {
    constructor(nome, nascimento, porte) {
        this.nome = nome;
        this.nascimento = nascimento;
        this.porte = porte;
    }
    comer() {
        console.log("Bichinho comendo!");
    }
    som() {
        console.log("Som do Bichinho!");
    }
}
//Gato
  class Gato extends Mamifero{
    constructor(nome, porte, raca){
      super(nome, porte);
      this.raca = raca;
    }
    comer(){
      console.log(this.nome +  " comendo")
    //   super.comer();
    }
    som(){
        console.log(this.nome  + " : MiAu");
    }
  }

//   const gatinho = new Gato(" Vento", "pequeno",);
//   gatinho.comer();

//Vaca
class Vaca extends Mamifero {
    constructor(nome, porte,) {
        super(nome, porte);
    }
    comer() {
        console.log(this.nome + " comendo")
        // super.comer();
    }
    som(){
        console.log(this.nome + " : MUuU")
    }
}
// const vaquinha = new Vaca("Poesia", "grande",);
// vaquinha.comer();

//Cachorro
class Cachorro extends Mamifero {
    constructor(nome, porte,) {
        super(nome, porte);
    }
    comer() {
        console.log(this.nome + " comendo")
        // super.comer();
    }
    som(){
        console.log(this.nome + " : Au Au")
    }
}

const gatinho = new Gato("Vento", "pequeno",);
const vaquinha = new Vaca("Poesia", "grande",);
const caozinho = new Cachorro("Suspiro", "médio",);
gatinho.comer();
gatinho.som();
vaquinha.comer();
vaquinha.som();
caozinho.comer();
caozinho.som();


//DESAFIO
// const gatinho = [...gatinho];
// const vaquinha = [...vaquinha];



// const g = Number (prompt("Quantos gatinhos?"));
// const gatinho = [g];
// for (let i=0; i < g.length; i++) {
//  gatinho[i] = prompt ("Qual é o nome?");
// }

// const v = Number (prompt("Quantas vaquinhas?"));
// const vaquinha = [v];
// for (let i=0; i < v.length; i++) {
//     vaquinha[i] = prompt ("Qual é o nome?");
// }

// const bichinhos = [...g, ...v];
// for (let i=0; i < bichinhos.length; i++) {
//     bichinhos[i].comer();
// }  
