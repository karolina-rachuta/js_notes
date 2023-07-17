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