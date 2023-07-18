const data = [
    {
        name: 'pawel',
        city: 'krakow',
        age: 38,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'jacek',
        city: 'jelenia_gora',
        age: 30,
        hobbies: ['trekking', 'cars', 'martial arts'],
    },
    {
        name: 'marcin',
        city: 'lublin',
        age: 43,
        hobbies: ['css', 'speedway', 'history']
    },
    {
        name: 'dawid',
        city: 'bielskobiala',
        age: 30,
        hobbies: ['football', 'snowboard', 'boxing']
    },
    {
        name: 'sebastian',
        city: 'golkowice',
        age: 20,
        hobbies: ['drugs', 'hookers', 'Js']
    },
    {
        name: "karolina",
        city: "dubaj",
        age: 32,
        hobbies: ["książki", "gotowanie", "filmy"]
    },
    {
        name: 'patryk',
        city: 'tarnow',
        age: 26,
        hobbies: ['anime', 'rts', 'lol']
    },
    {
        name: 'aleksander',
        city: 'warsaw',
        age: 23,
        hobbies: ['philosophy', 'art', 'music']
    },
    {
        name: 'Kamil',
        city: 'walcz',
        age: 34,
        hobbies: ['js', 'html', 'Mac']
    },
    {
        name: 'Alex',
        city: 'warszawa',
        age: 37,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'franek',
        city: 'warszawa',
        age: 18,
        hobbies: ['js', 'bastkeball', 'cars']
    },
    {
        name: 'marcin',
        city: 'warszawa',
        age: 37,
        hobbies: ['js', 'bike', 'jogging']
    }
]


// policz srednia wieku

// function calculateAveAge(elements){
//     let sum = 0;
//     // for (let i = 0; i < elements.length; i++){
//     //    sum += elements[i].age;
//     // }

//     for (const element of elements){
//         sum += element.age;
//     }
// return sum / elements.length;
// }

// function getAge(item) {
//     return item.age;
// }
//
// function calculateAveAge(elements) {
//     const ages = elements.map((item) => item.age);
//     const sum = ages.reduce((acc, ce) => acc + ce)
//     return sum / elements.length;
// }

// chain:
// function calculateAveAge(elements) {
//     return elements
//         .map((item) => item.age)
//         .reduce((acc, ce) => acc + ce) / elements.length;
// }

// const calculateAveAGe = (elements) => elements
//     .reduce((acc, ce) => acc + ce.age, 0) / elements.length;
//
// const result = calculateAveAge(data);
// console.log(result);


// policz srednia wieku ludzi spoza warszawy

// function calculateAveAge(items) {
//         let sum = 0;
//         let counter = 0;
//         for (let i = 0; i < items.length; i++){
//             if (items[i].city !== 'warszawa') {
//             sum += items[i].age
//             counter++;
//             }
//         }
//     return sum / counter
// }

// function calculateAveAge(items) {
//         let sum = 0;
//         let counter = 0;
//         for (const item of items) {
//             if (item.city !== 'warszawa') {
//             sum += item.age
//             counter++;
//             }
//         }
//     return sum / counter
// }

// function calculateAveAge(items) {
//     const result = items.filter((item) => item.city !== "warszawa");
//     return result.reduce((acc, ce) => acc + ce.age , 0) /result.length;
// }
// // pętla for jest wpisana w reduce
// const result = calculateAveAge(data);
// console.log(result);

//sprawdz czy wszyscy sa mlodsi niz 30 lat / true/ false

// function isAllYoungerThan30(items) {
//     for (const item of items) {
//         if (item.age > 30) {
//             return false;
//         }
//     }
//     return true;
// }

// const isAllYoungerThan30 = (data) => data.every((item) => item.age <30);
// // jesli wszystko sie spelni bedzie true, jesli ktorys sie nie spelni bedzie false
// const result = isAllYoungerThan30(data);
// console.log(result);


//czy ktokolwiek pochodzi z krakowa, tak -true

// function cityIsKrakow (items) {
//     for (const item of items){
//         if(item.city === "krakow"){
//             return true;
//         }
//     }
//     return false;
// }

// const cityIsKrakow = (data) => data.some((item) => item.city === "krakow");
//
// const result = cityIsKrakow(data);
// console.log(result);

//czy wszyscy sa z krakowa jesli !== "krakow - false

//zwroc tablice imion ktore kochaja js


// function jsLovers (items){
//     const nameJsLovers = [];
//     for(const item of items){
//         if (item.hobbies.includes("js")){
//             nameJsLovers.push(item.name);
//         }
//     }
//     return nameJsLovers;
// }
// const result = jsLovers(data);
// console.log(result);

// const getNameWhoLovesJS = (elements) => elements
//     .filter((element) => element.hobbies.includes("js"))
// .map((element) => element.name);
// // wyrzucam obiekty i tworze tablice z lista imion
// const result = getNameWhoLovesJS(data);
// console.log(result);

//ile jest unikalnych hobby
// function countUniqueHobbies(items) {
//     const arrHobby = [];
//     for (const item of items) {
//         for (const hobby of item.hobbies) {
//             if (!arrHobby.includes(hobby)){
//                 arrHobby.push(hobby);
//             }
//
//         }
//     }
//     return arrHobby.length;
// }

// const countUniqueHobbies = (data) => new Set(data.flatMap((item) => item.hobbies)).size
// const result = countUniqueHobbies(data);
// console.log(result);

