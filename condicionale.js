//Condicional If
//if(exp){}
let age=18;
if(age >= 18){
    console.log('Es mayor de edad');
}

//if(exp){} else{}
if (age >= 18){
    console.log('Es mayor de edad');
} else{
    console.log('Es menor de edad');
}

// if ternario exp(exp)? true: false;
age >= 18? console.log('Es mayor'): console.log('Es menor');

//if(exp){} else if (exp) else {}
let ppt = Math.random();
if(ppt > 0.33){
    console.log('Cayó Piedra');
} else if (ppt < 0.66){
    console.log('Cayó papeñ');
} else {
    console.log('Cayó tijera');
}

// switch case
let day = Math.floor(Math.random() * 7);
switch(day){
    case 0:
        console.log('Es Domingo');
        break;
    case 1:
        console.log('Es Domingo');
        break;
    case 2:
        console.log('Es Domingo');
        break;
    case 3:
        console.log('Es Domingo');
        break;
    case 4:
        console.log('Es Domingo');
        break;
    case 5:
        console.log('Es Domingo');
        break;
}

//Truthy and Falsy
// '' == false
console.log('' === false);
// 'a' == true
console.log('a' === true);
// 0 == false
console.log(0 === false);
// 1 == true
console.log(1 === true);

let username = '';
let defaultName;

if(username){
    defaultName = username;
} else {
    defaultName = 'Extraño';
}
console.log(defaultName);

username = 'Peter';
defaultName