// JS EVENTS

// addEventListener('event adı', fonksiyon(adı))

// MOUSE EVENTS

// click event

// const handleTest = () => {
//     console.log('test');
// }
const clickDiv = document.querySelector('.ali');


// clickDiv.addEventListener('click',  ()=> {
//     console.log('click click');
// });

// TASK
// ekranda kırmızı div var
// bu kırmızı dive tıklandığında bu divin rengi mavi olmalı tekrar tıklandığında kırmızı olmalı


// clickDiv.addEventListener('click', ()=>{
//     if(clickDiv.style.backgroundColor === 'red'){
//         clickDiv.style.backgroundColor = 'blue';
//     }else{
//         clickDiv.style.backgroundColor = 'red';
//     }
// });

// TASK
// fare ekrandaki kırmızı divin içinde ise divin rengi yeşil olmalı değilse kırmızı olmalı


const handleTest = () => {
    console.log('test');
}
// clickDiv.addEventListener('mouseover', handleTest);
// clickDiv.addEventListener('mouseover', ()=>{
//     clickDiv.style.backgroundColor = 'blue';
// });
// clickDiv.addEventListener('mouseout', ()=>{
//     clickDiv.style.backgroundColor = 'red';
// });

// TASK
// fare ekranda hareket ettiğinde  divi rotasyon yapacak

// document.addEventListener('mousemove', (e)=>{
//     clickDiv.style.transform = `rotate(${e.clientY + e.clientX}deg)`;
// });


// TASK
// fare ekranda hareket ettiğinde  fare koordinatlarını ekrana yazdırın

// document.addEventListener('mousemove', (e)=>{
//     locationText.innerText = `X: ${e.clientX} Y: ${e.clientY}`;
// });

// Keyboard Events

// keydown

// document.addEventListener('keydown', (e)=>{
//     console.log("");
// });

// keyup

// document.addEventListener('keyup', (e)=>{
//     console.log(e.key);
// });

// keypress

// document.addEventListener('keypress', (e)=>{
//     console.log(e.key);
//     if(e.key === 'a'){
//         clickDiv.style.backgroundColor = 'blue';
//     }else if(e.key === 's'){
//         clickDiv.style.backgroundColor = 'red';
//     }
// });


// wasd tuşlarına basıldığında  locationText hareket etsin
const locationText = document.querySelector('.location');
var x = 300;
var y = 300;
locationText.style.left = `${x}px`
locationText.style.top = `${y}px`
document.addEventListener('keypress', (e) => {
    if (e.key === 'w') {
        x -= 10;
        locationText.style.top = `${x}px`;
    } else if (e.key === 's') {
        x += 10;
        locationText.style.top = `${x}px`;
    } else if (e.key === 'a') {
        y -= 10;
        locationText.style.left = `${y}px`;
    } else if (e.key === 'd') {
        y += 10;
        locationText.style.left = `${y}px`;
    }
});

