// Los objetos nos permiten almacenar datos
// a partir de una clave
/*
miObjeto = {clave: valor, 'clave': valor}
miObjeto.clave
miObjeto['clave']
*/

const subject = {
    name: 'Programación',
    toralHours: 90,
    weekHours: 7,
    classroom: 'Lab Progra',
    teacher: 'Jose Manuel',
    'practice hours': 60
}

console.log(subject.name);
console.log(subject.toralHours);
console.log(subject['weekHours']);
console.log(subject['practice hours']);

subject.classroom = 'Lab Programación 1';
console.log(subject.classroom);

console.log(subject);

subject['teorical hours'] = 30,
console.log(subject);

const group ={
    name: '4C',
    career: 'TIADSM',
    subjects:[
        subject
    ],
    students:[
        {name: 'Gustvao', lastname: 'Santiago'},
        {name: 'Laura', lastname: 'Juarzes'},
        {name: 'Cristian', lastname: 'Huerta'},
    ]
}

console.log(group);
console.log(group.students)