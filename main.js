// let num1 = 5; num2 = '5';

// Operador Mayor Que
// console.log(`El numero ${num1} es mayor que el numero ${num2}`, num1>num2); 
// Operador Mayor o igual que
// console.log(`El numero ${num1} es mayor o igual  que el numero ${num2}`, num1>=num2);
// Operador Menor que
// console.log(`El numero ${num1} es menor que el numero ${num2}`, num1<num2);
// Operador Menor o igual que
// console.log(`El numero ${num1} es menor o igual que el numero ${num2}`, num1<=num2);
// En caso de comparar Strings, se contaran el numero de caracteres


// Operador Igual que
// console.log(`El dato ${num1} es igual que el dato ${num2}: `,  num1==num2);
// Operador Identico que
// console.log(`El dato ${num1} de tipo ${typeof num1} es identico al dato ${num2} de tipo ${typeof num2}: `,  num1===num2);
// Operador Diferente que
// console.log(`El dato ${num1} es diferente que el dato ${num2}: `,  num1!=num2);
// Operador No Identico que
// console.log(`El dato ${num1} de tipo ${typeof num1} no es identico que el dato ${num2} de tipo ${typeof num2}: `,  num1==num2);


//Pedir 2 datos por pantalla y almacenarlo en dos variables 
//diferentes:
//Variable 1(8)  Variable 2 (20)
//Realizar todas las Operacion compracion vistas en la clase
//Mostra en la consola todos los posibles resultados
//y explicar con sus propias palabras porque se dio es resultado 'true , false'

let dato1 = parseInt(prompt(`Ingrese el numero 8.`)), dato2 = parseInt(prompt(`Ingrese el numero 20.`));
// let dato1=8,dato2=20;
console.log(`Operador Mayor que(>): ${dato1}>${dato2}:`,dato1>dato2, `Ya que el numero 8 es menor que el numero 20 no se cumple la afirmacion y devuelve un false`);
console.log(`Operador Mayor o igual que(>=): ${dato1}>=${dato2}:`,dato1>=dato2,`Ya que el numero 8 sigue siendo menor que 20 la afirmacion no se cumple y devuelve un false`);
console.log(`Operador Menor que(<): ${dato1}<${dato2}:`,dato1<dato2,`Ya que el numero 8 es menor que el numero 20, la afirmacion se cumple y devuelve un true.` );
console.log(`Operador Menor o igual que(<=): ${dato1}<=${dato2}:`,dato1<=dato2,`Ya que el numero 8 es menor que el numero 20, la afirmacion se cumple y devuelve un true.` );
console.log(`Operador Igual que(==): ${dato1}==${dato2}:`,dato1==dato2,`Ya que el valor es diferente en cada variable la afirmacion no se cumple y devuelve un false.` );
console.log(`Operador Identico que(===): ${dato1}===${dato2}:`,dato1===dato2,`El tipo de dato si es igual pero el valor no, lo cual hace que la afirmacion no se cumpla y devuelva un false`);
console.log(`Operador Diferente que(!=): ${dato1}!=${dato2}:`,dato1!=dato2,`Ya que 8 es diferente valor que 20 la afirmacion se cumple y devuelve un true.`);
console.log(`Operador No Identico que(!==): ${dato1}!==${dato2}:`,dato1!==dato2,`Aunque tienen el mismo tipo de dato, al tener un valor diferente ya no son identicos, lo cual hace q la afirmacion se cumpla, tambien se puede ver como el contrario al operador identico`);