console.log("--EXERCISE 2: STRINGS");

/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto
 en mayúscula (utilizar toUpperCase).*/
 console.log("-Exercise 2.a:");

 var characteres;

 characteres = "vaccinated";

 console.log("vaccinated".toUpperCase());

 /* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string 
 con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring)*/
console.log("-Exercise 2.b:");

 var x;

 x = "kaleidoscope";

 var y = x.substring(0,5); 

 console.log(x.substring(0,5));

 /* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con
  los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

  console.log("-Exercise 2.c:");

  var z;

  z = "babyproofing";

  var q = z.substring(z.length-3,z.length);

  console.log(q);

 /* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la
 primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
 (utilizar substring, toUpperCase, toLowerCase y el operador +).*/

 console.log("-Exercise 2.d:");

 var p;

 p = "abacterial";

 var o = p.substring(0,1);
 var n = p.substring(1,10);
 var m = o.toUpperCase() + n.toLowerCase();

 console.log(o.toUpperCase() + n.toLowerCase());
   
 /* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
  Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

 console.log("-Exercise 2.e:");

 var a = "the raiders";
 var b = a.indexOf(" ");
 
 console.log(a.indexOf(" "));

 /* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y 
 algún espacio entre medio).Utilizar los métodos de los ejercicios anteriores para generar un nuevo
 string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula
 (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

 console.log("-Exercise 2.f:");

 var e = "budapest parliament";
 var w = e.indexOf(" ");
 var i = e.substring(0,1);
 var l = e.substring(1,w);
 var u = e.substring(w+1,w+2);
 var v = e.substring(w+2,e.length);
 
  //console.log(w);

 console.log(i.toUpperCase() + l.toLowerCase() + " " + u.toUpperCase() + v.toLowerCase ());
 
 











