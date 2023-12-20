const table = document.querySelector('.table');
const tds = document.querySelectorAll('td');
let r1 = document.getElementById('resultadoP1');
let r2 = document.getElementById('resultadoP2');
let winner = document.getElementById('ganhador');

let contVitoria1 = 0;
let contVitoria2 = 0;

let list = [];
let cont = 1;
let player;

for (let i = 0; i < tds.length; ++i) {

    list.push(tds[i]);
}

table.addEventListener('click', e => {
    let op = e.target;

    if (op.classList.contains('disable')) {
        cont++

        preencher(op, cont);
    };
    
});

function preencher(op, cont) {

    if (cont % 2 == 0) {
        op.classList = 'p1';
        player = '1';
    } else { 
        op.classList = 'p2'
        player = '2'
    };

    verificaJogo(op, player);
}

function verificaJogo(op, player) {

    if (player == 1) {

        if (list[0].attributes.class.value == 'p1'){
            if (list[1].attributes.class.value == 'p1' && list[2].attributes.class.value == 'p1') {
                ganhador(player);
            }
            if (list[4].attributes.class.value == 'p1' && list[8].attributes.class.value == 'p1') {
                ganhador(player);
            }
            if (list[3].attributes.class.value == 'p1' && list[6].attributes.class.value == 'p1') {
                ganhador(player);
            }
        }
        if (list[2].attributes.class.value == 'p1'){
            if (list[5].attributes.class.value == 'p1' && list[8].attributes.class.value == 'p1') {
                ganhador(player);
            }
            if (list[4].attributes.class.value == 'p1' && list[6].attributes.class.value == 'p1') {
                ganhador(player);
            }
        }
        if (list[4].attributes.class.value == 'p1'){
            if (list[1].attributes.class.value == 'p1' && list[7].attributes.class.value == 'p1') {
                ganhador(player);
            }
            if (list[3].attributes.class.value == 'p1' && list[5].attributes.class.value == 'p1') {
                ganhador(player);
            }
        }
        if (list[7].attributes.class.value == 'p1'){
            if (list[6].attributes.class.value == 'p1' && list[8].attributes.class.value == 'p1') {
                ganhador(player);
            }

        }
        
    }

    if (player == 2) {

        if (list[0].attributes.class.value == 'p2'){
            if (list[1].attributes.class.value == 'p2' && list[2].attributes.class.value == 'p2') {
                ganhador(player);
            }
            if (list[4].attributes.class.value == 'p2' && list[8].attributes.class.value == 'p2') {
                ganhador(player);
            }
            if (list[3].attributes.class.value == 'p2' && list[6].attributes.class.value == 'p2') {
                ganhador(player);
            }
        }
        if (list[2].attributes.class.value == 'p2'){
            if (list[5].attributes.class.value == 'p2' && list[8].attributes.class.value == 'p2') {
                ganhador(player);
            }
            if (list[4].attributes.class.value == 'p2' && list[6].attributes.class.value == 'p2') {
                ganhador(player);
            }
        }
        if (list[4].attributes.class.value == 'p2'){
            if (list[1].attributes.class.value == 'p2' && list[7].attributes.class.value == 'p2') {
                ganhador(player);
            }
            if (list[3].attributes.class.value == 'p2' && list[5].attributes.class.value == 'p2') {
                ganhador(player);
            }
        }
        if (list[7].attributes.class.value == 'p2'){
            if (list[6].attributes.class.value == 'p2' && list[8].attributes.class.value == 'p2') {
                ganhador(player);
            }

        }
        
    }

    if (list[0].attributes.class.value !== 'disable' &&
        list[1].attributes.class.value !== 'disable' && 
        list[2].attributes.class.value !== 'disable' && 
        list[3].attributes.class.value !== 'disable' && 
        list[4].attributes.class.value !== 'disable' && 
        list[5].attributes.class.value !== 'disable' && 
        list[6].attributes.class.value !== 'disable' && 
        list[7].attributes.class.value !== 'disable' && 
        list[8].attributes.class.value !== 'disable') { ganhador(3); }; 
}

function ganhador(player) {
    if (player == '1') {
        contVitoria1++;
        cont = 1;
        mostraResultado1(contVitoria1, player);
        reset();

    } else if (player == '2') {
        contVitoria2++;
        cont = 2;
        mostraResultado2(contVitoria2, player);
        reset();

    } else {
        alert("Empate");
        reset();

    }
}
            
function mostraResultado1(contVitoria1, player) {
    r1.innerHTML = contVitoria1;
    winner.innerHTML = 'Jogador ' +player+ ' ganhou';
    p1Ganhou();
}

function mostraResultado2(contVitoria2, player) {
    r2.innerHTML = contVitoria2;
    winner.innerHTML = 'Jogador ' +player+ ' ganhou';
    p2Ganhou();
}

function reset() {
    list.forEach(element => {
        element.attributes.class.value = 'disable';
    });
    
}

function p1Ganhou() {

    table.id = "victory1";
    
    setTimeout(function() {
        table.id = "";
        winner.innerHTML = "Bom jogo";
    }, 1500);
    
}

function p2Ganhou() {
    
    table.id = "victory2";
    
    setTimeout(function() {
        table.id = "";
        winner.innerHTML = "Bom jogo";

    }, 1500);

}

function zerar() {
    r1.innerHTML = '0';
    r2.innerHTML = '0';

    let cont = 1;

    contVitoria1 = 0;
    contVitoria2 = 0;

}

