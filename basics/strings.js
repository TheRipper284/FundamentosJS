let name = "Gustavo";
let lastName = 'Santiago';
let age = 19;

console.log ("Soy " + name + ' mi primer apellido es ' + lastName );

console.log("I'm " + name + " " + lastName);
console.log("I\'m " + name + " " + lastName);

// Imprimir Soy Gustavo Santiago y tengo 19 años
// Strings Templates o Strings Literals
// Placesholder ${}
console.log(`Soy ${ name } ${lastName} y tengo ${ age } años`);

// metodos y atributos para strings
const texto = "Este es uN TexTo";
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
console.log(texto.charAt(5));
console.log(texto.endsWith('s'));
console.log(texto.includes('es'));
console.log(texto.length);
console.log('*'.repeat(10));