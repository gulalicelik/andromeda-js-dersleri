const myContainer = document.querySelector(".container");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            myContainer.innerHTML += `<div class="user-card">
        <div class="user-card__header">
            <img width="150px" src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="User Image" class="user-card__image">
        </div>
        <div class="user-card__content">
            <h2 class="user-card__title">${user.name}</h2>
            <p class="user-card__description">${user.email}</p>
            <p class="">${user.phone}</p>
        </div>
    </div>`;
        });
    })
    .catch(error => {
        console.log(error);
    }).finally(() => {
    console.log("Ben her zaman çalışırım");
});