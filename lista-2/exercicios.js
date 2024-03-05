let point = [{x: 2, y: 5}, {x: 9, y:-1}];
// exercise01(point)
function exercise01(point) {
    let distancia = Math.sqrt(((point[1].x-point[0].x)**2) + ((point[1].y-point[0].y)**2))
    console.log(distancia);
}

let a = 5; let b = 2; let c = 6;
// exercise02(a, b, c)
function exercise02(a, b, c) {
    let result = (((a + b)**2) + ((b + c)**2))/2
    console.log(result);
}

//exercicio 3 e 4 é igual ao exercicio 15 da lista 1, só tem que deletar algumas coisas para adaptar

// exercicio 5 igual ao exercicio 10 da lista 1

let seconds = 189046;
// exercise06(seconds);
function exercise06(seconds) {
    let hours = Math.floor(seconds / 3600)
    seconds %= 3600
    let minutes = Math.floor(seconds / 60)
    seconds = seconds % 60
    
    console.log(`${hours} horas, ${minutes} minutos e ${seconds} segundos`)
}

// exercise07();
function exercise07() {
    let factoryCost = 22500;
    let clientCost = factoryCost + (factoryCost * 0.28) + (factoryCost * 0.45)
    console.log(`Client cost: ${clientCost.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`);
}

// exercise08();
function exercise08() {
    let a = 2;
    let b = 3;
    let c = 4;
    let d = 5;
    let e = 6;
    let f = 7;
    let x = ((c*e) - (b*f)) / ((a*e) - (b*d))
    let y = ((a*f) - (c*d)) / ((a*e) - (b*d))
    console.log(x, y);
}

// exercicio 9 igual ao exercicio 11 da lista 1

// exercise10();
function exercise10() { // não entendi
    let a = 2;
    let b = 3;
    let c = 4;
    console.log(`a = ${a}, b = ${b}, c = ${c}`);
    console.log(`É o maior: ${Math.max(a, b, c)}`);
}

// exercise11();
function exercise11() {
    let a = 3;
    let b = 6;
    if (a % b == 0 || b % a == 0) {
        console.log("São multiplos.")
    } else {
        console.log("Não são multiplos.")
    }
}

// exercise12();
function exercise12() {
    let age = 10;
    if (age >= 5 || age <= 7) {
        console.log("infantil A")
    } else if (age >= 8 || age <= 10) {
        console.log("Infantil B")
    } else if (age >= 11 || age <= 13) {
        console.log("Juvenil A")
    } else if (age >= 14 || age <= 17) {
        console.log("Juvenil B")
    } else if (age <= 18) {
        console.log("Adulto")
    } else {
        console.log("Idade inválida")
    }
}

// exercicio 13 semelhante ao exercicio 24 da lista 1

// exercise14()
function exercise14() {
    let studentCode = '12345'
    let grade1 = 8.5;
    let grade2 = 2.5;
    let grade3 = 5;
    let maxGrade = Math.max(grade1, grade2, grade3);
    let average = (((grade1 + grade2 + grade3 - maxGrade)*3) + (maxGrade * 4))/10;
    console.log(`Código do aluno: ${studentCode}`);
    console.log(`Média: ${average}`);
    if (average < 5) {
        console.log("Reprovado");
    } else {
        console.log("Aprovado");
    }
}

// exercicio 15 igual ao exercicio 2 da lista 1

