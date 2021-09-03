const lista1 = [
    1,
    2,
    3,
    2,
    5,
    2,
    4,
    1,
    2
]

const lista1Count = {};

lista1.map(
    function(elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento] += 1;
        }else {
            lista1Count[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function(elementoA, elementoB){
         if(elementoA > elementoB) return 1;
         if(elementoA == elementoB) return 0;
         if(elementoA < elementoB) return -1;
    }
);

const lista2Array = Object.entries(lista1Count).sort(
    function(elementoA, elementoB){
         return elementoA[1] - elementoB[1];
    }
);
const moda = parseInt(lista2Array[lista2Array.length-1][0]);
