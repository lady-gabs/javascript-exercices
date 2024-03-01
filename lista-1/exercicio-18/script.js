function saveNames() {
    let nameTall = document.getElementById('nameTall').value;
    let nameSmall = document.getElementById('nameSmall').value;
    return [nameTall, nameSmall];
}
function insertNames() {
    let names = saveNames();
    console.log(names)
    if (names[0] === '' || names[1] === '') {
        alert('Insira um nome.');
    } else {
        let questionText = document.getElementById('question');
        document.getElementById('namesInput').style.display = 'none';
        let elems = document.getElementsByClassName('posNamesInput');
        for (let i = 0; i < elems.length; i+=1){
            elems[i].style.display = 'block';
        }
        let elems2 = document.getElementsByClassName('values');
        for (let i = 0; i < elems2.length; i+=1){
            elems2[i].style.display = 'block';
        }
        questionText.innerHTML = `Quanto anos serão necessários para o <b>${names[1]}</b> ser maior que o <b>${names[0]}</b>?`;
    }
}
function calculateHeight() {
    //mais alto
    let heightTall = Number(document.getElementById('heightTall').value);
    let rateTall = Number(document.getElementById('rateTall').value);

    // mais baixo
    let heightSmall = Number(document.getElementById('heightSmall').value);
    let rateSmall = Number(document.getElementById('rateSmall').value);
    let valid = true;

    if (heightTall > 300 || heightTall <= 0 || heightSmall > 300 || heightSmall <= 0 || isNaN(heightTall) || isNaN(heightSmall)) {
        valid = false;
        alert('Altura inválida!');
    }   
    if (rateTall > 100 || rateTall <= 0 || rateSmall> 100 || rateSmall <= 0 || isNaN(rateTall)|| isNaN(rateSmall)) {
        valid = false;
        alert('Taxa inválida!');
    }
    if (valid) {
        heightTall /= 100;
        rateTall /= 100;
        heightSmall /= 100;
        rateSmall /= 100;
        
        let years = 0;
        let yearsText = document.getElementById('heightResult');
        let names = saveNames();
        let reset = document.getElementById('reloadPage');
        while (heightSmall <= heightTall) {
            heightSmall += rateSmall;
            heightTall += rateTall;
            years++;
            if (years >100) {
                yearsText.innerHTML = `<p>${names[1]} nunca será maior que ${names[0]}</p>`;
                reset.innerHTML = '<button class="btn" onclick="window.location.reload(true)">Recarregar</button>'
                return;
            }
        }
        yearsText.innerHTML = `<p>Serão necessários ${years} anos para <b>${names[1]}</b> ser maior que <b>${names[0]}</b>.</p>`;
        reset.innerHTML = '<button class="btn" onclick="window.location.reload(true)">Recarregar</button>'
    }
}