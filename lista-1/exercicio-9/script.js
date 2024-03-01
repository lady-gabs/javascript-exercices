function calculoIMC() {
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);
    let valido = true;
    let removerClass = document.querySelector("tbody tr.classificacao");

    if (removerClass) {
        removerClass.classList.remove('classificacao');
    }
    if (peso > 800 || peso <= 1 || isNaN(peso)) {
        valido = false;
        alert('Peso inválido!');
    }   
    if (altura < 10 || altura > 300 || isNaN(altura)) {
        valido = false;
        alert('Altura inválida!');
    }
    if (valido) {
        let imcText = document.getElementById('imcResultado');
        let imc = peso/((altura/100)**2);
        let boldText;
    
        imc = imc.toFixed(1);
        imcText.innerHTML = `<p id="valueIMC">IMC: ${imc}</p>`;
    
        if (imc < 18.5) {
            boldText = document.querySelector('.abaixo');
            boldText.classList.add('classificacao');
        } else if (imc < 25){
            boldText = document.querySelector('.ideal');
            boldText.classList.add('classificacao');
        } else if (imc < 30) {
            boldText = document.querySelector('.acima');
            boldText.classList.add('classificacao');
        } else if (imc < 35){
            boldText = document.querySelector('.obesidade1');
            boldText.classList.add('classificacao');
        } else if (imc < 40){
            boldText = document.querySelector('.obesidade2');
            boldText.classList.add('classificacao');
        } else {
            boldText = document.querySelector('.obesidade3');
            boldText.classList.add('classificacao');
        }
    }
}