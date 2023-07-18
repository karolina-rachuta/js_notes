// // Program do tworzenia samochodów
// // samochód ma brand, prędkość, silnik, ma prędkość
// //samochód może przyspieszać, zwalniać, odpalać silnik i gasić
// //jak to napisac w funkcji bez this
//
// const auto = {
//     brand: "BMW",
//     speed: 0,
//     engine: false,
//     maxSpeed: 140,
// }
//
// const auto1 = {
//     brand: "Mercedes",
//     speed: 0,
//     engine: false,
//     maxSpeed: 190,
// }
//
// function createAuto(brand, maxSpeed){
//     return {
//         brand,
//         speed: 0,
//         maxSpeed,
//         engine: false
//     }
// }
//
// const bmw = createAuto("bmw", 140);
// const mercedes = createAuto ("mercedes", 190);
//
// //dodanie funkcjonalnosci
//
// function  startEngine(car) {
//     if (!car.engine) {
//         car.engine = true;
//         console.log("silnik odpalony")
//     } else {
//         console.log("silnik już był odpalony")
//     }
// }
//
// function  stopEngine(car){
//     if (car.speed === 0) {
//         car.engine = false;
//         console.log("silnik zgaszony")
//     } else {
//         console.log("zatrzymaj się wpierw, zanim zgasisz silnik");
//     }
// }
//
// // poniewaz limity maxSpeed i minSpeed 0;
// function speedUp(car, amount) {
// if (car.engine) {
//     car.speed = Math.min(car.speed + amount, car.maxSpeed);
//     console.log(`Twoja prędkość to: ${car.speed}`)
// } else {
//     console.log("odpal silnik wpierw");
// }
//
// }
//
// function  slowDown(car, amount) {
//     car.speed = Math.max(car.speed - amount, 0);
//     console.log(`Twoja prędkość to: ${car.speed}`);
//
// }
//
// speedUp(auto, 200);
// startEngine(auto);
// speedUp(auto, 40);
// speedUp(auto, 40);
// speedUp(auto, 240);
// stopEngine(auto);
// slowDown(auto, 50);
// slowDown(auto, 250);
// stopEngine(auto);
//
//
//  // stara metoda:
//
// function Auto (brand, maxSpeed) {
//     this.brand = brand;
//     this.speed = 0;
//     this.maxSpeed = maxSpeed;
//     this.engine = false;
// }
//
// const bmw = new Auto("bmw", 140);
// const mercedes = new Auto("mercedes", 190);
//
// Auto.prototype.startEngine = function () {
//     if (!this.engine) {
//         this.engine = true;
//         console.log("silnik odpalony")
//     } else {
//         console.log("silnik już był odpalony")
//     }
// }
//
// Auto.prototype.stopEngine = function (){
//     if (this.speed === 0) {
//         this.engine = false;
//         console.log("silnik zgaszony")
//     } else {
//         console.log("zatrzymaj się wpierw, zanim zgasisz silnik");
//     }
// }
//
// // poniez limity maxSpeed i minSpeed 0;
// Auto.prototype.speedUp = function(amount) {
//     if (this.engine) {
//         this.speed = Math.min(this.speed + amount, this.maxSpeed);
//         console.log(`Twoja prędkość to: ${this.speed}`)
//     } else {
//         console.log("odpal silnik wpierw");
//     }
//
// }
//
// Auto.prototype.slowDown = function(amount) {
//     this.speed = Math.max(this.speed - amount, 0);
//     console.log(`Twoja prędkość to: ${this.speed}`);
//
// }
//
//
// bmw.speedUp(200);
// bmw.startEngine();
// bmw.speedUp(40);
// bmw.speedUp(40);
// bmw.speedUp(240);
// bmw.stopEngine();
// bmw.slowDown(50);
// bmw.slowDown(250);
// bmw.stopEngine();
//

class Auto {
    constructor(brand, maxSpeed) {
        this.brand = brand;
        this.speed = 0;
        this.maxSpeed = maxSpeed;
        this.engine = false;

    }
    startEngine() {
        if (!this.engine) {
            this.engine = true;
            console.log("silnik odpalony")
        } else {
            console.log("silnik już był odpalony")
        }
    }

    stopEngine () {
        if (this.speed === 0) {
            this.engine = false;
            console.log("silnik zgaszony")
        } else {
            console.log("zatrzymaj się wpierw, zanim zgasisz silnik");
        }
    }
    speedUp (amount) {
        if (this.engine) {
            this.speed = Math.min(this.speed + amount, this.maxSpeed);
            console.log(`Twoja prędkość to: ${this.speed}`)
        } else {
            console.log("odpal silnik wpierw");
        }
    }
    slowDown (amount) {
        this.speed = Math.max(this.speed - amount, 0);
        console.log(`Twoja prędkość to: ${this.speed}`);

    }
}

const bmw = new Auto("bmw", 140);
const mercedes = new Auto("mercedes", 190);

bmw.speedUp(200);
bmw.startEngine();
bmw.speedUp(40);
bmw.speedUp(40);
bmw.speedUp(240);
bmw.stopEngine();
bmw.slowDown(50);
bmw.slowDown(250);
bmw.stopEngine();