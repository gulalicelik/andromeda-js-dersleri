// const cities = ["Malatya", "izmir"];

// const cities=[];

// dizi 1 saniye sonra dolacak
// ekrana mavi bir kutu içinde şehirleri yazdırma

// cities.forEach((city)=>{
//     console.log(city);
// });

// settimeout
// setinterval

//setTimeout("fonksiyon",zaman);
// ZAMAN DOLDUĞUNDA FONKSİYON  1 KEZ ÇALIŞIR


// sayfa yenilendikten 3 saniye sonra konsola adınızı yazıdın.

// console.log("Merhaba");

// setTimeout(() => {
//     console.log("Mehmet");
// }, 2000);
//
// setInterval("fonksiyon",zaman);
// BELİRLENEN ZAMAN ARALIĞINDA TEKRARLI OLARAK ÇALIŞIR
// HER 2 SANİYEDE BİR KONSOLA ADINIZI YAZDIRIN
// setInterval(() => {
//     console.log("Ahmet");
// }, 2000);
// clearInterval
// var a = 0;
// const myInterval = setInterval(() => {
//     a++;
//     console.log("Veli",a);
//     if(a === 5){
//         clearInterval(myInterval);
//     }
// }, 1000);

// TASK
// Ekrana saati dijital olarak yazdırın. ss:dd:sa

// const myTimeArea = document.querySelector("#tutamiyorum-zamani");

// setInterval(() => {
//
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//
// myTimeArea.innerHTML = new Date().toLocaleTimeString();
// }, 1000);
//

// EXCEPTİON HANDLİNG
// kodda bir hata varsa ekrana mahmut yazırın.

// try {} catch (error) {}
// try{
//     hata olabileceğini düşündüğün kodlaru buraya yaz
// const a = 5;
// console.log(b);
// console.log(a);
//
// } catch (error) {
//     eğer hata varsa ben buradaki kodları çalıştırırım
// console.log(error)
// console.log("Mahmut");
// }

// finally
//
// try{
//     const a = 5;
//     // console.log(b);
//     console.log(a);
//
// } catch (error) {
//     // eğer hata varsa ben buradaki kodları çalıştırırım
//     console.log(error)
//     console.log("Mahmut");
// } finally {
//     console.log("Ben her zaman çalışırım");
// }


// ASENKRON PROGRAMLAMA

//  PROMİSES

// resolve
// reject

// const myPromise = new Promise((resolve, reject) => {
//        resolve("Başarılı");
// reject({
//     status: 404,
//     message: "Not Found"
// });
// });

// bir promise nasıl kullanılır?
//    myPromise.then((data) => {
//        console.log(data);
//    }).catch((error) => {
//        console.log(error,"Mahmut");
//    });


// const myTimePromise = new Promise((resolve, reject) => {
//     let date = new Date();
//     let seconds = date.getSeconds();
//     if(seconds % 2 === 0){
//         resolve("Çift");
//     }
//     reject("Tek");
//
// });

// myTimePromise.then((data) => {
//     console.log("then çalıştı",data);
// }).catch((error) => {
//     console.log("catch çalıştı",error);
// });

// promise state

// pending // bekliyor // promise çağrıldı ama henüz resolve veya reject olmadı
// fulfilled
// rejected

// console.log(myTimePromise);

// FETCH API
const myContainer = document.querySelector(".container");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            // const div = document.createElement("div");
            // div.style.backgroundColor = "blue";
            // div.style.color = "white";
            // div.style.margin = "5px";
            // div.style.padding = "5px";
            // div.innerText = user.name;
            // myContainer.appendChild(div);

            // innerHTML

            myContainer.innerHTML += `<div style="background-color: blue; color: white; margin: 5px; padding: 5px;">
${user.name}
</div>`;
        });
    })
    .catch(error => {
        console.log(error);
    }).finally(() => {
    console.log("Ben her zaman çalışırım");
});


//  HTTP REQUEST METHODS (Hyper text transfer protocol)

// GET  (READ)
// POST (CREATE)
// PUT (UPDATE)
// PATCH (UPDATE)
// DELETE (DELETE)









