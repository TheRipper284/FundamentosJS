// Funciones en Javascripts

/*
function nombre(params){
    body fuction
}
const nombre = function (params){
    body function
}
*/
// Funciones sin parametros y sin retorno
function saludo(){
    console.log('Hello Bro!');
}
saludo();

// Funciones con parametros sin retorno
const saludaA = function(name){
    console.log('Hola '+ name);
}
saludaA('Comicionado Osborn');

// Funciones con parametros y retorno
const fact = function (num) {
    if(num === 0) return 1;
    return fact(num - 1) * num;
}
const result = fact(5);
console.log(result);

// Arrow Functions o funciones de flecha
// Sin parametros y sin retorno
const saludaEnRuso = () => {
     console.log('Sdorówo');
    }
    saludaEnRuso();

// con 1 parametro sin retorno
const mayuscula = (word) =>{
    console.log(word.toUpperCase());
}
mayuscula('hola');

const minuscula = word =>{
    console.log(word.toLowerCase());
}
minuscula('HELLO');

// Dos y más parametros y con retorno
const fullName = (firstName, lastName) =>{
    return firstName + ' ' + lastName;
}
const nombreCompleto = fullName('Wade', 'Wylson');
console.log(nombreCompleto);

// Si el return es la unica linea se puede simplificar
const duplica = num =>num *2;
const doble = duplica(36);
console.log(doble);

/*
function duplica(num){
    return num * 2;
}*/

// Funciones con parametors opcionales
const welcomeToMéxico = (user = 'Invitado') => {
    console.log(`Bienvenido a México ${ user }`);
}

welcomeToMéxico();
welcomeToMéxico("Perro");

// parametros con nombre
const welcomeToUTT = (user = 'Invitado', city = 'México') =>{
                        console.log(`Bienvenido ${ user } de ${ city}`)
                    }

welcomeToUTT();
welcomeToUTT('Lalo' , 'Huamantla');
welcomeToUTT(city = 'San Andres', user ('CJ'));

    