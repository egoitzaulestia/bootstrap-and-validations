const usersDB = JSON.parse(localStorage.getItem("users"));

const cards = document.querySelector("#cards");
cards.innerHTML = "";

let cardId = 1;

usersDB.forEach((user) => {
  const card = document.createElement("div");
  const attUserId = document.createAttribute('id');
  attUserId.value = `card${cardId}`;
  card.setAttributeNode(attUserId)
  card.classList.add("card");
  card.style.width = "18rem";

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardUserName = document.createElement("h5");
  cardUserName.classList.add("card-title");
  cardUserName.textContent = user.userName;
  cardBody.appendChild(cardUserName);

  const cardUserEmail = document.createElement("p");
  cardUserEmail.classList.add("card-text");
  cardUserEmail.textContent = user.userEmail;
  cardBody.appendChild(cardUserEmail);

  const deletBtn = document.createElement("button");
  const attHref = document.createAttribute("href");
  attHref.value = "#";
  deletBtn.setAttributeNode(attHref);
  const attId = document.createAttribute("id");
  attId.value = "deleteBtn";
  deletBtn.setAttributeNode(attId);
  deletBtn.classList.add("btn", "btn-primary");
  deletBtn.textContent = "Delete user";
  cardBody.appendChild(deletBtn);

  card.appendChild(cardBody);
  cards.appendChild(card);

  cardId++
});

// //TODO: deleteUser()
// const deleteUser = () => {
//   const deleteUserBtn = document.querySelector('#deleteBtn');
//   // let deteteId;
//   // const idUserToDelete = document.querySelector(`#card${deteteId}`)
//   usersDB.forEach(userId => {
//     // if ()
//   });

// };

// document.addEventListener("click", deleteUser);
