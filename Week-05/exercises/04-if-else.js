console.log("--EXERCISE 1: IF ELSE");

/*a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 
0,5 mostrar una alerta con el mensaje “Greater than or equal to 0,5” y sino un alerta con el mensaje 
“Lower than 0,5”.*/

console.log("-Exercise 4.a:");

console.log(Math.random());

var x = Math.random();

if (x>=0.5) {
    alert("Greater than or equal to 0,5");
}else{
    alert("Lower than 0,5")
};

/* b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Bebe” si la edad es menor a 2 años;
“Niño” si la edad es entre 2 y 12 años;
“Adolescente” entre 13 y 19 años;
“Joven” entre 20 y 30 años;
“Adulto” entre 31 y 60 años;
“Adulto mayor” entre 61 y 75 años;
“Anciano” si es mayor a 75 años.*/

console.log("-Exercise 4.b:");

var z = Math.floor(Math.random()*100);

console.log(z);

if (z<2){
    alert("Bebe");
}else if (z>=2 && z<13){
    alert("Niño");
}else if (z>=13 && z<20){
    alert("Adolescente");
}else if(z>=20 && z<30){
    alert("Joven");
}else if(z>=30 && z<60){
    alert("Adulto");
}else if(z>=60 && z<75){
    alert("Adulto mayor");
}else if(z>=75){
    alert("Anciano");
}