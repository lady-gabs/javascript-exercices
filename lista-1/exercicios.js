let a=2;
let b=5;
let c=9;
// exercicio01(a,b,c);
function exercicio01(a, b, c) {
    console.log(a+b);
    console.log(a+b < c);
}

let x=-101;
// exercicio02(x);
function exercicio02(x) {
    console.log(x);
    if (x % 2 != 0) {
        console.log("Ímpar");
    } else {
        console.log("Par");
    }
    if (x < 0) {
        console.log("Negativo");
    } else {
        console.log("Positivo");
    }
}

a = 8;
b = 8;
// exercicio03(a, b);
function exercicio03(a, b) {
    let n = 3;
    if (a == b) {
        console.log(a+b+n);
    } else {
        console.log((a*b)+n);
    }
}

a = 4;
// exercicio04(a);
function exercicio04(a) {
    console.log(a);
    console.log('Antecessor: ' + (a-1));
    console.log('Sucessor: ' + (a + 1));
}

let salaryMin = 1293.2;
let salaryUser = 5498.52;
// exercicio05(salaryMin, salaryUser);
function exercicio05(salaryMin, salaryUser) {
    console.log(`Salário mínimo: ${salaryMin}`);
    console.log(`Salário do usuário: ${salaryUser}`);
    console.log(`O usuário recebe ${Math.floor(salaryUser/salaryMin)} salários mínimos.`);
}

let valor = 1250
// exercicio06(valor);
function exercicio06(valor) {
    valor += valor * 0.05;
    console.log(valor);
}

// exercicio07(true, true); // true
// exercicio07(true, false); // false
// exercicio07(false, true); // false
// exercicio07(false, false); // true
function exercicio07(bool1, bool2) {
    if ((bool1 && bool2) || (!bool1 && !bool2)) {
        console.log("Verdadeiro");
    } else {
        console.log("Falso");
    }
}

a = 32;
b = 1;
c = 98;
// exercicio08(a, b, c);
function exercicio08(a, b, c) {
    let valores = [a, b, c];
    console.log(`Valores: ${valores}`);
    let max = Math.max(a,b,c);
    let min = Math.min(a,b,c);
    let meio = a + b + c - max - min;
    valores = [max, meio, min];
    console.log(`Ordem decrescente: ${valores}`);
}

let peso = 110;
let altura = 1.70;
// exercicio09(peso, altura);
function exercicio09(peso, altura) {
    let imc = peso/(altura**2);
    console.log(`IMC: ${imc}`);
    if (imc < 18.5) {
        console.log("Abaixo do peso");
    } else if (imc < 25){
        console.log("Peso ideal (parabéns)");
    } else if (imc < 30) {
        console.log("Levemente acima do peso");
    } else if (imc < 35){
        console.log("Obesidade grau I");
    } else if (imc < 40){
        console.log("Obesidade grau II (severa)");
    } else {
        console.log("Obesidade grau III (mórbida)");
    }
}

let nota1 = 5.75;
let nota2 = 8;
let nota3 = 2.25;
// exercicio10(nota1, nota2, nota3);
function exercicio10(nota1, nota2, nota3) {
    console.log(`Notas: ${nota1}, ${nota2}, ${nota3}`);
    let media = (nota1 + nota2 + nota3)/3;
    media = media.toFixed(2);
    console.log(`Média do aluno: ${media}`)
}

let notas = [7,8.5,1.3,9];
let nomeAluno = "Gabriella";
// exercicio11(notas, nomeAluno);
function exercicio11(notas, aluno) {
    let media = 0;
    for (let i = 0; i < notas.length; i++) {
        media += notas[i];
    }

    media = media/4;
    console.log(`Aluno: ${aluno}`);
    if (media < 7) {
        console.log("Reprovado");
    } else {
        console.log("Aprovado");
    }
}

let precoProd = 2599.90;
let formaPgto = 1;
// exercicio12(precoProd, formaPgto);
function exercicio12(precoProduto, formaPgto) {
    switch (formaPgto) {
        case 1: // À Vista em Dinheiro ou Pix
            precoProduto -= precoProduto*0.15;
            console.log(`Preço final do produto: ${precoProduto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`);
            break;
        case 2: // À Vista no cartão de crédito
            precoProduto -= precoProduto*0.1;
            console.log(`Preço final do produto: ${precoProduto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`);
            break;
        case 3: // Parcelado no cartão em duas vezes
            console.log(`Preço final do produto: ${precoProduto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`);
            break;
        case 4: // Parcelado no cartão em três vezes ou mais
            precoProduto += precoProduto*0.1;
            console.log(`Preço final do produto: ${precoProduto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`);
            break;
        default:
            console.log("Forma de pagamento inválida");
            break;
    }
}

