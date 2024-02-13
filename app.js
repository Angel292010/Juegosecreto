let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 100


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1)? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        } else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'El juego del número secreto');
    asignarTextoElemento('p', `Indica un número entre 1 y ${numeroMaximo}`);
    numeroSecreto = gerenarNumeroSecreto();
    intentos = 1;
}

function limpiarCaja(){
    document.getElementById('valorUsuario').value = '';
}

function gerenarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*100)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Ya fueron sorteados todos los numeros
    if(listaNumerosSorteados.legth == numeroMaximo){
        asignarTextoElemento('p', 'Ya fueron sorteados todos los números posibles');   
    } else{
        //si el numero generado esta en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return gerenarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Mostrar mensaje de intervalo de números
    //Generar número secreto
    //Inicializar intentos
    condicionesIniciales();
    //Deshabilitar boton nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();