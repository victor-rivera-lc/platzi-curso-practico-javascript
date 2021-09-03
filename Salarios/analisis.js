//Helpers
function esPar(numerito) {
    return (numerito % 2 === 0);
}

function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2)
    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad-1];
        const personitaMitad2 = lista[mitad];
        const  mediana = calcularMediaAritmetica([personitaMitad1,personitaMitad2])
        return mediana;
    }else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//Calculadora de medianas
//Mediana general
const salariosMemex = memejico.map(
    function (personita){
        return personita.salary;
    }
);

const salariosMemexSorted = salariosMemex.sort(
    function (salaryA, salaryB){
        return salaryA-salaryB;
    }
);


const medianaGeneralMemex =medianaSalarios(salariosMemexSorted);

//Mediana del top 10%
const spliceStart = parseInt(salariosMemexSorted.length *90/100);
const spliceCount = parseInt(salariosMemexSorted.length - spliceStart);

const salariosMemexTop10 = salariosMemexSorted.splice(spliceStart, spliceCount);

const medianaTop10Memex = medianaSalarios(salariosMemexTop10);

console.log({
    medianaGeneralMemex,
    medianaTop10Memex
})