// Código del cuadrado
console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: "+ladoCuadrado+" cm");

function perimetroCuadrado(lado){
    return lado * 4;
} 
//console.log("El perimetro del cuadrado es: "+perimetroCuadrado+" cm");

function areaCuadrado(lado) {
    return lado * lado;
}
//console.log("El área del cuadrado es: "+areaCuadrada+" cm^2");
console.groupEnd();

// Código del triángulo
console.group("Triangulo");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;

/*console.log("Los lados del triángulo miden: "+ 
            ladoTriangulo1+
            " cm, "+
            ladoTriangulo2+
            " cm y "+
            baseTriangulo+
            " cm"
        );

console.log("La altura del triángulo es: "+alturaTriangulo+" cm");*/

function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) { 
    return ladoTriangulo1+ladoTriangulo2+baseTriangulo; 
}
//console.log("El perimetro del triángulo es: "+perimetroTriangulo+" cm");

function areaTriangulo(baseTriangulo, alturaTriangulo){ 
    return (baseTriangulo*alturaTriangulo)/2;
}
//console.log("El área del triangulo es: "+areaTriangulo+" cm^2");
console.groupEnd();

//Código círculo
console.group("Círculos");
//Radio
//const radioCirculo = 4;
//console.log("El radio del círculo es: "+radioCirculo+" cm");
//Diámetro
function diametroCirculo(radio) { 
    return radio*2; 
}
//console.log("El diametro del círculo es: "+diametroCirculo+" cm");
//PI
const PI = Math.PI;
//console.log("PI es: "+PI);
//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio); 
    return diametro* PI;
}
//console.log("El perímetro del círculo es: "+perimetorCirculo+" cm");
//Área
function areaCirculo(radio){ 
    return PI * Math.pow(radio, 2); 
}
//const areaCirculo2 = PI * (radioCirculo*radioCirculo);
//console.log("El área del círculo es: "+areaCirculo+" cm");
//console.log("El área del círculo es: "+areaCirculo2+" cm");

console.groupEnd();

//Aquí interactuamos con HTML
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = areaCuadrado(value);
    alert(perimetro);
}
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}