const userId = localStorage.getItem("user_id");
const profileContainer = document.querySelector(".profile-container");

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        profileContainer.innerHTML = `<div class="profile-card">
        <div class="profile-card__header">
            <img width="150px" src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="User Image" class="profile-card__image">
        </div>
        <div class="profile-card__content">
            <h2 class="profile-card__title">${user.name}</h2>
            <p class="profile-card__description">${user.email}</p>
            <p class="">${user.phone}</p>
        </div>
    </div>`;
    }).catch(error => {
    console.log(error);
})