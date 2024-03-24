// // js string metodları
//
// 1- length
// 2- concat
// 3- toUpperCase
// 4- toLowerCase
// 5- indexOf
// 6- lastIndexOf
// 7- charAt
// 8- charCodeAt
// 9- substring
// 10- slice
// 11- replace
// 12- split
// 13- trim
// 14- match
// 15- search
// 16- includes
// 17- startsWith
// 18- endsWith

//
// let firstName = "Mehemet";
// // let var1 = ['m','e','h','m','e','t'];
// let lastName = "Çınar";
//
// // 1- length
// console.log(firstName.length);
// console.log(firstName[0]);
//
// // concat
// // console.log(firstName + " " + lastName);
// // console.log(`${firstName} ${lastName}`);
// console.log(firstName.concat(" ", lastName, " ", "Merhaba"));
//
// // toUpperCase
// console.log(firstName.toUpperCase());
//
// // toLowerCase
// console.log(firstName.toLowerCase());
//
// // indexOf
// console.log(firstName.indexOf("e"));
// // console.log(firstName.indexOf("hme"));
//
// // lastIndexOf
// console.log(firstName.lastIndexOf("e"));
//
// // charAt
// console.log(firstName.charAt(0));
// // console.log(firstName[0]);
//
// // charCodeAt
// console.log(firstName.charCodeAt(0));
//
// // substring
// console.log(firstName.substring(2,5)); // hme
//
// // slice
// console.log(firstName.slice(1,5));
//
// // replace
// console.log(firstName.replace("e","a"));
//
// // replaceAll
// console.log(firstName.replaceAll('e',"a"));
// console.log(firstName.replace(/e/g,"a"));
//
// // split
// console.log(firstName.split(""));
// console.log(firstName.split("e"));
//
// // trim
// let message = "             Merhaba dünya    ";
// console.log(message);
// console.log(message.trim());
//
// // includes
// console.log(firstName.includes("mxe"));
//
// // startsWith
// console.log(firstName.startsWith("M"));
//
// // endsWith
// console.log(firstName.endsWith("t"));
//
// // search
// console.log(firstName.search("e"));
//
// // match
// let s1 = "Merhaba benim adım Mehmet";
// let result = s1.match(/Mehmet/g);
// console.log(result);
//
// // toString
// let num = 5;
// console.log(num);
// console.log(typeof num);
// num = num.toString();
// console.log(num);
// console.log(typeof num);

// dizi metotları

// 1- length
// 3- pop
// 4- push
// 5- shift
// 6- unshift
// 7- reverse
// 8- sort
// 12- indexOf
// 13- lastIndexOf
// 18- some
// 19- every
// 20- find
// 21- findIndex
// 22- includes
// ***** 14- forEach
// ******* 15- map
// ******** 16- filter

//
// let cars = ["BMW", "Mercedes", "Toyota", "Fiat", "Renault", "Audi"];
//
// // length
// console.log(cars.length);
//
// // pop
// cars.pop(); // sondan bir elemanı siler
// console.log(cars);
//
// // push
// cars.push("Ford"); // diziye eleman ekler ama sona ekler
// console.log(cars);
//
// // shift
//
// cars.shift(); // dizinin başından bir eleman siler
// console.log(cars);
//
// // unshift
// cars.unshift("Opel"); // dizinin başına eleman ekler
// console.log(cars);
//
// // reverse
// cars.reverse(); // dizinin elemanlarını ters çevirir
// console.log(cars);
//
// // sort
// cars.sort(); // diziyi sıralar (alfabetik)
// console.log(cars);
//
// let numbers = [1, 100, 2, 20, 5, 3, 6, 80, 9, 63];
//
// // task 1: numbers dizisini sıralayın küçükten büyüğe
// // console.log(numbers.sort((a,b) => a-b));
//
// //indexOf
// console.log(cars.indexOf("Toyota")); // bulamaz ise -1 döner
//
// cars.push("Toyota");
// // lastIndexOf
// console.log(cars.lastIndexOf("Toyota"));

let cars = ["BMW", "Mercedes", "Toyota", "Fiat", "Renault", "Audi"];

// foreach
// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }

// cars.forEach( (car) => {
//     console.log(car);
// });
// cars.forEach( (car,index) => {
//     console.log(car, index);
// });

// const cities = ["Ankara", "İstanbul", "İzmir", "Adana", "Bursa"];
// task :  cities dizisindeki şehirlerin ilk harflerini console'da yazdırın (forEach ile)

// cities.forEach((city) => {
//     console.log(city[0]);
//     console.log(city.charAt(0));
// });

// let numbers = [1, 100, 2, 20, 5, 3, 6, 80, 9, 63,99];
let numbers2 = [88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
// some
// let result = numbers.some(number => {
//     return number > 80;
// });
// console.log(result);
//
// // every
// result = numbers2.every(number => {
//     return number > 80;
// });
// console.log(result);
//
// // find
//
// let result = numbers.find(number => {
//     return number > 80;
// });
// console.log(result);
//
// // findIndex
// let result = numbers.findIndex(number => {
//     return number > 80;
// });
// console.log(result);

// includes
// let result = numbers.includes(100);
// console.log(result);


//TASk : forEach ile cities dizinin her bir elemanının sonuna " şehri" ekleyin
// yeni bir dizi oluşturup bu diziye ekleyin
//
// let newCities = ["Ankara şehri", "İstanbul şehri", "İzmir şehri", "Adana şehri", "Bursa şehri"];
// algoritması
// başlangıç ----
// yeni bir dizi tanımla ismi newCities olsun
// cities dizisiniforEach ile dön
// her bir elemanın sonuna " şehri" ekle
// yeni oluşan elemanı newCities dizisine ekle
// döngü bitti
// newCities dizisini yazdır
// bitiş ----

// let newCities = [];
const cities = ["Ankara", "İstanbul", "İzmir", "Adana", "Bursa"];
// cities.forEach(city => {
//     newCities.push(city.concat(' şehri'));
// });
// console.log(newCities);

// map

// let newCities2 = cities.map(city => {
//     return city.concat(' şehri');
// });
// console.log(newCities2);
let numbers = [1, 100, 2, 20, 5, 3, 6, 80, 9, 63, 99];
// filter

// let result = numbers.filter(number => {
//     return number > 40;
// });
//
// console.log(result);

// task : cities dizisindeki şehirlerin içinde "a" harfi olanları yeni bir diziye olarak alın
// ve bu diziyi ekrana  yazdırın

let result = cities.filter(city => {
    return city.includes("a");
});
console.log(result);

// TASK
// bir adet objeler dizisi oluşturun (array of objects)
// bu objelerin içinde name, age city key'leri olsun
// dizi 5 elemanlı olsun

const people = [
    { name: "Ali", age: 30, city: "Istanbul" },
    { name: "Ayşe", age: 25, city: "Ankara" },
    { name: "Mehmet", age: 22, city: "Izmir" },
    { name: "Fatma", age: 28, city: "Bursa" },
    { name: "Ahmet", age: 35, city: "Antalya" }
];

// TASK
// people dizisindeki kişilerin yaşları 30'dan büyük olanları yeni bir diziye alın

let result2 = people.filter(person => {
    return person.age > 27;
});
console.log(result2);



