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

class User1 {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
    updateScore(newScore) {
        this.score += newScore;
    }
}

const u5 = new User1("Zbigniew");