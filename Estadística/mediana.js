const lista1 = [
    100,
    200,
    100,
    400000000,
];


function esPar(numerito){
    if(numerito % 2 === 0){
        return true;
    }else {
        return false;
    }
}


let mediana;
if (esPar(lista1.length)){
    const mitadLista1 = lista1.length/2;
    const elemento1 = lista1[mitadLista1];
    const elemento2 = lista1[mitadLista1-1];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    console.log(promedioElemento1y2);
}else{
    const mitadLista1 = parseInt(lista1.length/2)
    mediana = lista1[mitadLista1]
    console.log(mediana)
}

function calcularMediaAritmetica(lista){
    /*let sumaLista = 0;
    for (let i = 0; i < lista.length; i++){
        sumaLista += lista[i];
    }*/
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

