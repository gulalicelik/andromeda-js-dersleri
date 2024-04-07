// task
// ekranda 400x400 boyutunda kırmızı renkli bir div oluşturun (html ile yapabilirsiniz)
// divin altında içinde değiştir yazan bir buton oluşturun (html ile yapabilirsiniz)
// butona tıklandığında divin boyutları 300x300 olmalı ve rengi mavi olmalı
// bu görevi gerçekleştirmek için butona tıklandığında bir fonksiyon çalıştırın

// task 1.2
// divin tam ortasına "Merhaba yazsın" bu yazının rengi siyah olsun
// butona tıklandığında bu yazı güle güle olsun ve yazı rengi beyaz olsun.

// const handleClick = () => {
    // const myContainer = document.querySelector('.container');
    // const myContainer = document.querySelector('#square');
    // const myContainer = document.getElementById('square');
    // const myBilmemNe = document.getElementById('bilmemne');
    // myContainer.style.width = '300px';
    // myContainer.style.height = '300px';
    // myContainer.style.backgroundColor = 'blue';
    // myBilmemNe.style.color = 'white';
    // myBilmemNe.innerText = 'Güle Güle';
// }

// task 2

// formda email ve password inputları olmalı
// formun altında bir buton olmalı ve butona tıklandığında
// formun içindeki verileri konsola yazdırmalı
// (araştırma cümlesi html vs js ile inputtaki veriyi okuma)

// task 2.1
// email ve parola alanından alınan verileri ekranda gösterin
//
// const submitButton = document.getElementById('loginSubmit');
//
// submitButton.addEventListener('click', (e) => {
//     e.preventDefault(); // form gönderildiğinde sayfayı yenilemesin diye
//     const email = document.getElementById('mailArea').value;
//     const password = document.getElementById('passArea').value;
//     const result = document.getElementById('result');
//     result.innerText = `Email: ${email} Password: ${password}`;
// });

// task 3
// ekranda sadece sayı alan bir input olsun
// altında "kontrol et" yazan bir buton olsun
// butona basıldığında inp tek iuta girilen sayıse ekranın arkaplan rengi kırmızı olmalı
// çift ise mavi olmalı

// const body = document.querySelector('body');
// const handleOddEvenCheck = () => {
//     console.log('handleOddEvenCheck');
    // let myNumber = document.getElementById('numberArea').value;
    // console.log(myNumber)
    // myNumber = parseInt(myNumber);
    // if(myNumber % 2 === 0) {
    //    body.style.backgroundColor = 'blue';
    // }else {
    //     body.style.backgroundColor = 'red';
    // }
// }




// TASK 4
// html  css ve js kullanarak bir hesap makinesi yapmanız beklenmektedir
// 4 işlem yapabilmelidir
// ekranda iki adet input olacak
// inputların arasında select  option olacak (+ - * /)
// altında bir buton olacak ve butona tıklandığında
// inputlardaki sayılar ve selectteki işlemi yapacak ve sonucu ekranda gösterecek

const calculate = () => {
   const num1 = parseFloat(document.getElementById('num1').value);
   const num2 = parseFloat(document.getElementById('num2').value);
   const operator = document.getElementById('operator').value;
   const sonucEkran = document.getElementById('sonuc');
   let result = 0;
   switch (operator) {
         case '+':
             result = num1 + num2;
              break;
         case '-':
             result = num1 - num2;
              break;
         case '*':
             result = num1 * num2;
              break;
         case '/':
             result = num1 / num2;
              break;
         default:
             result = 'Hatalı işlem veya işlem seçin';
              break;
   }
    sonucEkran.innerText = `Sonuç: ${result}`;
}
