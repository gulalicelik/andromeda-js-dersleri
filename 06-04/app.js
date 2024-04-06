const cities = ["Malatya", "İstanbul", "Ankara", "İzmir", "Bursa", "Antalya", "Adana", "Trabzon", "Samsun", "Konya"];

// 1. forEach
//  cities.forEach((city) => {
//     console.log(city);
// });
// console.log("*********************");
// for( let i = 0 ; i < cities.length ; i++){
//     console.log(cities[i]);
// }

// task : cities dizisindeki her bir elemenı büyük harfli olacak
// şekilde yeni bir dizi oluşturun

// let newArr = [];

// 1. forEach
// cities.forEach((city) => {
//     newArr.push(city.toUpperCase());
// });

// 2. map
// const cityToUppercase = cities.map((city) => {
//     return city.toUpperCase();
// });

// console.log(cityToUppercase);




// const myFunction = () =>{
//     console.log("ali");
// }
//
// const getCurrentDate = () => {
//     return new Date();
// }
//
// const myFunc2 = (name) => {
//     return `Merhaba ${name}`;
// }
//
// // myFunction();
// // console.log(getCurrentDate());
//
// const myStr  = myFunc2("Veli");
// console.log(myStr);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// task parametre olarak bir dizi alan
// ve bu dizi içindeki sayıların toplamını döndüren bir fonksiyon yazınız;


const sumOfArray = (arr) => {
    let sum  = 0;

    arr.forEach((number) => {
        sum += number;
    });
    return sum;
}

const result = sumOfArray(numbers);
console.log(result);

// task kendisine parametre olarak gelen stringin bütün harflerini
// büyük harf olarak döndüren bir fonksiyon yazınız.


const customUpperCase =  (str) => str.toUpperCase();
console.log(customUpperCase("askdaskdla"))
console.log(customUpperCase("askdasDASDASDaskdla"))
console.log(customUpperCase("ask21312daskdla"))


//task: kendisine parametre olarak gelen string içinde sayı olup olmadığını
// kontrol eden bir fonksiyon yazınız. sayı varsa true yoksa false döndürsün.

// "Malatya" false "Malatya44" true "İstanbul5" true

const hasNumber = (str) => {
    let hasNumber = false;
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            hasNumber = true;
            break;
        }
    }
    return hasNumber;
}

// using split
const hasNumberSplit = (str) => {
    let hasNumber = false;
    const arr = str.split("");
    arr.forEach((char) => {
        if (!isNaN(char)) {
            hasNumber = true;
        }
    });
    return hasNumber;
}

// using split and ascii
const hasNumberSplitAscii = (str) => {
    let hasNumber = false;
    const arr = str.split("");
    arr.forEach((char) => {
        if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) {
            hasNumber = true;
        }
    });
    return hasNumber;
}


console.log(hasNumber("Malatya"));
console.log(hasNumber("Malatya44"));
console.log(hasNumber("İstanbul5"));
console.log(hasNumber("İstanbul"));









