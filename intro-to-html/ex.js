// function add(x, y){
//     if(new.target){
//         throw 'The add function can not be called as a constuctor';
//     }

//     return x + y;
// }

// let result = add(10, 30);
// console.log(result);


// APPLY, CALL AND BIND

// let cat = { type: 'Cat', sound: 'Meow' };
// let dog = { type: 'Dog', sound: 'Woof'};

// const say = function (message) {
//     console.log(message);
//     console.log(`${this.type} says ${this.sound}`);
// }

// say.apply(cat, ['what does the cat say?']);

// bind

// let car = {
//     speed: 5,
//     start: function(){
//         console.log('Start with ' + this.speed + ' km/h');
//     }
// };

// let aircraft = {
//     speed: 10,
//     fly: function() {
//         console.log('Flying');
//     }
// };

// let taxiing = car.start.bind(aircraft);

// taxiing();

// function greeting(){
//     let message = 'Hi';

//     function sayHi(){
//         console.log(message);
//     }
//     sayHi();

// }

// greeting();


// function greeting(){
//     let message = 'Hi';

//     function sayHi(){
//         console.log(message);
//     }

//     return sayHi;
// }

// let hi = greeting();
// // hi();

// function greeting1(message){
//     return function(name){
//         return message + ' ' + name;
//     }
// }

// let sayHi = greeting('Hi');
// let sayHello = greeting('Hello');

// console.log(sayHi('John'));
// console.log(sayHello('John'));

// JAVASCRIPT PROMISES

// function getUsers(callback){
//     let users = [];

//     setTimeout(() =>{
//         callback([
//             { username: 'john', email: 'john@test.com' },
//             { username: 'jane', email: 'jane@test.com' }, 
//           ]);
//     }, 1000);

//     return users;
// }

// function findUsers(username, callback){
//  getUsers((users) =>{
//     const user = users.find((user) =>user.username === username);
//     callback(user);
//  });
    
// }

// findUsers('john', console.log);

// USING PROMISES
// let success = true;

// function getUsers(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//                     if (success){
//                         resolve([
//                             { username: 'john', email: 'john@test.com' },
//                             { username: 'jane', email: 'jane@test.com' }, 
//                           ]);
//                     } else {
//                         reject('Failed to get user list');
//                     }
//                 }, 1000);
//     });
// }

// const promise = getUsers();

// promise.then((users) =>{
//     console.log(users);
// });