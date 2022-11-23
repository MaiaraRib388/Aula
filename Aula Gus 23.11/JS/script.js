// const nome = ['Pato.Maluco', 'Ganso.Louco', 'Cachorro.Doido'];
// const primeira = [];
// const segunda = [];
// const NomeAbrev = nome.map(nomes => {
//     for (let i = 0; i < nomes.length; i++) {
//         let primeira = nome[i].chartAt(0);
//         let segunda = "x";
//         for (let j; j < nome[i].length; j++) {
//             if (nome[i].chartAt(j) == "") {
//                 segunda = nome[i].chartAt(j + 1)
//             }
//         }
//         return `${primeira[i]}.${segunda[i]}`
//     }
// })
// console.log(NomeAbrev[1]);

const users = [
    {
        nome: "Abraão Farias",
        idade: 22,
        animal: "gato"
    },
    {
        nome: "Michelina Souza",
        idade: 12,
        animal: "Hamster"
    },
    {
        nome: "Venâncio Almeida",
        idade: 45,
        animal: ""
    },
    {
        nome: "Maria Silva",
        idade: 15,
        animal: "Coelho"
    },
    {
        nome: "José Eustáquio",
        idade: 32,
        animal: "Gato"
    },
]

// const nomeAbrev = users.map(users => {
//     for (let i = 0; i < 5; i++) {
//         let primeira = users[i].nome.charAt(0);
//         for (let j = 0; j < (users[i].nome).length; j++) {
//             if ((users[i].nome).charAt(j) == ``) {
//                 let segunda = (users[i].nome).charAt((j + 1))
//                 return `${primeira}.${segunda}`
//             }
//         }

//     }
// })

// console.log(nomeAbrev);

const nomeAbrev = users.map(nome => {
    for (let i = 0; i < 5; i++) {
        let primeira = users[i].nome.charAt(0);
        for (let j = 0; j < (users[i].nome).length; j++) {
            if ((users[i].nome).charAt(j) == ` `) {
                let segunda = (users[i].nome).charAt((j + 1))
                return `${primeira}.${segunda}`
            }
        }

    }
})

// const menorDe18 = users.map(idade =>{
//     for (let i = 0; i < users.length; i  ) {
//       if(users[i].idade <= 18){
//         return users[i].nome
//       }
//     }
//   })
  

console.log(nomeAbrev);
// console.log(menorDe18);