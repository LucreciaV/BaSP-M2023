console.log("--EXERSISE 6: FUNCTION");

/*a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar
 el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

console.log("-Exercise 6.a:");

function suma(a, b){
    return a + b;
}

var resultado = suma(5,10);
console.log(resultado);

/* b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es un
 número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y retornar 
 el valor NaN como resultado.*/
 
console.log("-Exercise 6.b:");

function suma(a, b){
    if (typeof(a + b) == "number"){
    return a + b;
 }else{
    alert("ERROR");function suma(a, b){
    if (typeof(a + b) == "number"){
    return a + b;
 }else{
    alert("ERROR");

    return NaN;
 
 }}

    return NaN;
 
 }}

console.log(suma(25,5));
console.log(suma(25,"hi"));

/* c. Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número
 entero.*/

 console.log("-Exercise 6.c:");

 function validateInteger(d){
    if (Number.isInteger(d)){
    return true;
 }else{
    return false;
 }}

 /* d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c. 
 y que valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar el
  número convertido a entero (redondeado).*/

console.log("-Exercise 6.d:");

function copiab(a, b){
    if (!validateInteger(a)){
        alert("error");
        a = Math.round(a);
 }
    if (!validateInteger(b)){
    alert("error");
    b = Math.round(b);
}
    if (typeof(a + b) == "number"){
    return (a + b);
}
    else{
    alert("ERROR");

    return NaN;
 
 }}

console.log(copiab(2.4, 5.8));
console.log(copiab(5.5, 5));

/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función probando
 que todo siga funcionando igual que en el apartado anterior.*/

console.log("-Exercise 6.e:");

function valid(m){
    if (!validateInteger(m)){
        alert("error");
        m = Math.round(m);
        return m;
 }
 function newval(a,b)
 else{
    return m;
 }
}



