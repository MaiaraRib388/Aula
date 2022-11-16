// class Carro {
//     constructor(rodas, cor, capacidadeTanque){
//         this.rodas = rodas;
//         this.cor = cor;
//         this.capacidadeTanque = capacidadeTanque;
//     }
// }

// const fusca = new Carro(4, prompt('Quantas rodas têm o seu carro?'), 30);
//     console.log(
//         'Numero de Rodas' = $(fusca.rodas),
//         'cor' = $(fusca.cor),
//         'capacidade do Tanque' = $(fusca.capacidadeTanque),
// )                

// const x = 10;
// try {
//     x=10;
// } 
// catch(erro){
//     console.log('error')
// }

// console.error('TypeError');

// function myFunction() {
//     const message = document.getElementById("p01");
//     message.innerHTML = "";
//     let x = document.getElementById("demo").value;
//     try {
//       if(x == "") throw "empty";
//       if(isNaN(x)) throw "not a number";
//       x = Number(x);
//       if(x < 5) throw "too low";
//       if(x > 10) throw "too high";
//     //   if(x == 33) throw "Jesus Age"
//     }
//     catch(err) {
//       message.innerHTML = "Input is " + err;
//     }
//   }

// function myFunction() {
//     const message = document.getElementById("p01");
//     message.innerHTML = "";
//     let x = document.getElementById("demo").value;
//     let y = document.getElementById('demo').value;
//     try {
//         if (x = 0) throw 'divisão de impossivel'
//     }
//     catch (err) {
//         message.innerHTML = "Input is " + err;
//     } finally {
//         message.innerHTML = 10 / (Number(x));
//     }
// }

function myFunction() {
    const message = document.getElementById("p01");
    message.innerHTML = '';
    let x = document.getElementById("demo").value;
    try {
        if (x == "") throw 'Valor inválido! Digite um número!!';
        if (x % 2 == 0) throw 'É Par!!';
        if (x % 2 == 1) throw 'É Ímpar!!'
        if (isNaN(x)) throw 'Não é um Número! Digite um Número!!';
    }
    catch (err) {
        message.innerHTML = err;
    }
}