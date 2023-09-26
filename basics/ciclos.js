// Ciclos en JavaScript

// for
for(let i = 0; i < 3; i++){
    console.log('vuelta' + 1);
}

// while
let contador = 0;
while(contador < 3){
    console.log('vuelta' + contador);
    contador++;
}

// do wile
contador = 0;
do{
    console.log('vuelta' + contador);
    contador++;
} while(contador === 0);

// recorrido de un string
const name = 'Nexxuz';
for(let i = 0; i <name.legth; i++){
    console.log(name[i]);
}

// recorrido de un array
const numbers = [1,2,3,4,5,6];
for(let i = 0; i < numbers.length;i++){
    console.log(numbers[i]);
}

// for ... of
for(const item in numbers){
    console.log(item);
}

for(const letter of name){
    console.log(letter);
}