let idade = 18;
let nome = "Ana";
// exercicio13(nome, idade);
function exercicio13(nomePessoa, idadePessoa) {
    console.log(nomePessoa);
    idadePessoa < 18 ? console.log("Menor de idade") : console.log("Maior de idade");
}

let num1 = 5;
let num2 = 10;
// exercicio14(num1, num2);
function exercicio14(a, b) {
    console.log(`A = ${a}, B = ${b}`);
    let aux = a;
    a = b;
    b = aux;
    console.log(`A = ${a}, B = ${b}`);
}

let anoNasc = 2000;
let mesNasc = 2;
let diaNasc = 16;
// exercicio15(anoNasc, mesNasc, diaNasc);
function exercicio15(anoNascimento, mesNascimento, diaNascimento) {

    let dataNascimento = new Date(anoNascimento, mesNascimento-1, diaNascimento);
    let dataAtual = new Date()
    let tempPassed = dataAtual-dataNascimento;

    tempPassed /= 86400000;
    tempPassed = Math.floor(tempPassed);

    let ano = Math.floor(tempPassed/365.25);
    tempPassed %= 365.25;
    let meses = Math.floor(tempPassed/30);
    tempPassed %= 30;
    let dias = Math.floor(tempPassed);

    console.log(`${ano} anos, ${meses} meses e ${dias} dias.`);
}

let ang1 = 60;
let ang2 = 60;
let ang3 = 60;
// exercicio16(ang1, ang2, ang3);
function exercicio16(a, b, c) {
    if (a+b>=c && a+c>=b && b+c>=a) {
        if (a == b && a == c) {
            console.log("Equilátero");
        } else {
            if (a == b || b == c || a == c) {
                console.log("Isósceles");
            } else {
                console.log("Escaleno");
            }
        }
    } else {
        console.log("Não é um triângulo");
    }
}

let grausF = 89;
// exercicio17(grausF);
function exercicio17(fahrenheit) {
    console.log(`Fahrenheit: ${fahrenheit} ॰F`);
    celsius = 5 * (fahrenheit-32) / 9;
    console.log(`Celsius: ${celsius.toFixed(2)} ॰C`);
}

// exercicio18();
function exercicio18() {
    let heightFrancisco = 1.5;
    let heightSara = 1.1;
    let anos = 0;

    while (heightSara <= heightFrancisco) {
        heightSara += 0.03;
        heightFrancisco += 0.02;
        anos++;
        if (anos >100) {
            break;
        }
    }
    console.log(`Serão necessários ${anos} anos para Sara ser maior que Francisco.`);
}

// exercicio19();
function exercicio19() {
    for (let i = 0; i < 10; i++) {
        console.log(`1 x ${i+1} = ${(i+1)*1}`);
    }
    for (let i = 0; i < 10; i++) {
        console.log(`2 x ${i+1} = ${(i+1)*2}`);
    }
    for (let i = 0; i < 10; i++) {
        console.log(`3 x ${i+1} = ${(i+1)*3}`);
    }
    for (let i = 0; i < 10; i++) {
        console.log(`4 x ${i+1} = ${(i+1)*4}`);
    }
    for (let i = 0; i < 10; i++) {
        console.log(`5 x ${i+1} = ${(i+1)*5}`);
    }
    for (let i = 0; i < 10; i++) {
        console.log(`6 x ${i+1} = ${(i+1)*6}`);
    }
    for (let i = 0; i < 10; i++) {
        console.log(`7 x ${i+1} = ${(i+1)*7}`);
    }
    for (let i = 0; i < 10; i++) {
        console.log(`8 x ${i+1} = ${(i+1)*8}`);
    }
    for (let i = 0; i < 10; i++) {
        console.log(`9 x ${i+1} = ${(i+1)*9}`);
    }
    for (let i = 0; i < 10; i++) {
        console.log(`10 x ${i+1} = ${(i+1)*10}`);
    }
}

let num = 5;
// exercicio20(num);
function exercicio20(valor) {
    for (let i = 0; i < 10; i++) {
        console.log(`${valor} x ${i+1} = ${(i+1)*valor}`);
    }
}

// exercicio21();
function exercicio21() {
    console.log(parseInt(Math.random() * 100));
}

a = 5;
b = 2;
// exercicio22(a, b);
function exercicio22(a, b) {
    console.log(Math.floor(a/b));
    console.log(Math.floor(a%b));
}

