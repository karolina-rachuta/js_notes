const user = {
    name: 'Jarosław',
    score: 0,
    updateScore(newScore) {
        user.score += newScore
    }
}

// const user1 = ...

// Problem, jak stworzyć wielu użytkowników, nie duplikując kodu (factory design pattern)
// DRY - don`t repeat yourself
function user1(name) {
    return {
        name,
        score: 0,
        updateScore(newScore) {
            this.score += newScore
        }
    }
}

const u1 = user1('Lech');
const u2 = user1('Mateusz');

// this wskazuje na obiekt przed kropką, tzn, że obiekt jest kontekstem metody (fn)
// u1.updateScore(42)

// Problem 2, funkcja updateScore, dla każdego użytkownika jest taka sama, nie ma sensu jej deklarować
// dla każdego użytkownika osobno

function User(name) {
    this.name = name;
    this.score = 0;
}

User.prototype.updateScore = function (newScore) {
    this.score += newScore;
}

const u3 = new User('Antoni');
const u4 = new User('Jacek');

String.prototype.capitalize = function () {
    return this[0].toUpperCase() + this.slice(1);
}


// dupa debugging - pisze w wielu miejscach console.log('dupa') i patrze gdzie się pojawi
Array.prototype.myMap = function (cb) {
    const temp = [];

    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }

    return temp;
}


// const arr = [1, 2, 3, 4]
// const result = arr.myMap((item, id, coll) => item * id);

Array.prototype.myFilter = function (cb) {
    const temp = [];

    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            temp.push(this[i]);
        }
    }

    return temp;
}

// const r = [1, 2, 3].myFilter((element, idx, arr) => element > 2) // [3]

// acc - accumulator, ce - current element, idx, arr -> agregacja tablicy,
// reduce => cb, ?initialValue
Array.prototype.myReduce = function (fn, initialValue = undefined) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];


    for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
        accumulator = fn(accumulator, this[i], i, this);
    }

    return accumulator;
}

// const arr = [1, 2, 3];
// const result = arr.myReduce((acc, ce, id, coll) => acc * ce, 42);

// syntactic sugar = lukier składniowy

class User1 {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }

    updateScore(newScore) {
        this.score += newScore;
    }
}

const u5 = new User1('Zbigniew');

// Array.prototype.myFilter = function (cb) {
//     const temp = [];
//     for (let i = 0; i < this.length; i++) {
//         if (cb(this[i], i, this)) {
//             temp.push(this[i]);
//             //     jesli dana funkcja bedzie to prawda to przekaze element do nowej tablicy
//         }
//     }
//     return temp;
// }
//
// const arr = [1, 2, 3];
// const result = arr.myFilter((element, idx, arr) => element > 2);
// // 3
//
//
// // stworz zmienna do akumulacji wartosci
// // przeiteruj po wszystkich wartosciach
// // wywolaj callback, pamietaj aby przekazac wszystkie 4 wartosci
// // wynik callback to nowa wartosc dla zmiennej do akumulacji
// // pamietaj, ze opcjonalny initialValue ti pierwszy acc, jezeli nie ma to acc to pierwszy element tablicy
// // zwroc wynik zmienna do akumulacji
// Array.prototype.myRedduce = function (fn, initialValue = undefined) {
//     let accumulator = initialValue !== undefined ? initialValue : this[0];
//     // jesli !== prawda to beierzemy wartosc initailvalue, jesli falsz to bierzemy pierszy element tablicy o indeksie 0
//     for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
//         // jesli nie mamy initialValue to i =1, jesli mamy jest rowne 0
//         accumulator = fn(accumulator, this[i], i, this);
//     }
//     return accumulator;
// }
//
// const arr1 = [1, 2, 3];
// const result1 = arr1.myReduce((acc, ce, id, coll) => acc * ce);


// syntactic sugar = lukier składniowy
// zamiast prototype używa się class
//
// class User1 {
//     constructor(name) {
//         this.name = name;
//         this.score = 0;
//     }
//     updateScore(newScore) {
//         this.score += newScore;
//     }
// }
//
// const u5 = new User1("Zbigniew");

// this mozna manipulowac

// function magic () {
//     console.log(this);
// }
// magic();

// const context = {
//     a:1, b:2
// }
// magic.call(context);
// magic.apply(context);
// const magic2 = magic;
// // w consoli this to kest windows, jesli damy "use strict" to wtedy jest undefined
//

const h1Ref = document.querySelector("#title");

class Magic {
    constructor() {
        this.counter = 0;
    }


    click() {
        // h1Ref.addEventListener("click", function (){
        //     this.counter++;
        //     console.log(this.counter);
        // }).bind(this))
        h1Ref.addEventListener("click", () => {
                this.counter++;
                console.log(this.counter);
            })
    }
}

const m = new Magic ();
m.click();