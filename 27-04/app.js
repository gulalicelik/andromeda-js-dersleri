// JS EVENTS

// addEventListener('event adı', fonksiyon(adı))

// MOUSE EVENTS

// click event

// const handleTest = () => {
//     console.log('test');
// }

// clickDiv.addEventListener('click', ()=>{
//     console.log('click click');
// });

// TASK
// ekranda kırmızı div var
// bu kırmızı dive tıklandığında bu divin rengi mavi olmalı tekrar tıklandığında kırmızı olmalı

const clickDiv = document.querySelector('.ali');

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
clickDiv.addEventListener('mouseover', handleTest);
clickDiv.addEventListener('mouseout', ()=>{
    clickDiv.style.backgroundColor = 'red';
});

// TASK
// fare ekranda hareket ettiğinde  divi rotasyon yapacak

document.addEventListener('mousemove', (e)=>{
    clickDiv.style.transform = `rotate(${e.clientY + e.clientX}deg)`;
});

// TASK
// fare ekranda hareket ettiğinde  fare koordinatlarını ekrana yazdırın

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

document.addEventListener('keypress', (e)=>{
    console.log(e.key);
});