let valorHoraAula = 25.9;
let horasAula = 4;
let numAulas = 12;
let descontoINSS = 0.1;
// exercicio23(valorHoraAula, horasAula, numAulas, descontoINSS)
function exercicio23(valorHoraAula, horasAula, numAulas, descontoINSS) {
    let salarioLiqFinal =(valorHoraAula*horasAula*numAulas)-descontoINSS;
    console.log(salarioLiqFinal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))
}

let tempo = 3;
let velMedia = 120;
// exercicio24(tempo, velMedia)
function exercicio24(tempo, velocidadeMedia) {
    console.log(`Litros gastos: ${(tempo * velocidadeMedia)/12}L`);
}

let arraySoma = [1,2,3,4,5];
// exercicio25(arraySoma);
function exercicio25(arraySoma) {
    let soma = 0;
    for (let i = 0; i < arraySoma.length; i++) {
        soma += arraySoma[i];
    }
    console.log(soma);
}

let maxMin = [889,6,10,1,1,45,3,95]
// exercicio26(maxMin);
function exercicio26(maxMin) {
    let max = Math.max.apply(Math,maxMin);
    let min = Math.min.apply(Math,maxMin);
    // let max = 0;
    // let min = 10**50;
    // for (let i = 0; i < maxMin.length; i++) {
    //     if (maxMin[i]>max) {
    //         max = maxMin[i];
    //     }
    //     if (maxMin[i] < min) {
    //         min = maxMin[i];
    //     }
    // }
    console.log(`Máximo: ${max} || Mínimo: ${min}`)
}

let arrayDobrado = [1,2,3,4,5]
// exercicio27(arrayDobrado);
function exercicio27(arrayDobrado) {
    for (let index = 0; index < arrayDobrado.length; index++) {
        arrayDobrado[index] = arrayDobrado[index]*2;
    }
    console.log(arrayDobrado);
}

let array1 = [1,3,4];
let array2 = [2,5,9];
// exercicio28(array1, array2);
function exercicio28(arraySoma1, arraySoma2) {
    let novoArray = [];
    for (let i = 0; i < arraySoma1.length; i++) {
        novoArray[i] = arraySoma1[i] + arraySoma2[i];
    }
    console.log(novoArray);
}

let array3 = [10,7,23,8,9,21,45,62,83];
// exercicio29(array3);
function exercicio29(array3) {
    console.log(array3);
    for (let i = 0; i < array3.length; i++) {
        if (array3[i] % 2 == 0){
            array3.splice(i,1);
        }
    }
    console.log(array3);
}

let order = "decrescente";
let array4 = [2,9,60,47,10,26];
// exercicio30(order, array4);
function exercicio30(order, arrayToOrder) {
    order = order.toLowerCase();

    switch (order) { 
        case 'decrescente':
            arrayToOrder.sort((a, z) => z - a);
            // for (let i = 0; i < arrayToOrder.length; i++) {
            //     for (let j = 0; j < arrayToOrder.length; j++) {
            //         if (arrayToOrder[i] > arrayToOrder[j]) {
            //             let temp = arrayToOrder[i];
            //             arrayToOrder[i] = arrayToOrder[j];
            //             arrayToOrder[j] = temp;
            //         }
            //     }
            // }
            break;
        case 'crescente':
            arrayToOrder.sort((a, z) => a - z); 
            // for (let i = 0; i < arrayToOrder.length; i++) {
            //     for (let j = 0; j < arrayToOrder.length; j++) {
            //         if (arrayToOrder[i] < arrayToOrder[j]) {
            //             let temp = arrayToOrder[i];
            //             arrayToOrder[i] = arrayToOrder[j];
            //             arrayToOrder[j] = temp;
            //         }
            //     }
            // }
            break;
        default:
            break;
    }
    
    console.log(arrayToOrder);
}

// exercicio31(4);
function exercicio31(num) {
    let i = 1;
    let sequencia = [i];
    console.log(sequencia);
    while (i < num) {
        i++;
        sequencia.push(i);
        console.log(sequencia);
    }
    while (i > 1) {
        sequencia.pop();
        console.log(sequencia);
        i--;
    }
}

// exercicio32(6);
function exercicio32(num) {
    let i = 1;
    let sequencia = [i];
    while (i < num) {
        i++;
        sequencia.push(i);
    }
    i = 0;
    console.log(sequencia);
    while (i < num-1) {
        sequencia.pop();
        sequencia.splice(0, 0, 'X');
        console.log(sequencia);
        i++;
    }
}