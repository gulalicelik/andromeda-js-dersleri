// create html elements using javascript

// create element (document.createElement) // parent // child
// const myBody = document.querySelector('body');
// const myContainer = document.querySelector('.container');
//
// const mySpan = document.createElement('span');
// mySpan.innerText = 'Hello World';
// mySpan.classList.add('active');
// mySpan.id = 'mySpan';
// mySpan.innerHTML = '<strong>Strong</strong>';
//
// mySpan.style.color = 'white';
// mySpan.style.backgroundColor= 'black';
//
// myContainer.appendChild(mySpan);


// task
// js ile html elementlari create ederek dizi içindeki her bir şehri
// 100x100 boyutunda birer kutu şeklinde ekrana yerleştirin.

// const city1 = document.createElement('div');
// city1.innerText = cities[0];
// city1.style.width = '100px';
// city1.style.height = '100px';
// city1.style.backgroundColor = 'red';
// city1.style.color = 'white';
// city1.style.textAlign = 'center';
// city1.style.lineHeight = '100px';
// city1.style.float = 'left';
// myContainer.appendChild(city1);
const cities = ['Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'San Francisco', 'Indianapolis', 'Columbus', 'Fort Worth', 'Charlotte', 'Seattle', 'Denver', 'El Paso', 'Detroit', 'Washington', 'Boston', 'Memphis', 'Nashville', 'Portland', 'Oklahoma City', 'Las Vegas', 'Baltimore', 'Louisville', 'Milwaukee', 'Albuquerque', 'Tucson', 'Fresno', 'Sacramento', 'Mesa', 'Kansas City', 'Atlanta', 'Long Beach', 'Colorado Springs', 'Raleigh', 'Miami', 'Virginia Beach', 'Omaha', 'Oakland', 'Minneapolis', 'Tulsa', 'Arlington', 'New Orleans'];

// cities.forEach(city => {
//     const cityDiv = document.createElement('div'); // div oluturduk
//     cityDiv.innerText = city;
//     // cityDiv.style.width = '100px';
//     // cityDiv.style.height = '100px';
//     // cityDiv.style.backgroundColor = 'red';
//     // cityDiv.style.color = 'white';
//     // cityDiv.style.textAlign = 'center';
//     // cityDiv.style.lineHeight = '100px';
//     // cityDiv.style.float = 'left';
//     // cityDiv.style.margin = '10px';
//     cityDiv.classList.add('city-item');
//     // cityDiv.className = 'city-item';
//     myContainer.appendChild(cityDiv);
// });

// const myContainer = document.createElement('div');
// myContainer.classList.add('container');

// const myParagraph = document.createElement('p');
// myParagraph.classList.add('description');

// const mySpan = document.createElement('span');
// mySpan.classList.add('highlighted');

// mySpan.innerText = 'Tıklayın';
// myParagraph.innerHTML = `Merhabla gizlilik koşullarımızı kabul ederek  kullanabilirsiniz.`;
// myParagraph.appendChild(mySpan);
// myContainer.appendChild(myParagraph);

// myContainer.innerHTML = `
// <!--    <p class="description">-->
// <!--        Merhabla gizlilik koşullarımızı kabul ederek ${cities[0]} <span class="highlighted">sitemizi</span> kullanabilirsiniz.-->
    // </p>`;

// document.body.appendChild(myContainer);


// localstorage (key-value) // setItem // getItem // removeItem // clear

// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');
//
// console.log(localStorage.getItem('name'));

// localStorage.removeItem('name');

// localStorage.clear();

// sessionStorage (key-value) // setItem // getItem // removeItem // clear  // session

// sessionStorage.setItem('name', 'John');
// sessionStorage.setItem('age', '30');
//
// console.log(sessionStorage.getItem('name'));


// sessionStorage.removeItem('name');

// sessionStorage.clear();

// task1

// local storage tarafıns aşağıdakş verileri kaydedin.
// username: gulalicelik
// password: 123456
// bu verileri consola yazdırın.

// localStorage.setItem('username','gulalicelik');
// localStorage.setItem('password','123456');

// console.log(localStorage.getItem('username'));
// console.log(localStorage.getItem('password'));


//Task2
// ekrana bir buton koyun ve bu butona tıklandığında
// butonun altında local storage'da kayıtlı olan username
// ve password bilgilerini yazdırın.

// const getLocalData = () => {
//     const username = localStorage.getItem('username');
//     const password = localStorage.getItem('password');
//     const myText = document.createElement('p');
//     myText.innerText = `Username: ${username} Password: ${password}`;
//     document.body.appendChild(myText);
// }


// task
// ekranada iki adet input olmalı
// bir tanessi email adresi diğeri parola alacak
// bir tane buton olacak (giriş yap butonu)
// butona tıklandığında inputlara girilen verileri localstorage verileri ile karşılaştırın
// eğer eşleşiyorsa alert mesajı ile giriş başarılı yazdırın
// eğer eşleşmiyorsa alert mesajı ile giriş başarısız yazdırın.

// const handleLogin = () => {
//     const inputUsername = document.querySelector('#username').value;
//     const inputPassword = document.querySelector('#password').value;
//     const localUsername = localStorage.getItem('username');
//     const localPassword = localStorage.getItem('password');
//     console.log(inputUsername);
    // console.log(inputPassword);
    // console.log(localUsername);
    // console.log(localPassword);
    // if(inputPassword === localPassword && inputUsername === localUsername) {
    //     alert('Giriş Başarılı');
    // }else {
    //     alert('Giriş Başarısız');
    // }
// }

// task
// sizden bir todo listesi yapmanız isteniyor.
// input ve buton ile yeni todo ekleyebileceğiniz bir alan olacak.
// bir todo eklendiğinde bunu localstorage'a kaydedeceksiniz.

const renderTodos = () => {
    const todos = localStorage.getItem('todos');
    const todoContainer = document.querySelector('.todo-container');
    todoContainer.innerHTML = '';
    const tempTodos = todos ? JSON.parse(todos) : [];
    tempTodos.forEach(todo => {
        const todoDiv = document.createElement('div');
        todoDiv.innerText = todo;
        todoContainer.appendChild(todoDiv);
    });
}

renderTodos();

const handleAddTodo = () => {
    const todoInput = document.querySelector('#todo').value;
    const todos = localStorage.getItem('todos');
    console.log(todos);
    const tempTodos = todos ? JSON.parse(todos) : [];
    tempTodos.push(todoInput);
    localStorage.setItem('todos', JSON.stringify(tempTodos));
    renderTodos();
}



// her bir elemanın yanında sil butonu olacak.
// sil butonuna tıklandığında o eleman silinecek.
// ekstra olarak her elemanın yanında bir checkbox olacak.
// checkbox işaretlendiğinde todo tamamlandı olarak işaretlenecek.