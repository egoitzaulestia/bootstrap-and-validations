const userData = JSON.parse(localStorage.getItem('user'));

console.log(userData.password);

const cards = document.querySelector('#cards');
cards.innerHTML = ''

const card = document.createElement('p')

card.innerHTML = `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${userData.name}</h5>
                        <p class="card-text">${userData.email}</p>
                        <a href="#" class="btn btn-primary">Delete user</a>
                    </div>
                </div>`

// card.innerHTML = 'Hello world'

cards.appendChild(card)