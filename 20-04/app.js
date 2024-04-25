// const myButton = document.getElementById("btn")
// const items = document.getElementsByClassName("item")

// const myButton = document.querySelector("#btn");
// const items = document.querySelectorAll(".item");
// const myText = document.querySelector("#text");

// console.log(myButton);
// console.log(items);
// console.log(myText.innerText);
// console.log(myText.innerHTML);
// myText.innerText = "Hello World";
// myText.innerHTML = "<h1>Hello World</h1>";


// task ekrana adınızı yazan fonksiyon yazınız
// const myFunction = () => {
//     myText.innerText = "Hello World";
// }


// TASK
// ekranda 100px X 100px boyutunda bir kırmızı div oluşturunuz
// altına bir buton oluşturunuz ve içinde değiştir yazsın
// butona tıklandığında divin rengi mavi olsun boyutları 200px X 200px olsun


// function changeDiv() {
//     const myDiv = document.querySelector(".container");
//     myDiv.style.backgroundColor = "blue";
//     myDiv.style.width = "200px";
//     myDiv.style.height = "200px";
// }


// TASK
// bir login formu oluşturunuz
// ekranda 2 adet input olacak biri username için diğer şifre için olacak
// formun en altıunda bir ader gönder butornu olacak
// butona tıklandığında kullanıcının inputlar içerisine yazıdığı veerileri consolea yazırınız.

// const submit= () =>{
//     const username = document.querySelector("#username").value;
//     const password = document.querySelector("#password").value;
//     console.log(username, password);
// }


// TASK


// ekranda bir p etiketi oluşturunuz
// bir adet buton oluşturunuz ve içine yazıdır butonu yazınız
// butona tıklandığında p etiketinin içerisine cities dizisindeki şehirleri yazdırınız

const handleSubmit=() => {
    const text = document.querySelector("#text");
    // text.innerHTML = cities.join("<br>");
    // cities.forEach(city => {
    //     text.innerHTML += `<p>${city}</p>`;
    // });

    for(let i = 0 ; i < cities.length ; i++){
        text.innerHTML += `<span>${cities[i]}</span> <hr>`;
    }
}
// ekranda 5 adet div oluşturunuz divler 100x100 boyutunda  ve mavi olsun
// butona basıldığında  her bir divin içerisine  sırasına karşılık gelen şehri yazdırınız

// const cities = ["İstanbul", "Ankara", "İzmir", "Bursa", "Antalya", ];
const cities = ["İstanbul", "Ankara", "İzmir", "Bursa", "Antalya", "Adana", "Mersin", "Trabzon", "Samsun", "Konya"];

const handleChange = () => {
 const divs = document.querySelectorAll(".city-card");
    divs.forEach((div,i) => {
        div.innerHTML = cities[i];
    });

    cities.forEach((city, i) => {
        divs[i].innerHTML = city;
    });



    // for(let i = 0 ; i < divs.length ; i++){
    //     divs[i].innerHTML = cities[i];
    // }

    // divs[0].innerHTML = cities[0];
    // divs[1].innerHTML = cities[1];
    // divs[2].innerHTML = cities[2];
    // divs[3].innerHTML = cities[3];
    // divs[4].innerHTML = cities[4];
    // divs[5].innerHTML = cities[5];


 // divs[index].innerHTML= cities[index];

 console.log(divs);
}
