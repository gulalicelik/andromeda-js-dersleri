// TASK 1
//Ekranda 1 adet button olmalı buton içinde değiştir yazmalı
//Ekranda 1 adet merhaba yazısı olmalı
//Butona tıklandığında merhaba yazısı değişmelidir.

const handleTextChange = () => {
    const text = document.getElementById("text");
    // text.innerHTML = "Değiştir";
    text.innerText = "Güle Güle";
}

// TASK 2
// ekranda 2 adet input olmalı ve bir adet buton olmalı
// inputlar içinde sayılar girilmeli
// butona tıklandığında inputlardaki sayıların toplamı ekranda gösterilmeli
// örn. Sonuç: 10 gibi (console değil)

const calculate = () => {
    const number1 = document.getElementById("operand1").value;
    const number2 = document.getElementById("operand2").value;
    const result = document.getElementById("result");
    var sum = parseInt(number1) + parseInt(number2);
    result.innerText = `Sonuç: ${sum}`;
    // result.innerText = `Sonuç: ${parseInt(number1) + parseInt(number2)}`;
}

// TASK
// ekranda bir adet input olmalı ve bir adet buton olmalı
// inputa sayı yazılmalı
// butona tıklandığında inputtaki sayı çift ise alert mesajı ile "Sayı Çifttir" tek ise "Sayı Tektir" yazmalı

const isOdd = () => {
    const num = parseInt(document.getElementById("operand1").value);
    num % 2 === 0 ? alert("Sayı Çifttir") : alert("Sayı Tektir");

    if(num % 2 === 0){
        alert("Sayı Çifttir");
    }else {
        alert("Sayı Tektir");
    }

}

// TASK 3
const cities = ["Malatya","Antalya", "Bursa", "Adana", "Konya", "Mersin", "Diyarbakır", "Samsun"];

// yukarıda verilen cities dizisinin her bir elemanının
// büyük harflerle yazıldığı yeni bir dizi oluşturun

const upperCities = cities.map(city => city.toUpperCase());
console.log(upperCities);

// TASK 4
// yukarıda verilen cities dizisinin her bir elemanı
// içinde "a" harfi geçenlerin oluşturduğu yeni bir dizi oluşturun

const aCities = cities.filter(city => city.toLowerCase().includes("a"));

// TASK 5
// yukarıda verilen cities dizisinin her bir elemanını
// sayfa içerisinde arka plan rengi mavi olan bir div içerisine yazdırın.

const cityDiv = document.getElementById("cityDiv");

cities.forEach(city => {
    const div = document.createElement("div");
    div.style.backgroundColor = "blue";
    div.style.color = "white";
    div.style.margin = "5px";
    div.style.padding = "5px";
    div.innerText = city;
    cityDiv.appendChild(div);
});

// TASK 6
const products = [
    { name: "Samsung S8", price: 3000 ,category: "Phone", color: "black"},
    { name: "Apple IPhone 13", price: 5000 ,category: "Phone", color: "red"},
    { name: "Huawei Smart Watch", price: 1000 ,category: "Watch", color: "white"},
    { name: "Logitech Mouse", price: 200 ,category: "Computer", color: "black"},
    { name: "Samsung TV", price: 5000 ,category: "Electronic", color: "black"},
    { name: "Sony Headphones", price: 200 ,category: "Electronic", color: "black"},
    { name: "LG Air Conditioner", price: 3000 ,category: "Electronic", color: "white"},
    { name: "Apple Macbook Pro", price: 10000 ,category: "Computer", color: "white"},
    { name: "Apple IPad", price: 3000 ,category: "Tablet", color: "black"},
    { name: "Samsung Smart Fridge", price: 5000 ,category: "Electronic", color: "white"},
];

// yukarıdaki products dizisindeki elemanların fiyatı 5000 olanların adının ilk 3 harfini
// consolea yazdırın

products.filter(product => product.price === 5000).forEach(product => console.log(product.name.slice(0,3)));

// use foreach

products.forEach(product => {
    if(product.price === 5000){
        console.log(product.name.slice(0,3));
    }
});
