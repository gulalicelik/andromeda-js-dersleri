// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz', i)
//     } else if (i % 3 === 0) {
//         console.log('Fizz', i)
//     } else if (i % 5 === 0) {
//         console.log('Buzz', i)
//     }
// }

// const numbers = [10, 20, 45, 67, 34, 56, 78, 90, 32, 21];
//
// let sum = 0;
// //
// // for (let i = 0; i < numbers.length; i++) {
// //     sum += numbers[i];
// // }
//
// numbers.forEach((number) => {
//     sum += number;
// });

// console.log(sum);
// console.log(Number(sum / numbers.length));
// console.log(Math.floor(Number(sum / numbers.length)));


// --------------------------------------
// const str = "bugün hava çok güzel.";
// const arr = str.split(' ');
// let newStr="";
// arr.forEach((item) => {
//     newStr += item.charAt(0).toUpperCase() + item.slice(1) + ' ';
// });
// console.log(newStr);

// --------------------------------------

// let str = "JavaScript ile programlama çok eğlenceli.";
// let arr = str.split(' ');
// console.log(arr);
// const ali = arr.map((item) => {
//     return item.length;
// });
// console.log(ali);
//
// console.log(ali.sort((a, b) => a - b));
// console.log(ali[ali.length - 1] - ali[0]);

// // --------------------------------------
// const people = [
//     {name : "Ali", age : 30, city : "Istanbul"},
//     {name : "Ayşe", age : 25, city : "Ankara"},
//     {name : "Mehmet", age : 22, city : "Izmir"},
//     {name : "Fatma", age : 28, city : "Bursa"},
//     {name : "Ahmet", age : 35, city : "Antalya"}
// ];
//
// const person = {name : "Fatma", age : 28, city : "Bursa"};
// console.log(person);
// console.log(JSON.stringify(person));
// const newJsonString = "{\"name\":\"Fatma\",\"age\":28,\"city\":\"Bursa\"}";
// console.log(newJsonString);
// console.log(JSON.parse(newJsonString));
//
// // JSON
// const temp = {"name" : "Fatma", "age" : 28, "city" : "Bursa"}
// console.log(temp);

//
// const products = [
//     {name : "Samsung S8", price : 3000, color : "Black", rate : 3.5, category : "Phone", stock : 1},
//     {name : "Samsung S9", price : 4000, color : "White", rate : 2.8, category : "Phone", stock : 100},
//     {name : "Samsung S10", price : 5000, color : "Black", rate : 4.9, category : "Phone", stock : 50},
//     {name : "Samsung S20", price : 6000, color : "Red", rate : 4.0, category : "Phone", stock : 5},
//     {name : "Samsung S21", price : 7000, color : "Red", rate : 4.6, category : "Phone", stock : 0},
//     {name : "Samsung S22", price : 8000, color : "Black", rate : 4.5, category : "Phone", stock : 1000},
// ];

// task 1 : products dizisindeki ürünlerin ismini bir diziye atayınız ve bu diziyi ekrana yazdırın
// console.log(products.map(product =>  product.name));
//  const names = products.map(product => product.name);
//  console.log(names);
//
// // task 2 : dizi içindeki ürünlerin fiyatlarının toplamını ekrana yazdırınız.
// let total = 0;
// products.forEach(product => {
//     total += product.price; // total = total + product.price
// });
// console.log(total);
// task 3 :  dizi içerisinde stoğu 10 dan büyük olanları yeni bir diziye atayınız ve bu diziyi ekrana yazdırınız.

// const arr =  products.filter(product =>  product.stock > 10);
// console.log(arr);

// task 4 : fiyatı 5000 den büyük olan ürünlerin isimlerini bir diziye atayınız ve bu diziyi ekrana yazdırınız.
// const result = products.filter(product => product.price > 5000).map(product => product.name);
// console.log(result);


// task 5 : dizi içindeki her bir ürünün stoğunun 1 ile 1000 arasında rastgele bir sayı ile güncelleyiniz. ve dizinin son halini ekrana yazdırınız.
// products.forEach(product => {
//     product.stock = Math.ceil(Math.random() * 1000);
// });
// console.log(products);


// task 6 : dizi içindeki ürünlerin fiyatlarını %10 zam yapınız ve ekrana yazdırınız.
// products.forEach(product => {
//     product.price = product.price + (product.price * 0.10);
    // product.price+= product.price * 0.10;
// });

// task 7 : dizi içinde rengi siyah olan ürünlerin stoklarını 0 yapınız ve dizinin son halini ekrana yazdırınız.

// products.forEach(product => {
//     if (product.color === "Black") {
//         product.stock = 0;
//     }
// });

// const blackProducts = products.filter(product => product.color === "Black");
// blackProducts.forEach(product => product.stock = 0);

// task 8 : dizi içindeki ürünleri stoklarını azdan çoğa sıralayınız.

// products.sort((a, b) => a.stock - b.stock);

// task 9 : dizi içindeki ürünleri stoklarını  çoktan aza sıralayınız.

// products.sort((a, b) => b.stock - a.stock);


// vize final ortalam hesap

// let vize1 = 50;
// let vize2 = 60;
// let final1 = 70;
// let final2 = 70;
// let vize3 = 80;
// let final3 = 80;
//
// let ort1 = (vize1 * 0.3)  +final1 * 0.7;
// let ort2 = (vize2 * 0.7)  +final2 * 0.7;

// fonksiyon nasıl tanımlanır
// function anahatar kelimesi kullanılır
// function fonksiyonAdi() {
//     console.log("Merhaba Dünya");
// }
// çağrım
// fonksiyonAdi();

// task ekrana merhaba dünya yazdıran bir fonksiyon yazınız.

// function printHelloWorld() {
//     console.log("Merhaba Dünya");
// }
//
// printHelloWorld();
// printHelloWorld();
// printHelloWorld();

// kendisine parametre olarak gelen vize ve final notlarının ortalamasını ekrana yazdıran bir fonksiyon yazınız.

function calculateAverage(vize, final) {
    console.log((vize * 0.3) + (final * 0.7));
}
const myFunc =  function  (vize , final) {
    console.log((vize * 0.3) + (final * 0.7));
}

const myFunc2 =  (vize , final) => {
    console.log((vize * 0.3) + (final * 0.7));
}

const myFunc3 =  vize  => {
    console.log((vize * 0.3) + (final * 0.7));
}

//// kendisine parametre olarak gelen vize ve final notlarının ortalamasını geri döndüren bir fonksiyon yazınız.

const myFunc4 = (vize , final) => {
     return (vize * 0.3) + (final * 0.7);
}

const myFunc5 = (vize , final) => (vize * 0.3) + (final * 0.7);
const myFunc6 = (name) => name.toUpperCase();
const myFunc7 = name => name.toUpperCase();

// calculateAverage(50, 60);
// myFunc(50, 60);
let result = myFunc4(50, 60);
console.log(result);



