// exercise16();
function exercise16() {
    let menu = [{code: '100', price: 1.2, especification: 'Cachorro quente'}, 
    {code: '101', price: 1.3, especification: 'Bauru simples'}, 
    {code: '102', price: 1.5, especification: 'Bauru com ovo'}, 
    {code: '103', price: 1.2, especification: 'Hambúrguer'}, 
    {code: '104', price: 1.3, especification: 'Cheeseburguer'}, 
    {code: '105', price: 1.0, especification: 'Refrigerante'}]
    let amount = 4;
    let product = '103';
    let priceProduct = menu.find((food) => food.code === product);

    if (!priceProduct) {
        console.log('Código de produto inválido');
    } else {
        let priceFinal = priceProduct.price * amount;
        console.log(`Preço final: ${priceFinal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)
    }
}

// exercise17()
function exercise17() {
    let height = 1.8;
    let gender = 'M';
    if (height < 0 || height >= 3) {
        console.log("Altura inválida");
    } else {
        if (gender.toUpperCase() !== 'M' && gender.toUpperCase() !== 'F') {
            console.log(gender.toUpperCase() !== 'F')
            console.log("Entrada de gênero inválida");
        } else {
            if (gender.toUpperCase() === 'M') {
                console.log(`Peso ideal: ${(72.7*height)-58}`);
            }
            if (gender.toUpperCase() === 'F') {
                console.log(`Peso ideal: ${(62.1*height)-44.7}`);
            }
        }
    }
}

// exercise18();
function exercise18() {
    let averageSalary = 180;
    if (averageSalary >= 0 && averageSalary <= 200) {
        console.log(`Salário médio: ${averageSalary} | Crédito: nenhum`);
    } else if (averageSalary >= 201 && averageSalary <= 400) {
        console.log(`Salário médio: ${averageSalary} | Crédito: ${averageSalary*1.2}`);        
    } else if (averageSalary >= 401 && averageSalary <= 600) {
        console.log(`Salário médio: ${averageSalary} | Crédito: ${averageSalary*1.3}`);
    } else if (averageSalary >= 601) {
        console.log(`Salário médio: ${averageSalary} | Crédito: ${averageSalary*1.4}`);        
    } else {
        console.log('Valor inválido');
    }
}

// exercise19();
function exercise19() {
    let option = 3;
    let grade1 = 8.5;
    let grade2 = 2.5;
    let grade3 = 5;
    
    switch (option) {
        case 1: // aritmética
            console.log(`Média: ${(grade1 + grade2 + grade3)/3}`);
        break;
        case 2: // ponderada
            let maxGrade = Math.max(grade1, grade2, grade3);
            console.log(`Média: ${(((grade1 + grade2 + grade3 - maxGrade)*3) + (maxGrade * 4))/10}`);
            break;
        case 3: // harmônica
            console.log(`Média: ${3/((1/grade1) + (1/grade2) + (1/grade3))}`);
            break;
        default:
            console.log('Opção inválida');
            break;
    }
}

// exercise20();
function exercise20() {
    let productList = [{code: '1001', price: 5.32}, 
    {code: '1324', price: 6.45}, 
    {code: '6548', price: 2.37}, 
    {code: '0987', price: 5.32}, 
    {code: '7623', price: 6.45}]
    let amount = 4
    let price = 0;
    let product = '0988';

    for (let i = 0; i < productList.length; i++) {
        if (product === productList[i].code) {
            price = productList[i].price;
            break;
        }
    }
    if (price == 0) {
        console.log('Código de produto inválido');
    } else {
        price *= amount;
        console.log(`Preço final: ${price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`);
    }
}

// exercise21();
function exercise21() {
    let productList = [{code: 'ABCD', price: 5.3}, 
    {code: 'XYPK', price: 6}, 
    {code: 'KLMP', price: 3.2}, 
    {code: 'QRST', price: 2.50}]
    let amount = 4
    let price = 0;
    let product = 'XYPK';

    for (let i = 0; i < productList.length; i++) {
        if (product === productList[i].code) {
            price = productList[i].price;
            break;
        }
    }
    if (price == 0) {
        console.log('Código de produto inválido');
    } else {
        price *= amount;
        console.log(`Preço final: ${price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`);
    }
}

// exercise22();
function exercise22() {
    let employee = [{code: 101, percentage: 0.1, position: 'gerente'}, 
    {code: 102, percentage: 0.2, position: 'engenheiro'}, 
    {code: 103, percentage: 0.3, position: 'tecnico'}];
    let salaryOld = 1500;
    let salary = salaryOld;
    let position = 'GéRenTe';
    let difference;

    position = position.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();

    for (let i = 0; i < employee.length; i++) {
        if (position === employee[i].position) {
            salary *= 1 + (employee[i].percentage);
            console.log(`Salário antigo: ${salaryOld.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)
            console.log(`Novo salário: ${salary.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`);
            difference = salary - salaryOld
            console.log(`Diferença: ${difference.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`);
            break;
        }
    }
    if (salary == salaryOld) {
        salary *= 1.4;
        console.log(`Salário antigo: ${salaryOld.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)
        console.log(`Novo salário: ${salary.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`);
        difference = salary - salaryOld
        console.log(`Diferença: ${difference.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`);
    }
}

// exercise23();
function exercise23() {
    let side1 = 10;
    let side2 = 20;
    let side3 = 10*Math.sqrt(3);

    if (side1+side2 > side3 && side1+side3 > side2 && side2+side3 > side1) {
        let semiPerimeter = (side1 + side2 + side3)/2;
        console.log(`Área triângulo: ${Math.sqrt(semiPerimeter * (semiPerimeter - side1)*(semiPerimeter - side2)*(semiPerimeter - side3)).toFixed(2)}`)
    } else {
        console.log(side1, side2, side3)
    }
}

// exercise24()
function exercise24() {
    let start = 1;
    let end = 1;

    if ((start < 0 || start > 23 )||( end < 0 || end > 23)) {
        console.log('Valor para horas inválido.')
    } else {
        if (start > end || end === start) {
            end += 24;
        }
        console.log(`Duração do jogo: ${end - start} horas`);
    }
}

// exercise25()
function exercise25() {
    let option = 2;
    let a = 10;
    let b = -24;
    let c = 2.5;
    let array = [a, b, c]
    switch (option) {
        case 1:
            array.sort((a, z) => a - z);
            console.log(array)
            break;
            
        case 2:
            array.sort((a, z) => z - a);
            console.log(array)
            break;
    
        case 3:
            let max = Math.max.apply(Math, array);
            let min = Math.min.apply(Math, array);
            let middle = a + b + c - max - min;
            array = [min, max, middle];
            console.log(array);
            break;
    
        default:
            console.log('Valor inválido.');
            break;
    }
}

// exercise26();
function exercise26() {
    let money = 278;
    let quantity100;
    let quantity50;
    let quantity10;
    let quantity5;
    let quantity1;

    quantity100 = Math.floor(money / 100);  
    money = money - (quantity100 * 100);

    quantity50 = Math.floor(money / 50);  
    money = money - (quantity50 * 50);

    quantity10 = Math.floor(money / 10);  
    money = money - (quantity10 * 10);

    quantity5 = Math.floor(money / 5);  
    money = money - (quantity5 * 5);

    quantity1 = money;

    console.log(`Notas de 100: ${quantity100}`);
    console.log(`Notas de 50: ${quantity50}`);
    console.log(`Notas de 10: ${quantity10}`);
    console.log(`Notas de 5: ${quantity5}`);
    console.log(`Notas de 1: ${quantity1}`);
}

// exercise27()
function exercise27() {
    let percentageIPI = 50;
    let parts = [{code: 'peca1', price: 5.78, amount: 80}, {code: 'peca2', price: 15.6, amount: 50}];
    console.log(`Valor a ser pago: R$ ${((parts[0].price * parts[0].amount + parts[1].price * parts[1].amount)*(percentageIPI/100 + 1)).toFixed(2)}`);
}

// exercise28()
function exercise28() {
    let startHour = 22;
    let startMinutes = 50;
    let endHour = 4;
    let endMinutes = 55;
    let totalHours;
    let totalMinutes;
    
    if ((startHour < 0 || startHour > 23 )||( endHour < 0 || endHour > 23)) {
        console.log('Valor para horas inválido.')
    } if ((startMinutes < 0 || startMinutes > 59 )||( endMinutes < 0 || endMinutes > 59)) {
        console.log('Valor para minutos inválido.')
    } else {
        if (startHour > endHour || endHour === startHour) {
            endHour += 24;
        }
        totalHours = endHour - startHour
        if (startMinutes > endMinutes) {
            totalHours = totalHours-1
            endMinutes +=60
        }
        totalMinutes = endMinutes - startMinutes
        console.log(`Duração do jogo: ${totalHours} horas e ${totalMinutes} minutos`);
    }
}

// exercise29();
function exercise29() {
    let grade1 = 5;
    let grade2 = 3;
    let grade3 = 8.75;
    let exercices = 8;
    let studentCode = '835479'
    let concept;
    let averageUsage = ((grade1 + grade2 * 2 + grade3 * 3 + exercices)/7).toFixed(1)

    if (averageUsage >= 9) {
        concept = 'A';
    } else if (averageUsage >= 7.5) {
        concept = 'B'
    } else if (averageUsage >= 6) {
        concept = 'C'
    } else if (averageUsage >= 4) {
        concept = 'D'
    } else {
        concept = 'E'
    }

    console.log(`Código do aluno: ${studentCode} | Notas: ${grade1}, ${grade2}, ${grade3} | Média exercicios: ${exercices} | Média de aproveitamento: ${averageUsage} | Conceito: ${concept}`);
    if (concept === 'A' || concept === 'B' || concept === 'C') {
        console.log('Aprovado');
    } else {
        console.log('Reprovado');
    }
}

// exercise30()
function exercise30() {
    let pollutionIndex = 0.35;

    if (pollutionIndex < 0.05) {
        console.log('Índice de poluição inválido');
    } else {
        if (pollutionIndex >= 0.3 && pollutionIndex < 0.4) {
            console.log('Primeiro grupo de empresas devem paralizar as atividades')
        } else if (pollutionIndex >= 0.4 && pollutionIndex < 0.5) {
            console.log('Primeiro e Segundo grupos de empresas devem paralizar as atividades')
        } else if (pollutionIndex >= 0.5) {
            console.log('Todos os três grupos de empresas devem paralizar as atividades')
        } else {
            console.log('Nenhum grupo de empresas paralizará as atividades')
        }
    }
}

// exercise31()
function exercise31() {
    let expressionLength = 5;
    let e = 0;
    console.log('Expressão: E = 1 + 1 / 1! + ... + 1 / (n-1)!');
    for (let index = 0; index < expressionLength; index++) {
        e += 1/factorial(index);
    }
    console.log(`Expressão com ${expressionLength} termos: ${e.toFixed(4)}`)
}

function factorial(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorial(num - 1));
    }
}