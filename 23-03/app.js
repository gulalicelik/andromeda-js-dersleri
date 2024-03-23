// bool
// karşılaştırma operatörleri
// == eşit mi
// === eşit mi ve türü de eşit mi
// != eşit değil mi
// !== eşit değil mi ve türü de eşit değil mi

// if (true ||false) {
//     condition true ise çalışır
// }

// let isMarried = false;

// if (isMarried) {
// if (isMarried === true) {
//     console.log('Evlidir');
// }

// if (condition) {
//     condition true ise çalışır
// } else  {
//     condition false ise çalışır
// }


// if (isMarried === true) {
//     console.log('Evlidir');
// }else {
//     console.log('Bekardır');
// }

// let number1 = 21;
//
// if(number1 === 10) {
//     console.log('Sayı 10 dur');
// }else if (number1 < 10) {
//     console.log('Sayı 10 dan küçüktür');
// }else if (number1 > 10) {
//     console.log('Sayı 10 dan büyüktür');
// }else {
//     console.log('Geçersiz sayı');
// }

// Araştırma taskı: Js ile 0 ile 100 aralığında rastgele sayı nasıl üretilir ?
// Math.random()

// console.log(Math.floor(Math.random()*100));

// TASK 0 ile 100 arasında rastgele sayı üretin ve
// bu sayı çift ise ekrana çift sayı yazdırın
// tek ise tek sayı yazdırın

// let myRandomNumber = Math.floor(Math.random()*100);
//
// if(myRandomNumber % 2 === 0){
//     console.log(`${myRandomNumber} çift sayıdır`);
// }else {
//     console.log(`${myRandomNumber} tek sayıdır`);
// }

// let cityArray = ['İstanbul', 'Ankara', 'İzmir', 'Adana', 'Antalya', 'Antalya'];

// TASK  cityArray dizisinin uzunluğu
// 5ten büyük ise ekrana "Dizi 5ten büyük" yazdırın
// 5ten küçük ise ekrana "Dizi 5ten küçük" yazdırın
// 5e eşit ise ekrana "Dizi 5e eşittir" yazdırın

// if(cityArray.length > 5) {
//     console.log('Dizi 5ten büyük');
// }else if(cityArray.length < 5) {
//     console.log('Dizi 5ten küçük');
// }else {
//     console.log('Dizi 5e eşittir');
// }

// switch (değişken) {
//     case 'değer1':
//         console.log('değişken değeri değer1');
//         break;
//     case 'değer2':
//         console.log('değişken değeri değer2');
//         break;
//     default:
//         console.log('değişken değeri default');
// }

// let myCity = "İstanbul";
//
// switch (myCity) {
//     case 'İstanbul':
//         console.log('34');
//         break;
//     case 'Ankara':
//         console.log('06');
//         break;
//     case 'İzmir':
//         console.log('35');
//         break;
//     default:
//         console.log('Geçersiz şehir');
// }

// Araştırma taskı : JS ile içinde bulunduğumuz günü nasıl alırız ?

// console.log(new Date().getDay());

// getDay size kaçıncı gün olduuğunu verir sayı olarak

// 0 Pazar
// 1 Pazartesi
// 2 Salı
// 3 Çarşamba
// 4 Perşembe
// 5 Cuma
// 6 Cumartesi

// TASK switch case yapısını kullanarak içinde bulunduğumuz günü yazdırın

// switch (new Date().getDay()) {
//     case 0:
//         console.log('Pazar');
//         break;
//     case 1:
//         console.log('Pazartesi');
//         break;
//     case 2:
//         console.log('Salı');
//         break;
//     case 3:
//         console.log('Çarşamba');
//         break;
//     case 4:
//         console.log('Perşembe');
//         break;
//     case 5:
//         console.log('Cuma');
//         break;
//     case 6:
//         console.log('Cumartesi');
//         break;
//     default:
//         console.log('Geçersiz gün');
// }

// TASK 2 js ile bugünün  hafta sonu olup olmadığını kontrol edin
// eğer hafta sonu ise ekrana "Hafta sonu" yazdırın
// değil ise "Hafta içi" yazdırın (if else kullanarak yapın)
// let currentDay = new Date().getDay();
// console.log(currentDay);
//
// if (currentDay === 0 || currentDay === 6) {
//     console.log('Hafta sonu');
// }else if (currentDay >= 1 && currentDay <= 5) { // 1 <= currentDay <= 5
//     console.log('Hafta içi');
// }else {
//     console.log('Geçersiz gün');
// }
//
// switch (currentDay) {
//     case 0:
//     case 6:
//         console.log('Hafta sonu');
//         break;
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log('Hafta içi');
//         break;
//     default:
//         console.log('Geçersiz gün');
// }
// // kısa if else yapısı (ternary operator)
//
// let isMarried = false;
// if (isMarried===true) {
//     console.log('Evlidir');
// }
// else {
//     console.log('Bekardır');
// }
// // koşul ? true ise : false ise
//
// isMarried ? console.log('Evlidir') :  console.log('Bekardır') ;


// TASK :  adınzı ekrana 450000 defa yazdırın.

// console.log("Ali");
// console.log("Ali");
// console.log("Ali");

// for döngüsü

// for (değişken başlangıç değeri; koşul; artış miktarı) {
//     döngü içinde yapılacak işlemler
// }
// i = 5
// let i = 7;
// for (i; i < 5; i++) {
//     console.log("Ali");
// }
// bir döngü için elimde ne olması gerekir
// 1- başlangıç değeri
// 2- bitiş koşulu
// 3- artış miktarı (azalma da olabilir)

// task : adınızı ekrana 10 kez yazdırın
// for (let i = 0; i < 10; i++) {
//     console.log("Ali " + i);
//     console.log(`Ali ${i}`);
// }


// while döngüsü

// while (koşul) {
//     döngü içinde yapılacak işlemler
// }

// let  j = 4;
//
// while (j < 3) {
//     console.log("Ali " + j);
//     j++;
// }


// do while döngüsü

// do {
//     döngü içinde yapılacak işlemler
// } while (koşul);

// let k = 9;
//  do {
//      console.log("Ali " + k);
//      k++;
//  } while (k < 3);


 // TASK : 1 den 44 e kadar (44 dahil ) sayıları ekrana yazdırın

// for (let i = 1; i <= 44; i++) {
//     console.log(i);
// }


// TASK :  99 dan 33e kadar (33 dahil) sayıları ekrana yazdırın (geriye doğru)

// for (let i = 99; i >= 33; i--) {
//     console.log(i);
// }


const cityArray = ['İstanbul', 'Ankara', 'İzmir', 'Adana', 'Antalya', 'Antalya'];


// TASK : cityArray dizisindeki şehirleri ekrana yazdırın
// araştırma cümlesi  js ile döngü kullanarak bir diziyi nasıl yazdırırız


// for (let i = 0; i < cityArray.length; i++) {
//     console.log(cityArray[i]);
// }

// TASK : cityArray dizisindeki şehirleri  tersten ekrana yazdırın

for (let i = cityArray.length - 1; i >= 0; i--) {
    console.log(cityArray[i])
}


