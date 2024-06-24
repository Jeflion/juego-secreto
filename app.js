let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
         if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
       limpiarCaja();
        condicionesIniciales();
        document.querySelector('#reiniciar').setAttribute('disabled','true');
    }

condicionesIniciales();

/*

ejercicios opcionales de la seccion
let listaGenerica = [];
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

function mostrarLenguages() {
    console.log(lenguagesDeProgramacion);
}

function mostrarLenguagesInverso() {
    console.log(lenguagesDeProgramacion.slice().reverse());
}

function calcularPromedio(lista) {
    let suma = lista.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    return suma / lista.length;
}

function mostrarMayorYMenor(lista) {
    let max = Math.max(...lista);
    let min = Math.min(...lista);
    console.log(`Mayor: ${max}, Menor: ${min}`);
}

function sumarElementos(lista) {
    return lista.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}

function buscarElemento(lista, elemento) {
    return lista.indexOf(elemento);
}

function sumarListas(lista1, lista2) {
    let suma = [];
    for (let i = 0; i < lista1.length; i++) {
        suma.push(lista1[i] + lista2[i]);
    }
    return suma;
}

function cuadrados(lista) {
    return lista.map(numero => numero * numero);
}

// Ejemplos de uso
mostrarLenguages(); // Muestra todos los lenguajes
mostrarLenguagesInverso(); // Muestra los lenguajes en orden inverso
console.log(calcularPromedio([1, 2, 3, 4, 5])); // 3
mostrarMayorYMenor([1, 2, 3, 4, 5]); // Mayor: 5, Menor: 1
console.log(sumarElementos([1, 2, 3, 4, 5])); // 15
console.log(buscarElemento([1, 2, 3, 4, 5], 3)); // 2
console.log(buscarElemento([1, 2, 3, 4, 5], 6)); // -1
console.log(sumarListas([1, 2, 3], [4, 5, 6])); // [5, 7, 9]
console.log(cuadrados([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]

*/ 