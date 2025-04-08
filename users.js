const usersDB = JSON.parse(localStorage.getItem('users'));

console.log(usersDB[0].userPassword);

const cards = document.querySelector('#cards');
cards.innerHTML = '';

usersDB.forEach(user => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';

    card.innerHTML = `<div class="card-body">
                        <h5 class="card-title">${user.userName}</h5>
                        <p class="card-text">${user.userEmail}</p>
                        <a href="#" class="btn btn-primary">Delete user</a>
                    </div>`;

    cards.appendChild(card);
});
