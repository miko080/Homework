// const user = {
//     name: 'Alex',
//     age: 21,
//     isAdmin: false
// }
// console.log(user.name);

// ===========================================================

// const users = {
// alex:{
//     age: 20,
//     isAdmin: false,
//     sayHello(name) {
// console.log(`Hello${name}`);

//     }
// }
// }
// console.log(users.alex);
// users.alex.sayHello(' Tom')

// =========================================================

// const users = [
//     {
//         name: 'alex',
//         age: 23,
//         isAdmin: false
//     },
//     {
//         name: 'anna',
//         age: 22,
//         isAdmin: true
//     }
// ]

// users.push(
//     {
//         name: 'max',
//         age: 22,
//         isAdmin: true
//     }
// )


// for(let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }

// const foo = 'hello world'
// console.log(foo.toUpperCase());

// ======================================================================

const student = {
    name: 'Miko',
    age: 16,
    module: 2
}
console.log(student);

// ======================================================================

const user = {
    sayhello(name) {
        console.log(`Hello${name}`);
    }
}
console.log(user);
user.sayhello(' Miko')

// =======================================================================

const users = [
    {
        name: 'alex',
        age: 23,
        isAdmin: false
    },
    {
        name: 'John',
        age: 26,
        isAdmin: true
    },
    {
        name: 'max',
        age: 33,
        isAdmin: false
    },
    {
        name: 'anna',
        age: 22,
        isAdmin: true
    }
]

let justUsers = 0

for(let i = 0; i < users.length; i++) {
    if(users[i].isAdmin !== 'admin') {
        justUsers++
    }
}
console.log(`Количество простых студентов ${justUsers}`);
