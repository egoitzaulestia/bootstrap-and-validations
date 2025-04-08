const usersDB = JSON.parse(localStorage.getItem('users'));

const cards = document.querySelector('#cards');
cards.innerHTML = '';

usersDB.forEach(user => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardUserName = document.createElement('h5');
    cardUserName.classList.add('card-title');
    cardUserName.textContent = user.userName;
    cardBody.appendChild(cardUserName);

    const cardUserEmail = document.createElement('p');
    cardUserEmail.classList.add('card-text');
    cardUserEmail.textContent = user.userEmail;
    cardBody.appendChild(cardUserEmail);

    const deletBtn = document.createElement('button');
    const att = document.createAttribute('href');
    att.value = '#';
    deletBtn.setAttributeNode(att);
    deletBtn.classList.add('btn', 'btn-primary')
    deletBtn.textContent = 'Delete user'
    cardBody.appendChild(deletBtn);

    card.appendChild(cardBody)
    cards.appendChild(card);

});
