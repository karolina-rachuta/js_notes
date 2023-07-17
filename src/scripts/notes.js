// Tworzenie zmiennej
// var, let, const

//Redeklaracja (var)
// var x = 42;
// var x = 2137;
// console.log(x);

// let i const sie nie da
// let x = 42;
// let x = 2137;
// console.log(x);
// error


//Reinicjalizacja  (var, let) - do jedenj zmiennje przypisanie drugiej wartości

// var x = 42;
// x = 2137;
// console.log(x);
//
// let y = 42;
// y = 2137;
// console.log(x);

// const z = 42;
// z= 2137;
// console.log(z);
// NIE - CONST = STAŁA

// Hoisting - przenoszenie deklaracji zmiennych, funkcji i klas na górę, aktualnie
//przetwarzanego zasięgu. (var, let (TDZ), const (TDZ))
// TDZ - temporary dead zone (zanim let i const zostana zainicjalizowane
// trafiaja do strefy smierci, deklaracja sie odbywa)
// deklaracja jest hoistowana czyli let x; inicjalizacja to x = 42;

// console.log(x);
// var x = 42;
//undefined, wsiadłem do samochodu zanim go miałem

// tak jest interpretowany ten kod przez przegladarke:
// var y;
// console.log(x);
// var x = 42;

// console.log(x);
// let x = 42;
// error


//
// console.log(add(1,2));
// function add (a,b) {
//     return a + b;
// }

//Zasięg (Scope) - widoczność, dostępność identyfikatorów (nazwy zmiennycg, funkcji i klas),
// tzn. gdzie to można używać
//Dwa rodzaje zasięgów:
//funkcyjny - ograniczony przez ciało funkcji (var);
//blokowy - ograniczony przez parę klamerek (curly braces) (let, const);

// 1 przykład:
// const x = 10;
// if (x) {
//     var y = 42;
//     let y1 = 42;
//     const y2 = 42;
// }
//
// console.log(y);
// // wyswietli się
// console.log(y1);
// console.log(y2);
// //nie bo wyszli poza blok klamerek


//2 przykład:
// function magic () {
//     var y = 42;
//     let y1 = 42;
//     let y2 = 42;
// }
//
// magic ();
// console.log(y, y1, y2);
// y - ograniczone przez funkcję
// y1 i y2 - powoduje błąd - bo jest ograniczone klamerkami


// 2. Funkcje - służa do reużywalności kodu:
// named i anonymous - nie mają nazwy co nie przeczy zasadzie reużywalności, przez to że jest odwołanie zwrotne CB (Call Back)- coś co wywyła się kiedy będzie potzrebne

//named function
function addDigits (digit1, digit2) {
    return digit1 + digit 2;
}

addDigits(1,2);

//anonymous function
//classic
// function expression
function (difit1, digit2) {
   return digit1 + digit2;
}
//nie można wywołać te funcji, bo nie ma identyfikatora i nie jest call backiem

// function expression (wyrażenie funkcujne) - przypisanie deklaracji funkcji do zmiennje
addDigits2(1,2);

const addDigits2= function (difit1, digit2) {
    return digit1 + digit2;
}

addDigits2(1,2);

//arrow function - funkcja strzałkowa, fat arrow function (nie ma this, ani arguments)
(digit1, digit2) => {
  return digit1 + digit2;
}

// nie ma identyfikatora wiec nie da się tego wywowołac wiec robimy wyrażenie funkcjyjne
const addDigits3 = (digit1, digit2) => {
    return digit1 + digit2;
}
addDigits3(1,2);

// wariacje arrow function, parametry:
// - nie ma parametrów:
const add = () => { return 42;}
// - jeden parametr:
const add1 = a => { return a + 42;}
// nie pisać tak, zawsze pisać okrągłe nawiasy
// - więcej parametrów:
const add2 = (a, b) => { return a + b;}
// - implicit return - jak nie ma klamerek, to automatycznie zwraca wynik z wyrażenia:
const add3 = (a, b) => a + b;

// przykłady
// 1  przykład a mniejsze równe zero: (a) => (a <= 0), (a) => { return a <= 0}
const magic = a => a <= 0;

// 2 przykład
const magic2 = () => {
    return {a: 42}
}
// bez nawiasow bład:
const magic3 = () => ({a: 42})