// Retrieve the users array from localStorage, or start with an empty array if none exist
let usersDB = JSON.parse(localStorage.getItem("users")) || [];

// Get the container element where the user cards will be displayed
const cardsContainer = document.querySelector("#cards");

// Clear any existing content (if any)
cardsContainer.innerHTML = "";

// Render each user card using the stored users
usersDB.forEach((user) => {
  // Create the card element and assign the "card" class and inline width style
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.width = "18rem";
  // Use a data attribute to store the userId on the card
  card.setAttribute("data-user-id", user.userId);

  // Create the card body div with its class
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  // Create and append the user's name element
  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = user.userName;
  cardBody.appendChild(cardTitle);

  // Create and append the user's email element
  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.textContent = user.userEmail;
  cardBody.appendChild(cardText);

  // Create the delete button and add classes
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn", "btn-primary");
  deleteBtn.textContent = "Delete user";
  // Instead of an id that needs string manipulation, use a data attribute for the userId
  deleteBtn.setAttribute("data-user-id", user.userId);
  cardBody.appendChild(deleteBtn);

  // Append the card body to the card, then add the card to the container
  card.appendChild(cardBody);
  cardsContainer.appendChild(card);
});

// Use event delegation to handle clicks on the delete buttons within the cards container
cardsContainer.addEventListener("click", (event) => {
  // Check if the clicked element is a button and has a data-user-id attribute
  if (event.target.tagName === "BUTTON" && event.target.dataset.userId) {
    // Convert the dataset value (which is a string) into a number
    const userIdToDelete = parseInt(event.target.dataset.userId, 10);

    // Find the card element that should be removed
    const cardToDelete = event.target.closest(".card");
    if (cardToDelete) {
      cardToDelete.remove(); // Remove the card from the DOM
    }

    // Filter out the deleted user from the usersDB array
    usersDB = usersDB.filter(user => user.userId !== userIdToDelete);

    // Save the updated usersDB back to localStorage
    localStorage.setItem("users", JSON.stringify(usersDB));
  }
});
