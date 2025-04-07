const userData = JSON.parse(localStorage.getItem('users'));

console.log(userData[1].userPassword);

const cards = document.querySelector('#cards');
cards.innerHTML = ''

const card = document.createElement('div')

const cardWrapper = document.createElement('div')


card.innerHTML = `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${userData[1].userName}</h5>
                        <p class="card-text">${userData[1].userEmail}</p>
                        <a href="#" class="btn btn-primary">Delete user</a>
                    </div>
                </div>`

// card.innerHTML = 'Hello world'

cards.appendChild(card)