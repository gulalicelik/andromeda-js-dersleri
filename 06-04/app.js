// const cities = ["Malatya", "İstanbul", "Ankara", "İzmir", "Bursa", "Antalya", "Adana", "Trabzon", "Samsun", "Konya"];

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


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// task parametre olarak bir dizi alan
// ve bu dizi içindeki sayıların toplamını döndüren bir fonksiyon yazınız;


// const sumOfArray = (arr) => {
//     let sum  = 0;
//
//     arr.forEach((number) => {
//         sum += number;
//     });
//     return sum;
// }

// const result = sumOfArray(numbers);
// console.log(result);
//
// task kendisine parametre olarak gelen stringin bütün harflerini
// büyük harf olarak döndüren bir fonksiyon yazınız.


// const customUpperCase =  (str) => str.toUpperCase();
// console.log(customUpperCase("askdaskdla"))
// console.log(customUpperCase("askdasDASDASDaskdla"))
// console.log(customUpperCase("ask21312daskdla"))


//task: kendisine parametre olarak gelen string içinde sayı olup olmadığını
// kontrol eden bir fonksiyon yazınız. sayı varsa true yoksa false döndürsün.

// "Malatya" false "Malatya44" true "İstanbul5" true

// const hasNumber = (str) => {
//     let hasNumber = false;
//     for (let i = 0; i < str.length; i++) {
//         if (!isNaN(str[i])) {
//             hasNumber = true;
//             break;
//         }
//     }
//     return hasNumber;
// }

// using split
// const hasNumberSplit = (str) => {
//     let hasNumber = false;
//     const arr = str.split("");
//     arr.forEach((char) => {
//         if (!isNaN(char)) {
//             hasNumber = true;
//         }
//     });
//     return hasNumber;
// }

// using split and ascii
// const hasNumberSplitAscii = (str) => {
//     let hasNumber = false;
//     const arr = str.split("");
//     arr.forEach((char) => {
//         if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) {
//             hasNumber = true;
//         }
//     });
//     return hasNumber;
// }


// console.log(hasNumber("Malatya"));
// console.log(hasNumber("Malatya44"));
// console.log(hasNumber("İstanbul5"));
// console.log(hasNumber("İstanbul"));

//DOM MANİPULATİON (document object model)

// console.log(document);

const paragraf = document.getElementById("text");

const result = document.getElementsByClassName("test")

const tag = document.getElementsByTagName("span");
// console.log(paragraf);
// console.log(result);
// console.log(tag);

const paragraf1 = document.querySelector("#text");
// const paragraf2 = document.querySelector(".test");
// const paragraf3 = document.querySelector("span");
//
// console.log(paragraf1);
// console.log(paragraf2);
// console.log(paragraf3);
//
const paragraf4 = document.querySelectorAll(".test");
//
// console.log(paragraf4);

// task: çağrıldığında ekrana adınızını yazan bir fonksiyon yazınız.

const printMyName = () => {
    console.log("Gülali Çelik");
}

// task : ekrana bir buton koyun, üzerinde adımı yaz yazsın
// basıldğında console tarafına adınızı yazdırsın


// inner ne demek ? iç demek


// const paragraph = document.querySelector("#text");
// console.log(paragraph);

// innerHTML
// innerText

// console.log(paragraph.innerText);
// console.log(paragraph.innerHTML);
// paragraph.innerText = "Merhaba ben yeni yazı";
// paragraph.innerText = "<span>Merhaba ben yeni yazı</span>";
// paragraph.innerHTML = "<span>Merhaba ben yeni yazı</span>";

// html ile ekrana bir span etikeyi koyun
// bu etiketin idsi foo olsun
// bu etiketin içinde merhaba yazsın
// html ile ekrana bir buton koyun
// bu butonun üzerinde tıkla yazsın
// bu butona tıklandığında merhaba yazısı güle güle olsun

const onTap = () => {
    const text = document.querySelector("#foo");
    console.log(text.classList);
    text.classList.add("active");
    text.classList.remove("active");
    console.log(text.className);

    text.className += "active"; // text.className = text.className + " active";

    // text.style.color= "red";
    // text.style.backgroundColor = "yellow";
    // text.style.fontSize = "24px";
    // text.style.fontWeight = "bold";
    // text.style.display = "none";
    // text.style.margin = "200px";
}








