console.log("--EXERCISE 1: VARIABLES AND OPERATORS");

/* a. crear dos variables numéricas y  y utilizar el operador suma para guardar el valor de la suma de ambos números 
en una 3er variable. */

console.log("-Exercise 1.a:");

var sueldoMarzo, sueldoAbril;

sueldoMarzo = 35000;
sueldoAbril = 45000;
 
var sumaSueldo = sueldoMarzo + sueldoAbril;

console. log(sumaSueldo);

/* b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable. */

console.log("-Exercise 1.b:");

var firstName;
var lastName;

firstName = "Lucrecia";
lastName = "Vila";

console.log ("her full name is " + firstName + " " + lastName);
 
var fullName = firstName + lastName;

/* c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) 
guardando el resultado de la suma en una 3er variable (utilizar length).*/

console.log("-Exercise 1.c:");

var felino, canino;

felino = "gato";
canino = "perro";

var resultado = felino + canino;

console.log("gato is " + felino.length + " perro is " + canino.length + " y la suma es " + resultado.length);