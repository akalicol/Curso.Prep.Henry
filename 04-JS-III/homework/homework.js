// No cambies los nombres de las funciones.

function devolverPrimerElemento(array)
{
  // Devuelve el primer elemento de un array
  // Tu código:
    return array[0];
}

function devolverUltimoElemento(array)
{
  // Devuelve el último elemento de un array
  // Tu código:
    return array[array.length - 1];
}

function obtenerLargoDelArray(array)
{
  // Devuelve el largo de un array
  // Tu código:
    return array.length;
}

function incrementarPorUno(array) 
{
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
    var arrayLength = array.length;
    for(i = 0;i < arrayLength; i++)
    {
        array[i] = array[i] + 1;
    }
    return array;
}

function agregarItemAlFinalDelArray(array, elemento)
{
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
    array.push(elemento);
    return array;
}


function agregarItemAlComienzoDelArray(array, elemento)
{
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
    array.unshift(elemento);
    return array;
}

function dePalabrasAFrase(palabras)
{
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
    
    return palabras.join(" ");
}


function arrayContiene(array, elemento) 
{
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var arrayLength = array.length;
  var indicador = 0;
  for(var i = 0; i < arrayLength; i++)
  {
    if(array[i] === elemento)
    {
        return true;
    }
    else
    {
        indicador =+1;
    }
  }
  return false;
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var numerosLength = numeros.length;
  var suma = 0;
  for(var i = 0; i < numerosLength; i++ )
  {
      suma = numeros[i] + suma;
  }
  return suma;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var resultadosTestLength = resultadosTest.length;
  var suma = 0;
  for(var i = 0; i < resultadosTestLength; i++)
  {
      suma = resultadosTest[i] + suma;
  }
  return suma / resultadosTestLength;
}

function numeroMasGrande(numeros)
{
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
    var numerosLength = numeros.length;
    mayor = 0;
    for(var i = 0; i < numerosLength; i++)
    {
        if(numeros[i] > mayor)
        {
            mayor = numeros[i];
        }
    }
    return mayor;
}

function multiplicarArgumentos()
{
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
    var numberOfArguments = arguments.length;
    var resultado = 1;
    if(numberOfArguments === 0)
    {
        return 0;
    }
    else if(numberOfArguments === 1)
    {
        return arguments[0];
    }
    else
    {
        for(var i = 0; i < arguments.length; i++)
        {
            resultado = arguments[i]*resultado;
        }
        return resultado;
    }     
}

function cuentoElementos(arreglo)
{
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
    var arregloLength = arreglo.length;
    var contador =0;
    for(var i = 0; i < arregloLength; i++)
    {
        if(arreglo[i] > 18)
        {
            contador +=1
        }        
    }
    return contador;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
  switch(numeroDeDia)
  {
      case 1:
          return "Es fin de semana";
          break;
      case 2:
          return "Es dia Laboral";
          break;
      case 3:
          return "Es dia Laboral";
          break;
      case 4:
          return "Es dia Laboral";
          break;
      case 5:
          return "Es dia Laboral";
          break;
      case 6:
          return "Es dia Laboral";
          break;
      case 7:
          return "Es fin de semana";
          break;
  } 
} 

function empiezaConNueve(n)
{
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
    var nString = n.toString()
    if (nString[0] === "9")
    {
        return true;
    }
    else
    {
        return false;
    }  
}

function todosIguales(arreglo)
{
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
var arregloLength = arreglo.length;
var equal = arreglo[0];
var check = 0;
for(var i = 0; i < arregloLength;i++)
{
    if(equal === arreglo[i])
    {
        check +=1;
    }
}
if(check === arregloLength)
{
    return true;
} 
else
{
    return false;
}  
} 

function mesesDelAño(array)
{
    
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
    var arrayLength = array.length;
    var monthsArray = [];
    var checkEnero = 0;
    var checkMarzo = 0;
    var checkNoviembre = 0;    
    for(var i =0; i < arrayLength; i++)
    {
        if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre")
        {
            monthsArray.push(array[i]);
        }
    }
    var monthsArrayLenght = monthsArray.length;
    for(var i= 0; i < monthsArrayLenght;i++)
    {
        if(monthsArray[i] === "Enero")
        {
            checkEnero +=1;
        }
        else if(monthsArray[i] === "Marzo")
        {
            checkMarzo +=1;
        }
        else if(monthsArray[i] === "Noviembre")
        {
            checkNoviembre +=1;
        }
    }
    if(checkEnero === 0 || checkMarzo === 0 || checkNoviembre === 0)
    {
        return "No se encontraron los meses pedidos";
    }
    else
    {
    return monthsArray;    
    }
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var arrayLength = array.length;
  var arraySolution = [];
  for(var i = 0; i < array.length; i++)
  {
      if(array[i] > 100)
      {
          arraySolution.push(array[i]);
      }
  }
  return arraySolution
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var solutionArray = [];
  var incremento = numero;
  for( var i=0; i < 10; i++)
  {
      incremento +=2
      solutionArray.push(incremento)
      if(incremento === i+1)
      {
          return "Se interrumpió la ejecución";
      }
  }
  return solutionArray;
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var solutionArray = [];
  var incremento = numero;
  for( var i=0; i < 10; i++)
  {
      if(i===5)
      {
          continue;
      }
      incremento +=2
      solutionArray.push(incremento)
      
  }
  return solutionArray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
