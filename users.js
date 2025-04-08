const userData = JSON.parse(localStorage.getItem('users'));

console.log(userData[0].userPassword);

const cards = document.querySelector('#cards');
cards.innerHTML = ''

const card = document.createElement('div')

const cardWrapper = document.createElement('div')

// userData.forEach(user => {
//     const card = docuement.createElement('div')
    
// });

card.innerHTML = `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${userData[0].userName}</h5>
                        <p class="card-text">${userData[0].userEmail}</p>
                        <a href="#" class="btn btn-primary">Delete user</a>
                    </div>
                </div>`

// card.innerHTML = 'Hello world'

cards.appendChild(card)